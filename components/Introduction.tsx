"use client"

import { Grid, GridCol, Group, Stack, Text } from "@mantine/core";
import Headshot from "./Headshot";
import { useMantineTheme } from '@mantine/core';
import { useScreenSize } from "./ScreenSizeContext";
import AnimateInView from "./AnimateInView";

const DecorativeTopPart = ({ isTablet }: { isTablet: boolean }) => {
    const theme = useMantineTheme();

    const width = isTablet ? 40 : 60;
    return (
        <Stack gap={isTablet ? "7px" : "xs"} w="fit-content">
            <Group align="flex-start" gap={isTablet ? "7px" : "xs"}>
                <div style={{ width: width, height: width, backgroundColor: theme.colors.lightColor[0], borderRadius: isTablet ? "5px" : "10px" }} />
                <div style={{ width: width / 2, height: width / 2, backgroundColor: theme.colors.lightColor[0], borderRadius: isTablet ? "5px" : "10px" }} />
            </Group>

            <div style={{ width: width / 2, height: width / 2, backgroundColor: theme.colors.lightColor[0], borderRadius: isTablet ? "5px" : "10px" }} />
        </Stack>
    );
}

const DecorativeBottomPart = ({ isTablet }: { isTablet: boolean }) => {
    const theme = useMantineTheme();

    const width = isTablet ? 40 : 60;
    return (
        <Stack gap={isTablet ? "7px" : "xs"} w="fit-content">
            <div style={{ width: width / 2, height: width / 2, backgroundColor: theme.colors.lightColor[0], borderRadius: isTablet ? "5px" : "10px" }} />

            <Group align="flex-end" gap={isTablet ? "7px" : "xs"}>
                <div style={{ width: width, height: width, backgroundColor: theme.colors.lightColor[0], borderRadius: isTablet ? "5px" : "10px" }} />
                <div style={{ width: width / 2, height: width / 2, backgroundColor: theme.colors.lightColor[0], borderRadius: isTablet ? "5px" : "10px" }} />
            </Group>
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
                        {!isMobile && <DecorativeTopPart isTablet={isTablet} />}
                    </AnimateInView>

                    <AnimateInView>
                        <div style={{ margin: "2rem auto" }}>
                            <Text c="darkColor" fz={isMobile ? "md" : "lg"}>Hello, my name is</Text>
                            <Text c="darkestColor" className="title" fz={isMobile ? 40 : isTablet ? 60 : 70} fw={300} mb={isMobile ? "md" : "xl"}>Brandon Jia</Text>

                            <Text c="darkColor" fz={isMobile ? "xs" : "sm"}>
                                A software engineer with a frontend focus who learns by building.
                                I design clean interfaces in Figma, ship apps with React and Next.js, and debug low-level systems when the project calls for it.
                            </Text>
                        </div>

                    </AnimateInView>

                    <AnimateInView>
                        {!isMobile && <DecorativeBottomPart isTablet={isTablet} />}
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