'use client';

import { Group, List, Text, ThemeIcon } from "@mantine/core";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import { ProjectList } from "../page";
import AnimateInView from "../../../components/AnimateInView";
import ZoomImage from "../../../components/ZoomImage";
import { IconPencil, IconBulb, IconCode } from "@tabler/icons-react";
import { motion } from "framer-motion";
import ProjectSectionHeader from "../../../components/ProjectSectionHeader";

export default function VirtualCowboyPage() {
    const { isMobile } = useScreenSize();

    const virtualCowboyProject = ProjectList.find(project => project.name === "Virtual Cowboy");

    if (!virtualCowboyProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={virtualCowboyProject} image="/project-images/virtual-cowboy/virtual-cowboy-poster.png" subtitle="Check out this poster I made!" />

            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Problem and Solution" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        Livestock (cattle in this particular instance) must be moved from enclosure to enclosure in order to avoid overgrazing, which has a variety of negative impacts. This is mostly done by actual humans herding the cattle around. The problem with hiring employees is that they tend to cost a lot of money.
                    </Text>

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="md">
                        Mr. Matthew Rossow approached UC Merced and offered his idea, which was then sent to a team of five students including myself. Mr. Rossow’s solution was to develop a mobile app that allowed farmers to herd cattle remotely. They would do so by drawing boundaries on a map, and then there would be some software hardware integration where the cattle would then be moved into those drawn zones. This would reduce manual labor in moving livestock around and potentially remove much of the need for fencing. Our team settled on creating the app using Expo for React Native.
                    </Text>
                </AnimateInView>
            </div>

            <div style={{ margin: "5rem 0" }}>
                <AnimateInView>
                    <ZoomImage image="/project-images/virtual-cowboy/virtual-cowboy-mockups.png" subtitle="Figma mockups for the app" />
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
                                Design of all styling choices and UI in Figma
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconBulb size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Planned all features to be included in the app
                            </Text>
                        </List.Item>

                        <List.Item
                            icon={
                                <ThemeIcon color="darkColor" size={isMobile ? 26 : 32} radius="xl" >
                                    <IconCode size={isMobile ? 16 : 20} />
                                </ThemeIcon>
                            }>
                            <Text fz={isMobile ? "xs" : "sm"} c="darkestColor">
                                Implemented the vast majority of the frontend using React Native
                            </Text>
                        </List.Item>

                    </List>
                </AnimateInView>
            </div>


            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Outcomes and Lessons" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        Ultimately, we were only able to deliver a proof-of-concept app rather than something more concrete. However, that was to be expected of a team of five students given only a few months. I would love to link the GitHub repository, but I do not own the repo and it’s unlikely I would get permission to make it public regardless. After working on this project, I improved my Figma skills and got more familiar with Expo and React Native.
                    </Text>

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="md">
                        If it sounded like I did a lot of the work in the above section, that’s because I did. In hindsight, this imbalance came about because it was one of my first times being placed in a leadership position for a group project of this scale and I elected to work with technologies more familiar to me than the rest of the team. For example, I was far more familiar with React in general than anyone else on the team, so it took them time to pick it up. In addition, I should have kept a closer eye on my peers’ progress. I was content back then to assign tasks and then leave them to their devices. This inevitably lead to some deadlines being missed.
                    </Text>
                </AnimateInView>
            </div>


            <div>
                <AnimateInView>
                    <ProjectSectionHeader title="Links" />

                    <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="xl">
                        Want to see who my teammates were? Check out their LinkedIn profiles here.
                    </Text>

                    <Group gap="3rem" align="center" justify="center" pb={isMobile ? "5rem" : "10rem"}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Text fz={isMobile ? 18 : 22} fw={300} mb="-1rem" c="darkestColor" onClick={() => window.open("https://www.linkedin.com/in/ritesh-patro-456620223/", "_blank")} className="title" style={{ cursor: "pointer" }}>
                                Ritesh Patro
                            </Text>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Text fz={isMobile ? 18 : 22} fw={300} mb="-1rem" c="darkestColor" onClick={() => window.open("https://www.linkedin.com/in/aditya-lakkoju-857986163/", "_blank")} className="title" style={{ cursor: "pointer" }}>
                                Aditya Lakkoju
                            </Text>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Text fz={isMobile ? 18 : 22} fw={300} mb="-1rem" c="darkestColor" onClick={() => window.open("https://www.linkedin.com/in/allyson-saelee-a9220a187/", "_blank")} className="title" style={{ cursor: "pointer" }}>
                                Allyson Saelee
                            </Text>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Text fz={isMobile ? 18 : 22} fw={300} mb="-1rem" c="darkestColor" onClick={() => window.open("https://www.linkedin.com/in/carlos-trim2/", "_blank")} className="title" style={{ cursor: "pointer" }}>
                                Carlos Trimbell
                            </Text>
                        </motion.div>
                    </Group>
                </AnimateInView>
            </div>

        </div>
    );
}   