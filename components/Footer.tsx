'use client'

import { Text, Button, Container, Group, Center, Stack, Divider, Modal, Checkbox, TextInput, Textarea } from "@mantine/core";
import { motion } from "framer-motion";
import { useScreenSize } from "./ScreenSizeContext";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IconBrandGithubFilled, IconBrandLinkedinFilled } from "@tabler/icons-react";
import SendMeEmailForm from "./SendMeEmailForm";

export const FOOTER_HEIGHT = 340; // px – change to taste

export function Footer() {
    const { isMobile } = useScreenSize();
    const [opened, { open, close }] = useDisclosure(false);

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
                    <SendMeEmailForm onSubmit={close} />
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

                    <Group gap="xs" mt="sm" justify="space-between" align="center">
                        <Text fz={isMobile ? "xs" : "sm"} c="lightestColor">© {new Date().getFullYear()} Brandon Jia. All rights reserved.</Text>

                        <Group gap="sm">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }} onClick={() => window.open("https://github.com/brandonj4564")}>
                                <IconBrandGithubFilled size={24} color="#E4E4E4" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/in/brandon-jia-39240423b/")}>
                                <IconBrandLinkedinFilled size={24} color="#E4E4E4" />
                            </motion.div>
                        </Group>
                    </Group>
                </Container>
            </footer>
        </div>
    );
}