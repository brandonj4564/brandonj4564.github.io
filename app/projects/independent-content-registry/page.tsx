'use client';

import ProjectSectionHeader from "../../../components/ProjectSectionHeader";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import AnimateInView from "../../../components/AnimateInView";
import { Text } from "@mantine/core";
import ZoomImage from "../../../components/ZoomImage";
import { ProjectList } from "../_projects";

export default function IndependentContentRegistryPage() {
    const { isMobile } = useScreenSize();

    const independentContentRegistryProject = ProjectList.find(project => project.name === "Independent Content Registry");

    if (!independentContentRegistryProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={independentContentRegistryProject} image="/project-images/independent-content-registry/icr-home-screen.png" subtitle="Screenshot of the current home screen" />

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Problem and Solution" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        AI training models need more and more data to perform well these days. Previously, people would just scrape the Internet for data often without proper attribution or consent. Creators who put out their work online had their content used without their permission as training data.
                    </Text>

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="md">
                        The idea for the Independent Content Registry was to create a platform where creators could license their content for AI to use in training models and get paid for it. This would allow creators to have more control over their content and give AI companies a place to source data ethically from.
                    </Text>
                </AnimateInView>
            </div>

            <div style={{ margin: "5rem 0" }}>
                <AnimateInView>
                    <ZoomImage image="/project-images/independent-content-registry/icr-mockups.png" subtitle="Figma mockups I made for a small part of the app" />
                </AnimateInView>
            </div>

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="My Role" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl" pb={isMobile ? "5rem" : "10rem"}>
                        This project is still ongoing and I am currently working on it. I&apos;ve designed mockups in Figma and implemented some of it in code using Makerkit. Feel free to check out the marketing website <a href="https://www.credtent.org/" target="_blank" rel="noopener noreferrer">here</a>.
                    </Text>
                </AnimateInView>
            </div>
        </div>
    );
}