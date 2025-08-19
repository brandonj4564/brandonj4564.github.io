'use client';

import { Button, Group, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useScreenSize } from "./ScreenSizeContext";
import AnimateInView from "./AnimateInView";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";

export default function Projects() {
    const { isMobile, isTablet } = useScreenSize();

    const projects: Project[] = [
        {
            name: "Virtual Cowboy",
            description: "A proof-of-concept mobile app built with Expo to allow farmers to replace their physical fencing with virtual drawn boundaries, simplifying the task of herding cattle.",
            image: "project-images/virtual-cowboy.png",
            href: "/projects/virtual-cowboy",
            tags: ["React Native", "TypeScript", "Expo", "Figma"],
            opacity: 0.8,
        },
        {
            name: "Independent Content Registry",
            description: "A tool which allows creators to license their content for AI to use in training models and get paid for it.",
            image: "project-images/credtent.png",
            href: "/projects/independent-content-registry",
            tags: ["Tailwind CSS", "TypeScript", "Makerkit", "React Remix", "Supabase", "Figma"],
            opacity: 0.85,
        },
        {
            name: "TinyOS Network",
            description: "Developed a simulated network using TinyOS and NesC, implementing core networking protocols including network flooding, node neighbor discovery, link state routing, and a rudimentary version of TCP.",
            image: "project-images/tinyos-network.png",
            href: "/projects/tinyos-network",
            tags: ["nesC", "TinyOS", "Networks", "TCP"],
            opacity: 0.7,
        }
    ]

    return (
        <div style={{ marginTop: isMobile ? "2rem" : isTablet ? "5rem" : "10rem", paddingBottom: isMobile ? "5rem" : "10rem" }}>
            <AnimateInView>
                <Group justify="space-between">
                    <Text fz={isMobile ? 24 : 40} c="darkestColor" fw={300} my="xl" className="title">Projects</Text>

                    <motion.div whileHover={{ scale: 1.05, y: 5 }} whileTap={{ scale: 0.98, y: 2 }}>
                        <Button
                            variant="transparent"
                            c="darkestColor"
                            fw={300}
                            fz={{ base: "sm", sm: "lg" }}
                            component="a"
                            href="/projects"
                            className="title"
                            rightSection={<IconChevronRight size={20} />}
                        >
                            View All
                        </Button>
                    </motion.div>
                </Group>
            </AnimateInView>

            <Stack gap="lg">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </Stack>
        </div>
    );
}