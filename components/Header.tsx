'use client'

import { Box, Container, Group, Button, Grid, Center } from "@mantine/core";
import { theme } from "../theme";
import { useHover } from '@mantine/hooks';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const { hovered, ref } = useHover();
    return (
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
                <span className="nav-ghost" aria-hidden="true">{children}</span>

                {/* real: the visible text that changes weight */}
                <span className="nav-real" style={{ fontWeight: hovered ? 400 : 300 }}>
                    {children}
                </span>
            </span>
        </Button>
    );
};

export default function Header() {
    return (
        <Box
            pos="sticky"
            top="0"
            mb="1rem"
            w="100vw" // Ensure full width
            bg={theme.colors?.backgroundColor ? theme.colors.backgroundColor[0] : '#F1F1F1'}
            style={{ zIndex: 99 }}
        >
            {/* Centered content inside */}
            <Container size="lg" p="2rem">

                {/* Navigation Links */}
                <Group justify="center" gap={64}>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Group>
            </Container>
        </Box>
    );
}