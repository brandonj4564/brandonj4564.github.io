"use client"

import { Center, Group, Text } from "@mantine/core";
import { IconBrandFacebook, IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandPinterestFilled, IconBrandSnapchatFilled, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useScreenSize } from "./ScreenSizeContext";
import AnimateInView from "./AnimateInView";

export default function Socials() {
    const { isMobile, isTablet } = useScreenSize();

    const iconSize = isMobile ? 35 : isTablet ? 50 : 60;

    return (
        <div >
            <AnimateInView>
                <Text fz={isMobile ? 24 : 40} c="darkestColor" fw={300} mt="xl" mb="md" className="title">Socials</Text>
            </AnimateInView>
            <AnimateInView>
                <Text fz={{ base: "xs", sm: "sm" }} c="darkColor" mb="xl">I’m always happy to talk about software engineering, projects, or potential opportunities. Use the form below or connect with me through one of the links.</Text>
            </AnimateInView>

            <AnimateInView>
                <Center w="100%">
                    <Group gap={isMobile ? "xl" : "3rem"}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ cursor: "pointer" }} onClick={() => window.open("https://github.com/brandonj4564")}>
                            <IconBrandGithubFilled size={iconSize} color="#1C1C1C" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/in/brandon-jia-39200423b/")}>
                            <IconBrandLinkedinFilled size={iconSize} color="#1C1C1C" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconBrandX size={iconSize} color="#1C1C1C" opacity={0.5} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconBrandFacebook size={iconSize} color="#1C1C1C" opacity={0.5} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconBrandInstagramFilled size={iconSize} color="#1C1C1C" opacity={0.5} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconBrandSnapchatFilled size={iconSize} color="#1C1C1C" opacity={0.5} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconBrandPinterestFilled size={iconSize} color="#1C1C1C" opacity={0.5} />
                        </motion.div>
                    </Group>
                </Center>
            </AnimateInView>
        </div>
    );
}