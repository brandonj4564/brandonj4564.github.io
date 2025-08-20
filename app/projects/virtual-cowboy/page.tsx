'use client';

import { Text } from "@mantine/core";
import { useScreenSize } from "../../../components/ScreenSizeContext";
import ProjectPageIntro from "../../../components/ProjectPageIntro";
import { ProjectList } from "../page";

export default function VirtualCowboyPage() {
    const { isMobile } = useScreenSize();

    const virtualCowboyProject = ProjectList.find(project => project.name === "Virtual Cowboy");

    if (!virtualCowboyProject) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectPageIntro project={virtualCowboyProject} image="/project-images/virtual-cowboy/virtual-cowboy-poster.png" />
        </div>
    );
}   