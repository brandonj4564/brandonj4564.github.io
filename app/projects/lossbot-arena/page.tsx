'use client';

import ProjectSectionHeader from "../../../components/ProjectSectionHeader";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import AnimateInView from "../../../components/AnimateInView";
import { List, Text, ThemeIcon } from "@mantine/core";
import ZoomImage from "../../../components/ZoomImage";
import { ProjectList } from "../_projects";
import { IconPencil, IconBulb, IconCode, IconSettings } from "@tabler/icons-react";

export default function LossBotArenaPage() {
    const { isMobile } = useScreenSize();

    const lossBotArenaProject = ProjectList.find(project => project.name === "LossBot Arena");

    if (!lossBotArenaProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={lossBotArenaProject} image="/project-images/lossbot-arena/lossbot-arena-landing.PNG" subtitle="Screenshot of the current landing page" />

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Problem and Solution" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        How many people out there use betting platforms like Polymarket or Kalshi regularly? How many of those people have an idea for a betting strategy? Out of those people, how many can actually create a bot to execute that strategy autonomously? Turning an idea into code is annoying and takes effort.
                    </Text>

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="md">
                        With the help of AI, LossBot Arena allows users to simply describe their strategy in plain language, and the platform will generate Python code which will be run on the backend to execute their strategy. Users can then view their strategy's performance in real-time.
                    </Text>
                </AnimateInView>
            </div>

            <div style={{ margin: "5rem 0" }}>
                <AnimateInView>
                    <ZoomImage image="/project-images/lossbot-arena/lossbot-arena-designs.png" subtitle="Early designs for the platform" />
                </AnimateInView>
            </div>

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="My Role" />

                    <List spacing="md" pb={isMobile ? "5rem" : "10rem"}>
                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconCode size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Built and deployed a full-stack platform with a Next.js and TypeScript frontend and a Python and FastAPI simulation engine, backed by a Supabase and PostgreSQL database.
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconSettings size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Engineered the simulation engine on AWS to run each strategy as a Lambda function communicating over a VPC, and wrote several hundred automated tests in pytest for regression coverage.
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconBulb size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Configured CloudWatch, BetterStack, Sentry, and PostHog for monitoring, uptime, error tracking, and analytics across the deployed system.
                            </Text>
                        </List.Item>

                    </List>
                </AnimateInView>
            </div>
        </div>
    );
}