'use client';

import { Text, Group, GridCol, Grid } from "@mantine/core";
import { useScreenSize } from "./ScreenSizeContext";
import { Project, Tag, DateTag } from "./ProjectCard";
import { LayoutGroup } from "framer-motion";
import ZoomImage from "./ZoomImage";

export default function ProjectPageIntro({
    project,
    image,
}: { project: Project; image: string }) {
    const { isMobile } = useScreenSize();

    return (
        <div>
            <LayoutGroup id="project-lightbox">
                <Grid gutter="xl" mt="xl">
                    <GridCol
                        span={{ base: 12, sm: 8 }}
                        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                    >
                        <Text fz={isMobile ? "md" : "lg"} className="project-card-title">Project</Text>
                        <Text fz={isMobile ? 36 : 48} fw={300} className="title">{project.name}</Text>
                        <Text c="darkColor" fz={isMobile ? "xs" : "sm"} mb="xl" mt="sm">
                            {project.description}
                        </Text>

                        <Group gap={isMobile ? "xs" : "lg"} mt={isMobile ? "lg" : "md"}>
                            {project.tags.map((tag, i) => <Tag key={i} tag={tag} isMobile={isMobile} />)}
                            <DateTag date={project.dates} isMobile={isMobile} color="darkColor" />
                        </Group>
                    </GridCol>

                    <GridCol
                        span={{ base: 12, sm: 4 }}
                        style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "flex-end" }}
                    >
                        <ZoomImage image={image} />
                    </GridCol>
                </Grid>
            </LayoutGroup>
        </div>
    );
}