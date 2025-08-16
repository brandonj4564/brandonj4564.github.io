'use client'

import { Text, Button, Container, Group, Center, Stack, Divider, Modal, Checkbox, TextInput, Textarea } from "@mantine/core";
import { motion } from "framer-motion";
import { useScreenSize } from "./ScreenSizeContext";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export const FOOTER_HEIGHT = 340; // px – change to taste

export function Footer() {
    const { isMobile } = useScreenSize();
    const [opened, { open, close }] = useDisclosure(true);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            subject: '',
            message: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            subject: (value) => (value.length < 1 ? 'Subject is required' : null),
            message: (value) => (value.length < 1 ? 'Message is required' : null),
        },
    });

    return (
        <div>
            <footer
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: FOOTER_HEIGHT,
                    zIndex: 1,                 // sits under the content
                    background: '#1C1C1C',
                    borderTop: '1px solid #333',
                }}
            >
                <Modal opened={opened} onClose={close} size="lg"
                    title={<Text className="project-card-title" fz="lg" c="darkestColor">Reach me by email</Text>}>

                    <form action={`https://formsubmit.co/brandonj4564@gmail.com`} method="POST"
                        onSubmit={(e) => {
                            if (!form.isValid()) {
                                e.preventDefault();
                                form.validate();
                            }

                            close();
                        }}>

                        <input type="hidden" name="_template" value="box" />

                        <Stack gap="lg">
                            <TextInput
                                label={<Text fz="sm" c="darkestColor">Email</Text>}
                                placeholder="your@email.com"
                                key={form.key('email')}
                                {...form.getInputProps('email')}
                                name="email"
                            />

                            <TextInput
                                label={<Text fz="sm" c="darkestColor">Subject</Text>}
                                placeholder="Subject"
                                key={form.key('subject')}
                                {...form.getInputProps('subject')}
                                name="subject"
                            />

                            <Textarea
                                label={<Text fz="sm" c="darkestColor">Message</Text>}
                                placeholder="Message"
                                key={form.key('message')}
                                autosize
                                {...form.getInputProps('message')}
                                minRows={4}
                                maxRows={8}
                                name="message"
                            />
                        </Stack>

                        <Group justify="flex-end" mt="md">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button type="submit" bg="darkColor" c="lightestColor" fz="sm" className="project-card-title">Submit</Button>
                            </motion.div>
                        </Group>
                    </form>

                </Modal>

                <Container size="xl" h="100%" p="0 2rem">
                    <Stack mt="3rem" align="center">
                        <Text fz="sm" c="lightColor">Want to contact me?</Text>
                        <Text fz={isMobile ? 32 : 40} c="lightestColor" className="project-card-title" mt="-1rem" mb="sm">REACH ME BY EMAIL</Text>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: isMobile ? "100%" : "25rem" }}>
                            <Button bg="lightColor" c="darkColor" fz={isMobile ? "md" : "lg"} w="100%" h="3rem" bdrs="10px" className="project-card-title" onClick={open}>SEND ME SOME GOOD NEWS</Button>
                        </motion.div>
                    </Stack>

                    <Divider mt="4rem" c="backgroundColor" opacity={0.3} />

                    <Group gap="xs" mt="md">
                        <Text fz={isMobile ? "xs" : "sm"} c="lightestColor">© {new Date().getFullYear()} Brandon Jia. All rights reserved.</Text>
                    </Group>
                </Container>
            </footer>
        </div>
    );
}