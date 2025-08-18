'use client'

import { Stack, TextInput, Textarea, Group, Button, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { motion } from "framer-motion";

export default function SendMeEmailForm({ onSubmit }: { onSubmit: () => void }) {
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

    return <form action={`https://formsubmit.co/brandonj4564@gmail.com`} method="POST"
        onSubmit={(e) => {
            if (!form.isValid()) {
                e.preventDefault();
                form.validate();
                return
            }

            onSubmit();
        }}>

        <input type="hidden" name="_template" value="box" />

        <Stack gap="lg">
            <TextInput
                label={<Text fz="sm" c="darkestColor">Email</Text>}
                placeholder="your@email.com"
                key={form.key('email')}
                {...form.getInputProps('email')}
                name="email"
                required
                withAsterisk={false}
            />

            <TextInput
                label={<Text fz="sm" c="darkestColor">Subject</Text>}
                placeholder="Subject"
                key={form.key('subject')}
                {...form.getInputProps('subject')}
                name="subject"
                required
                withAsterisk={false}
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
                required
                withAsterisk={false}
            />
        </Stack>

        <Group justify="flex-end" mt="md">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" bg="darkColor" c="lightestColor" fz="sm" className="project-card-title">Submit</Button>
            </motion.div>
        </Group>
    </form>;
}