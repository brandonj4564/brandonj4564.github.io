"use client"

import { Text, Stack } from "@mantine/core";
import AnimateInView from "../../components/AnimateInView";
import { useScreenSize } from "../../components/ScreenSizeContext";
import ProjectCard from "../../components/ProjectCard";
import { ProjectList } from "./_projects";

export default function ProjectsPage() {
    const { isMobile } = useScreenSize();

    return (
        <div>
            <AnimateInView>
                <Text fz={isMobile ? 24 : 40} c="darkestColor" fw={300} mt="xl" className="title">All my Projects</Text>
                <Text c="darkColor" fz={isMobile ? "xs" : "sm"} mb="xl" mt="sm">
                    Projects with the privilege of having their own pages.
                </Text>
            </AnimateInView>

            <Stack gap="lg">
                {ProjectList.map((project, index) => (
                    project.caseStudy ? (
                        <ProjectCard key={index} project={project} />
                    ) : null
                ))}
            </Stack>

            <AnimateInView>
                <Text fz={isMobile ? 20 : 28} c="darkestColor" fw={300} mt="3rem" mb="md" className="title">
                    Projects that merely link to a GitHub repository
                </Text>
            </AnimateInView>

            <Stack gap="lg" pb={isMobile ? "5rem" : "10rem"}>
                {ProjectList.map((project, index) => (
                    !project.caseStudy ? (
                        <ProjectCard key={index} project={project} />
                    ) : null
                ))}
            </Stack>
        </div>
    );
}