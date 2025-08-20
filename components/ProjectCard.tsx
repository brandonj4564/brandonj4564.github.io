import { Paper, BackgroundImage, Group, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AnimateInView from "./AnimateInView";
import { useScreenSize } from "./ScreenSizeContext";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { Project } from "../app/projects/_projects";

export const Tag = ({ tag, isMobile }: { tag: string, isMobile: boolean }) => {
    return (
        <Paper bdrs={{ base: "5px", sm: "10px" }} bg="lightColor" p={isMobile ? "0.25rem 0.5rem" : "0.5rem 1rem"} w="fit-content">
            <Text fz={isMobile ? "xs" : "sm"} c="darkColor" ff="Open Sans Condensed" fw="600">{tag.toUpperCase()}</Text>
        </Paper>
    );
}

export const DateTag = ({ date, isMobile, color = "lightColor" }: { date: string, isMobile: boolean, color?: string }) => {
    return (
        <Paper bdrs={{ base: "5px", sm: "10px" }} bg="transparent" bd={`2px solid ${color}`} p={isMobile ? "0.25rem 0.5rem" : "0.5rem 1rem"} w="fit-content">
            <Text fz={isMobile ? "xs" : "sm"} c={color} ff="Open Sans Condensed" fw="600">{date}</Text>
        </Paper>
    );
}

const ProjectCard = ({ project }: { project: Project }) => {
    const { hovered, ref } = useHover();
    const router = useRouter();
    const controls = useAnimationControls();
    const opacity = project.opacity || 0.8;
    const urlIsExternal = project.href.startsWith("http");

    const { isMobile, isTablet } = useScreenSize();

    useEffect(() => {
        controls.start(hovered ? "hidden" : "visible");
    }, [hovered, controls]);


    return (
        <AnimateInView>
            <motion.div ref={ref} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.15 }} style={{ cursor: "pointer" }} onClick={(e) => urlIsExternal ? window.open(project.href) : router.push(project.href)}>
                <BackgroundImage
                    src={project.image}
                    h="100%"
                    p="2rem 2rem"
                    style={{ borderRadius: isMobile ? "10px" : "20px", position: 'relative', overflow: "hidden", filter: hovered ? "grayscale(0%)" : "grayscale(100%)" }}
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
                                    background: `rgba(0, 0, 0, ${opacity})`,
                                    zIndex: 0
                                }}
                            />
                        )}
                    </AnimatePresence>


                    <motion.div layout variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }} initial="visible" animate={controls} style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                        <Text fz={isMobile ? 32 : isTablet ? 48 : 64} c="lightestColor" className="project-card-title">{project.name}</Text>
                        <Text fz={{ base: "xs", sm: "sm" }} mt={{ base: "xs", sm: "0" }} c="lightestColor">{project.description}</Text>
                        <Group gap={isMobile ? "xs" : "lg"} mt={isMobile ? "lg" : "xl"}>
                            {project.tags.map((tag, index) => (
                                <Tag key={index} tag={tag} isMobile={isMobile} />
                            ))}

                            <DateTag date={project.dates} isMobile={isMobile} />
                        </Group>
                    </motion.div>
                </BackgroundImage>
            </motion.div>
        </AnimateInView>
    );
}

export default ProjectCard;
