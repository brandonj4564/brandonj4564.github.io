"use client"

import { Grid, GridCol, Group, Stack, Text } from "@mantine/core";
import Headshot from "./Headshot";
import { useMantineTheme } from '@mantine/core';
import { useScreenSize } from "./ScreenSizeContext";
import AnimateInView from "./AnimateInView";

const DecorativeTopPart = () => {
    const theme = useMantineTheme();
    return (
        <Stack gap="xs" w="fit-content">
            <Group align="flex-start" gap="xs">
                <div style={{ width: "4rem", height: "4rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
                <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
            </Group>

            <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
        </Stack>
    );
}

const DecorativeBottomPart = () => {
    const theme = useMantineTheme();
    return (
        <Stack gap="xs" w="fit-content">
            <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />

            <Group align="flex-end" gap="xs">
                <div style={{ width: "4rem", height: "4rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
                <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
            </Group>
        </Stack>
    );
}

const DecorativeRightPart = () => {
    const theme = useMantineTheme();
    return (
        <Stack gap="xs" align="flex-end" w="fit-content">
            <Group align="flex-start" gap="xs">
                <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
                <div style={{ width: "4rem", height: "4rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
            </Group>

            <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
        </Stack>
    );
}

export default function Introduction() {
    const { isMobile, isTablet } = useScreenSize();

    return (
        <div>
            <Grid gutter="xl">
                <GridCol span={{ base: 12, sm: 7 }} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "inherit" }}>
                    <AnimateInView>

                        {!isMobile && <DecorativeTopPart />}

                        <div style={{ margin: "2rem auto" }}>
                            <Text c="darkColor" fz={isMobile ? "md" : "lg"}>Hello, my name is</Text>
                            <Text c="darkestColor" className="title" fz={isMobile ? 40 : isTablet ? 60 : 70} fw={300} mb={isMobile ? "md" : "xl"}>Brandon Jia</Text>

                            <Text c="darkColor" fz={isMobile ? "xs" : "sm"}>
                                A software engineer with a frontend focus who learns by building.
                                I design clean interfaces in Figma, ship apps with React and Next.js, and debug low-level systems when the project calls for it.
                            </Text>
                        </div>

                        {!isMobile && <DecorativeBottomPart />}
                    </AnimateInView>
                </GridCol>

                <GridCol span={{ base: 12, sm: 5 }} style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "flex-end" }}>
                    <AnimateInView>

                        <Headshot
                            width={isMobile ? "100%" : isTablet ? 300 : 400}
                            src="/headshot.png"
                            alt="Brandon Jia"
                        />
                    </AnimateInView>
                </GridCol>
            </Grid>
        </div>
    );
}