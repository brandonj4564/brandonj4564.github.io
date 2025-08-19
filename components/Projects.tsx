'use client';

import { Button, Group, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useScreenSize } from "./ScreenSizeContext";
import AnimateInView from "./AnimateInView";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";
import { ProjectList } from "../app/projects/page";

export default function Projects() {
    const { isMobile, isTablet } = useScreenSize();

    const projects: Project[] = ProjectList.slice(0, 3);

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