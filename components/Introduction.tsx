"use client"

import { Grid, GridCol, Group, Stack, Text } from "@mantine/core";
import Headshot from "./Headshot";
import { useMantineTheme } from '@mantine/core';

const DecorativeTopPart = () => {
    const theme = useMantineTheme();
    return (
        <Stack gap="xs">
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
        <Stack gap="xs">
            <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />

            <Group align="flex-end" gap="xs">
                <div style={{ width: "4rem", height: "4rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
                <div style={{ width: "2rem", height: "2rem", backgroundColor: theme.colors.lightColor[0], borderRadius: "10px" }} />
            </Group>
        </Stack>
    );
}

export default function Introduction() {
    return (
        <div>
            <Grid>
                <GridCol span={7} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "inherit" }}>
                    <DecorativeTopPart />

                    <div>
                        <Text c="darkColor" fz="lg">Hello, my name is</Text>
                        <Text c="darkestColor" className="title" fz={70} fw={300} mb="xl">Brandon Jia</Text>

                        <Text c="darkColor" fz="sm">
                            A software engineer with a frontend focus who learns by building.
                            I design clean interfaces in Figma, ship apps with React and Next.js, and debug low-level systems when the project calls for it.
                        </Text>
                    </div>

                    <DecorativeBottomPart />
                </GridCol>

                <GridCol span={5} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Headshot
                        src="/headshot.png"
                        alt="Brandon Jia"
                    />
                </GridCol>
            </Grid>
        </div>
    );
}