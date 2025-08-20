import { Text, TextProps } from "@mantine/core";
import { useScreenSize } from "./ScreenSizeContext";

export default function ProjectSectionHeader({ title, ...props }: { title: string } & TextProps) {
    const { isMobile } = useScreenSize();

    return (
        <Text fz={isMobile ? 24 : 32} fw={300} mt={isMobile ? "3rem" : "5rem"} mb="md" c="darkestColor" className="title" {...props}>
            {title}
        </Text>
    );
}