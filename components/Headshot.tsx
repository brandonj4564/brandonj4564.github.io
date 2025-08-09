'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./component-styles.css";
import { motion } from 'framer-motion';

type Props = {
    src: string;
    alt?: string;
    words?: string[];          // e.g. ["ENGINEER", "DESIGNER", "BUILDER"]
    width?: number | string;   // container width
    aspectRatio?: number;      // width / height
    barY?: number;             // vertical position of bar (0–100%), default ~45
    barHeight?: number;        // px height of the bar
    typingSpeed?: number;      // ms per char while typing
    deletingSpeed?: number;    // ms per char while deleting
    pauseAtWord?: number;      // ms to hold a full word before deleting
    hoverUngray?: boolean;     // regain color on hover
};

export default function CensoredHeadshot({
    src,
    alt = "",
    words = ["ENGINEER", "DESIGNER", "BUILDER"],
    width = 400,
    aspectRatio = 853 / 1280,
    typingSpeed = 70,
    deletingSpeed = 45,
    pauseAtWord = 1500,
}: Props) {
    const [display, setDisplay] = useState("");
    const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
    const [index, setIndex] = useState(0);
    const word = useMemo(() => words[index % words.length], [words, index]);

    const barHeight = 75;

    // Typewriter loop
    useEffect(() => {
        let t: number | undefined;

        if (phase === "typing") {
            if (display.length < word.length) {
                t = window.setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typingSpeed);
            } else {
                setPhase("pausing");
            }
        } else if (phase === "pausing") {
            t = window.setTimeout(() => setPhase("deleting"), pauseAtWord);
        } else if (phase === "deleting") {
            if (display.length > 0) {
                t = window.setTimeout(() => setDisplay(word.slice(0, display.length - 1)), deletingSpeed);
            } else {
                setIndex((i) => (i + 1) % words.length);
                setPhase("typing");
            }
        }
        return () => clearTimeout(t);
    }, [display, phase, word, typingSpeed, deletingSpeed, pauseAtWord, words.length]);

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={containerRef}
            className={`censor-wrap hover-color`}
            style={{
                width: typeof width === "number" ? `${width}px` : width,
                aspectRatio: String(aspectRatio),
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
            aria-label={`${alt}. Roles: ${words.join(", ")}.`}
        >
            <img
                src={src}
                alt={alt}
                className="censor-img"
            />
            <div
                className="bar"
                style={{
                    top: `${43}%`,
                    height: `${barHeight}px`,
                    marginTop: `-${barHeight / 2}px`,
                }}
            >
                <span className="type">{display}</span>
                <span className="cursor" aria-hidden="true">|</span>
            </div>
        </motion.div>
    );
}
