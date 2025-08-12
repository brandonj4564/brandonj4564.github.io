'use client';

import { BackgroundImage, Container, Group, Overlay, Paper, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Project {
    name: string;
    description: string;
    image: string;
    href: string;
    tags: string[];
}

const Tag = ({ tag }: { tag: string }) => {
    return (
        <Paper bdrs="10px" bg="lightColor" p="0.5rem 1rem" w="fit-content">
            <Text fz="sm" c="darkColor" ff="Open Sans Condensed" fw="600">{tag.toUpperCase()}</Text>
        </Paper>
    );
}

const ProjectCard = ({ project }: { project: Project }) => {
    const { hovered, ref } = useHover();
    const router = useRouter();
    const controls = useAnimationControls();

    useEffect(() => {
        controls.start(hovered ? "hidden" : "visible");
    }, [hovered]);

    return (
        <motion.div ref={ref} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }} style={{ cursor: "pointer" }} onClick={() => router.push(project.href)}>
            <BackgroundImage
                src={project.image}
                h="100%"
                p="2rem 2rem"
                style={{ borderRadius: "20px", position: 'relative', overflow: "hidden", filter: hovered ? "grayscale(0%)" : "grayscale(100%)" }}
            >
                {/* Dark overlay */}
                <AnimatePresence
                    mode="popLayout"
                >
                    {!hovered && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0, 0, 0, 0.8)',
                                zIndex: 0
                            }}
                        />
                    )}
                </AnimatePresence>


                <motion.div layout variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }} initial="visible" animate={controls} style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                    <Text fz={64} c="lightestColor" className="project-card-title">{project.name}</Text>
                    <Text fz="sm" c="lightestColor">{project.description}</Text>
                    <Group gap="lg" mt="xl">
                        {project.tags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </Group>
                </motion.div>
            </BackgroundImage>
        </motion.div>
    );
}

export default function Projects() {
    const projects = [
        {
            name: "Virtual Cowboy",
            description: "A proof-of-concept mobile app built with Expo to allow farmers to replace their physical fencing with virtual drawn boundaries, simplifying the task of herding cattle.",
            image: "virtual-cowboy.png",
            href: "/projects/virtual-cowboy",
            tags: ["React Native", "TypeScript", "Expo"],
        }
    ]

    return (
        <div>
            <Text mt="10rem">Projects</Text>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}