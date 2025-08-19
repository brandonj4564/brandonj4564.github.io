'use client';

import { Card, Center, Container, Text } from "@mantine/core";
import SendMeEmailForm from "../../components/SendMeEmailForm";
import Socials from "../../components/Socials";
import {
    motion,
    useScroll,
    useVelocity,
    useSpring,
    useTransform,
    useReducedMotion,
    MotionValue,
} from "framer-motion";
import { useScreenSize } from "../../components/ScreenSizeContext";
import React from "react";
import AnimateInView from "../../components/AnimateInView";

export default function ContactPage() {
    const { isMobile } = useScreenSize();
    const prefersReduced = useReducedMotion();

    // 1) Read scroll position and derive velocity (px/s). Positive = scrolling DOWN.
    const { scrollY } = useScroll();
    const v = useVelocity(scrollY);

    // 2) Smooth the velocity so the motion feels elastic.
    const vSmooth = useSpring(v as MotionValue<number>, {
        stiffness: 140,
        damping: 18,
        mass: 0.6,
    });

    // 3) Intensity knob (lighter on mobile).
    const INTENSITY = isMobile ? 0.7 : 1.0;

    // 4) Map velocity -> vertical offset (y). Clamp to avoid extreme jumps.
    //    Scroll down (positive v) -> move card slightly DOWN; scroll up -> move UP.
    //    Tweak the 800/±20 numbers to taste.
    const yRaw = useTransform(
        vSmooth,
        [-800, 0, 800],
        [-20 * INTENSITY, 0, 20 * INTENSITY]
    );

    // 5) Add a second spring to give a soft "bounce/settle" on the y offset itself.
    const y = useSpring(yRaw, {
        stiffness: 220,  // lower = wobblier
        damping: 16,     // lower = more bounce/overshoot
        mass: 0.7,
    });

    // (Optional) tiny squash when the card compresses downward; subtle.
    const scale = useTransform(y, [-20, 0, 20], [1.005, 1, 0.995]);

    const styleIfMotion = prefersReduced
        ? {}
        : {
            y,
            scale,
            transformOrigin: "50% 50%",
            willChange: "transform",
        };

    return (
        <div>
            <Socials />

            {/* spacer */}
            <div style={{ height: isMobile ? "5rem" : "8rem" }} />

            <div
                className="hero-pattern"
                style={{ width: "100dvw", position: "absolute", left: 0, padding: isMobile ? "7rem 0" : "5rem 0" }}
            >
                <motion.div layout style={styleIfMotion as any}>
                    <AnimateInView>
                        <Container size="xl" p="0 2rem" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                            <Card w={isMobile ? "100%" : 450} bg="backgroundColor" bdrs="10px" p="lg">
                                <Text fz={isMobile ? "xl" : "2.5rem"} mb="md" c="darkestColor" className="project-card-title">
                                    Reach me by email
                                </Text>
                                <SendMeEmailForm onSubmit={() => { }} />
                            </Card>
                        </Container>
                    </AnimateInView>
                </motion.div>
            </div>

            {/* Spacer for the hero pattern */}
            <div style={{ height: isMobile ? "calc(450px + 14rem + 15rem)" : "calc(450px + 10rem + 15rem)", backgroundColor: "#F1F1F1" }} />
        </div>
    );
}
