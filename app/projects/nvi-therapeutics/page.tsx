'use client';

import ProjectSectionHeader from "../../../components/ProjectSectionHeader";
import { ProjectList } from "../page";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import AnimateInView from "../../../components/AnimateInView";
import { List, Text, ThemeIcon } from "@mantine/core";
import ZoomImage from "../../../components/ZoomImage";
import { IconCode, IconPencil, IconWorld } from "@tabler/icons-react";

export default function NVITherapeuticsPage() {
    const { isMobile } = useScreenSize();

    const nviTherapeuticsProject = ProjectList.find(project => project.name === "NVI Therapeutics");

    if (!nviTherapeuticsProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={nviTherapeuticsProject} image="/project-images/nvi-therapeutics/nvi-poster.png" subtitle="A flyer I spent a lot of time making for NVI. I don't think they ever used it..." />

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Why does this project have its own page? It's just a website." />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        Yeah, I know. Listen, I would love to have simply linked to the GitHub repository for this one and skipped having to make another page.
                        However, I think the good people at NVI Therapeutics would not want me to make that repo public so I'll just do this instead.
                        Please visit the website <a href="https://nvi-therapeutics.com/" target="_blank">here</a>.
                    </Text>
                </AnimateInView>
            </div>

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="My Role" />

                    <List spacing="md">
                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconPencil size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Designed all the mockups in Figma
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconCode size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Built the website with Next.js in Typescript, used Mantine for UI, and connected to a headless CMS called Sanity
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconWorld size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Hosted the website on GoDaddy
                            </Text>
                        </List.Item>

                    </List>
                </AnimateInView>
            </div>

            <div style={{ height: isMobile ? "5rem" : "10rem" }} />
        </div>
    );
}