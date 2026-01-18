'use client';

import { Group, List, Text, ThemeIcon } from "@mantine/core";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import AnimateInView from "../../../components/AnimateInView";
import ZoomImage from "../../../components/ZoomImage";
import { IconPencil, IconBulb, IconCode, IconSettings } from "@tabler/icons-react";
import { motion } from "framer-motion";
import ProjectSectionHeader from "../../../components/ProjectSectionHeader";
import { ProjectList } from "../_projects";

export default function MyNextStagePage() {
    const { isMobile } = useScreenSize();

    const myNextStageProject = ProjectList.find(project => project.name === "MyNextStage");

    if (!myNextStageProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={myNextStageProject} image="/project-images/mynextstage/mns-landing-page.png" subtitle="The landing page for the MyNextStage platform" />

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Problem and Solution" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        It's difficult to hire employees that match well with the team and manager they'll be working with. Even if an applicant is well qualified for the position, there's no guarantee they'll mesh with the existing team or manager. It sure would be convenient if there was a way to predict how well someone would fit in before hiring them.
                    </Text>

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="md">
                        MyNextStage is a startup that wants to tackle this issue. They provide a platform where job applicants, existing employees, and managers can take a personality assessment and receive insights about how well they would fit together. <a href="https://savvystack.com/" target="_blank">SavvyStack Inc.</a> (and I by extension) was contracted to build the application for MyNextStage.
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
                                    <IconCode size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Implemented the backend of a full-stack web application using Makerkit to match job candidates with hiring managers and teams based on multi-factor fit metrics.
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconSettings size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Designed data models and APIs to compute a quantitative fit score incorporating personality vectors to optimize retention and job satisfaction.
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconBulb size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Met with MyNextStage founders to discuss requirements and scope of the project, as well as technical decisions and implementation strategies.
                            </Text>
                        </List.Item>

                    </List>
                </AnimateInView>
            </div>

        </div>
    );
}   