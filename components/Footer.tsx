'use client'

import { Text, Button, Container, Group, Center, Stack, Divider } from "@mantine/core";
import { motion } from "framer-motion";

export const FOOTER_HEIGHT = 340; // px – change to taste

export function Footer() {
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
                <Container size="xl" h="100%">
                    <Stack mt="3rem" align="center">
                        <Text fz="sm" c="lightColor">Want to contact me?</Text>
                        <Text fz={40} c="lightestColor" className="project-card-title" mt="-1rem" mb="sm">REACH ME BY EMAIL</Text>

                        <motion.div whileHover={{ scale: 1.02 }}>
                            <Button bg="lightColor" c="darkColor" fz="lg" w="25rem" h="3rem" bdrs="10px" className="project-card-title">SEND ME SOME GOOD NEWS</Button>
                        </motion.div>
                    </Stack>

                    <Divider mt="4rem" c="backgroundColor" opacity={0.3} />

                    <Group gap="xs" mt="md">
                        <Text size="sm" c="lightestColor">© {new Date().getFullYear()} Brandon Jia. All rights reserved.</Text>
                    </Group>
                </Container>
            </footer>
        </div>
    );
}