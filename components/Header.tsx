'use client'

import { Box, Container, Group, Button } from "@mantine/core";
import { theme } from "../theme";
import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode; }) => {
    const { hovered, ref } = useHover();

    return (
        <motion.div whileHover={{ scale: 1.05, y: 5 }} whileTap={{ scale: 0.98, y: 2 }}>
            <Button
                ref={ref}
                variant="transparent"
                p="0"
                fz={{ base: "md", md: "lg" }}
                c={hovered ? 'black' : 'darkestColor'}
                component="a"
                href={href}
                className="nav-link title"
                styles={{ label: { display: 'block', padding: 0 } }} // Mantine: keep padding stable
            >
                <span className="nav-width-lock">
                    {/* ghost: reserves width of the boldest state */}
                    {/* <span className="nav-ghost" aria-hidden="true">{children}</span> */}

                    {/* real: the visible text that changes weight */}
                    <span className="nav-real">
                        {children}
                    </span>
                </span>
            </Button>
        </motion.div>
    );
};

export default function Header() {
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
                <Container size="xl" p="3rem 2rem 2rem 2rem">

                    {/* Navigation Links */}
                    <Group justify="center" gap={64}>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <NavLink href="/resume">Resume</NavLink>
                    </Group>
                </Container>
            </header>
        </Box>
    );
}