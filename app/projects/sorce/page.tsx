'use client';

import ProjectSectionHeader from "../../../components/ProjectSectionHeader";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import AnimateInView from "../../../components/AnimateInView";
import { List, Text, ThemeIcon } from "@mantine/core";
import ZoomImage from "../../../components/ZoomImage";
import { ProjectList } from "../_projects";
import { IconCode, IconBrain, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function SORCEPage() {
    const { isMobile } = useScreenSize();

    const sorceProject = ProjectList.find(project => project.name === "SORCE App");

    if (!sorceProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={sorceProject} image="/project-images/sorce/measurement.webp" subtitle="Image taken from the App Store" />

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="About the Project" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        I was contracted by SORCE to work on the React Native version of their mobile application. Their existing React Native app was far behind the Swift app on iOS, so I was brought in to achieve feature parity. I ended up training a machine learning model in PyTorch which improved upon the existing heart beat detection algorithm.
                        The app is available <Link href="https://apps.apple.com/us/app/sorce-app/id1579387289" target="_blank">here</Link>.
                    </Text>
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
                                Brought an incomplete React Native version of the application up to feature parity with its existing native counterpart, implementing features and interfaces from client specifications.
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconBrain size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Trained a machine learning model in Python with PyTorch to detect heartbeat peaks in camera footage, replacing an existing algorithm that did not perform reliably on React Native, and validated it against the prior approach on the same data.
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconUser size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Met with the client and lead developer each sprint to scope features and priorities, implementing the agreed-upon work as tracked tickets in Jira.
                            </Text>
                        </List.Item>

                    </List>
                </AnimateInView>
            </div>
        </div>
    );
}