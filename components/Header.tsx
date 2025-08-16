'use client'

import { useDisclosure } from '@mantine/hooks';
import { Box, Container, Group, Button, Text, Drawer, Stack } from "@mantine/core";
import { theme } from "../theme";
import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useScreenSize } from "./ScreenSizeContext";
import { IconMenu2 } from "@tabler/icons-react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode; }) => {
    const { hovered, ref } = useHover();

    return (
        <motion.div whileHover={{ scale: 1.05, y: 5 }} whileTap={{ scale: 0.98, y: 2 }} style={{ width: "fit-content" }}>
            <Button
                ref={ref}
                variant="transparent"
                p="0"
                fz={{ base: "md", md: "lg" }}
                c={hovered ? 'black' : 'darkestColor'}
                component="a"
                href={href}
                className="title"
                styles={{ label: { display: 'block', padding: 0 } }} // Mantine: keep padding stable
            >
                <span className="nav-width-lock">
                    <span className="nav-real">
                        {children}
                    </span>
                </span>
            </Button>
        </motion.div>
    );
};

export default function Header() {
    const { isMobile } = useScreenSize();
    const [opened, { open, close }] = useDisclosure(false);


    return (
        <Box
            pos="sticky"
            top="0"
            mb="1rem"
            w="100%" // Ensure full width
            bg="backgroundColor"
            style={{ zIndex: 99 }}
        >
            <header>
                {/* Centered content inside */}
                {isMobile ?
                    <Container size="xl" p="2rem 2rem 1rem 2rem">
                        <Drawer
                            opened={opened} onClose={close} position="right"
                            title={<Text className="project-card-title" fz="lg" c="darkestColor">
                                MENU
                            </Text>}
                            bg="backgroundColor"
                            size="sm"
                            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                        >
                            <Stack gap="md" mt="sm">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About</NavLink>
                                <NavLink href="/projects">Projects</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </Stack>
                        </Drawer>

                        <Group justify="space-between" align="center">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Button component="a" href="/resume.pdf" bg="darkColor" c="lightestColor" fz="md" h="3rem" bdrs="10px" className="project-card-title">My Résumé</Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Group gap="xs" align="center" onClick={open}>
                                    <Text className="title" fw={300} c="darkestColor">
                                        MENU
                                    </Text>
                                    <IconMenu2 color="#1C1C1C" strokeWidth={1} />
                                </Group>
                            </motion.div>
                        </Group>
                    </Container>
                    :
                    <Container size="xl" p="3rem 2rem 2rem 2rem">
                        {/* Navigation Links */}
                        <Group justify="center" gap={64}>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                            <NavLink href="/resume.pdf">Résumé</NavLink>
                        </Group>
                    </Container>
                }
            </header >
        </Box >
    );
}