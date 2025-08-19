"use client"

import { Text, Stack } from "@mantine/core";
import AnimateInView from "../../components/AnimateInView";
import { useScreenSize } from "../../components/ScreenSizeContext";
import { Project } from "../../components/ProjectCard";
import ProjectCard from "../../components/ProjectCard";

// The first 3 projects are shown on the homepage
export const ProjectList: Project[] = [
    {
        name: "Virtual Cowboy",
        description: "A proof-of-concept mobile app built with Expo to allow farmers to replace their physical fencing with virtual drawn boundaries, simplifying the task of herding cattle.",
        image: "project-images/virtual-cowboy.png",
        href: "/projects/virtual-cowboy",
        tags: ["React Native", "TypeScript", "Expo", "Figma"],
        opacity: 0.8,
        caseStudy: true,
    },
    {
        name: "Independent Content Registry",
        description: "A tool which allows creators to license their content for AI to use in training models and get paid for it.",
        image: "project-images/credtent.png",
        href: "/projects/independent-content-registry",
        tags: ["Tailwind CSS", "TypeScript", "Makerkit", "React Remix", "Supabase", "Figma"],
        opacity: 0.85,
        caseStudy: true,
    },
    {
        name: "TinyOS Network",
        description: "Developed a simulated network using TinyOS and NesC, implementing core networking protocols including network flooding, node neighbor discovery, link state routing, and a rudimentary version of TCP.",
        image: "project-images/tinyos-network.png",
        href: "https://github.com/brandonj4564/tinyos-network",
        tags: ["nesC", "TinyOS", "Networks", "TCP"],
        opacity: 0.7,
        caseStudy: false,
    }
]

export default function ProjectsPage() {
    const { isMobile } = useScreenSize();

    return (
        <div>
            <AnimateInView>
                <Text fz={isMobile ? 24 : 40} c="darkestColor" fw={300} mt="xl" className="title">All my Projects</Text>
                <Text c="darkColor" fz={isMobile ? "xs" : "sm"} mb="xl" mt="sm">
                    Projects with their own pages.
                </Text>
            </AnimateInView>

            <Stack gap="lg">
                {ProjectList.map((project, index) => (
                    project.caseStudy ? (
                        <ProjectCard key={index} project={project} />
                    ) : null
                ))}
            </Stack>

            <Text fz={isMobile ? 20 : 28} c="darkestColor" fw={300} mt="3rem" mb="md" className="title">
                Projects that link to GitHub
            </Text>


            <Stack gap="lg">
                {ProjectList.map((project, index) => (
                    !project.caseStudy ? (
                        <ProjectCard key={index} project={project} />
                    ) : null
                ))}
            </Stack>
        </div>
    );
}