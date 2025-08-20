'use client';

import { useScreenSize } from "./ScreenSizeContext";
import { useHover } from "@mantine/hooks";
import {
    AnimatePresence,
    motion,
    useMotionValue, LayoutGroup
} from "framer-motion";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Text } from "@mantine/core";

const ZOOM_MIN = 1;
const ZOOM_MAX = 5;
const ZOOM_STEP = 1.12;

export default function ZoomImage({
    image, subtitle
}: { image: string, subtitle?: string }) {
    const { isMobile } = useScreenSize();
    const { hovered, ref } = useHover();
    const [open, setOpen] = useState(false);

    // Motion values for expanded view
    const scale = useMotionValue(1);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Always allow drag (default action)
    const [isDragging, setIsDragging] = useState(false);

    const imgRef = useRef<HTMLImageElement | null>(null);

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    /* =========================
       Desktop wheel zoom (cursor-centric)
       ========================= */
    const onWheelZoom = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();
        const s0 = scale.get();

        const dir = e.deltaY < 0 ? 1 : -1; // wheel up = zoom in
        const s1 = clamp(s0 * (dir > 0 ? ZOOM_STEP : 1 / ZOOM_STEP), ZOOM_MIN, ZOOM_MAX);
        if (s1 === s0) return;

        // mouse relative to image center
        const mx = e.clientX - (rect.left + rect.width / 2);
        const my = e.clientY - (rect.top + rect.height / 2);

        const factor = s1 / s0 - 1;
        x.set(x.get() - mx * factor);
        y.set(y.get() - my * factor);
        scale.set(s1);
    }, [scale, x, y]);

    const resetView = useCallback(() => {
        scale.set(1);
        x.set(0);
        y.set(0);
    }, [scale, x, y]);

    // ESC to close, R to reset
    useEffect(() => {
        if (!open) return;
        const onKey = (ev: KeyboardEvent) => {
            if (ev.key === "Escape") setOpen(false);
            if (ev.key.toLowerCase() === "r") resetView();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, resetView]);

    // lock body scroll while overlay is open
    useEffect(() => {
        // reset view when opening
        resetView();

        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, [open]);

    /* =========================
       Pointer-based pinch + pan (drag is default)
       ========================= */
    const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
    const pinchBaseline = useRef<{ dist: number; midRel: { x: number; y: number }, x0: number, y0: number, s0: number } | null>(null);
    const lastSingle = useRef<{ x: number; y: number } | null>(null);

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        if (!imgRef.current) return;
        e.preventDefault(); // NEW: block native drag/select
        (e.target as Element).setPointerCapture?.(e.pointerId);
        pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pointers.current.size === 1) {
            setIsDragging(true);
            lastSingle.current = { x: e.clientX, y: e.clientY };
        }
        e.stopPropagation(); // don't close overlay
    }, []);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!imgRef.current || !pointers.current.has(e.pointerId)) return;
        e.preventDefault(); // NEW: keep control of the gesture

        const curr = { x: e.clientX, y: e.clientY };
        pointers.current.set(e.pointerId, curr);

        const pts = Array.from(pointers.current.values());

        if (pts.length === 2) {
            const [p1, p2] = pts;
            const rect = imgRef.current.getBoundingClientRect();
            const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
            const midRel = {
                x: mid.x - (rect.left + rect.width / 2),
                y: mid.y - (rect.top + rect.height / 2),
            };
            const distNow = Math.hypot(p1.x - p2.x, p1.y - p2.y);

            if (!pinchBaseline.current) {
                pinchBaseline.current = { dist: distNow, midRel, x0: x.get(), y0: y.get(), s0: scale.get() };
                return;
            }
            const { dist, midRel: baseMid, x0, y0, s0 } = pinchBaseline.current;
            const nextScale = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, s0 * (distNow / dist)));
            const factor = nextScale / s0;

            const dx = (midRel.x - baseMid.x * factor);
            const dy = (midRel.y - baseMid.y * factor);

            scale.set(nextScale);
            x.set(x0 + dx);
            y.set(y0 + dy);
        } else if (pts.length === 1) {
            const p = pts[0];
            if (lastSingle.current) {
                const dx = p.x - lastSingle.current.x;
                const dy = p.y - lastSingle.current.y;
                x.set(x.get() + dx);
                y.set(y.get() + dy);
            }
            lastSingle.current = { ...p };
        }
    }, [scale, x, y]);

    const onPointerUp = useCallback((e: React.PointerEvent) => {
        pointers.current.delete(e.pointerId);

        if (pointers.current.size < 2) pinchBaseline.current = null;
        if (pointers.current.size === 0) {
            lastSingle.current = null;
            setIsDragging(false);
        }
    }, []);

    const overlay = useMemo(
        () =>
            open
                ? createPortal(
                    <AnimatePresence>
                        {/* Backdrop */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "rgba(0,0,0,0.6)",
                                zIndex: 4000,
                            }}
                            onClick={() => setOpen(false)}
                        />
                        {/* Stage (also closes on click) */}
                        <motion.div
                            key="stage"
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            style={{
                                position: "fixed",
                                inset: 0,
                                display: "grid",
                                placeItems: "center",
                                zIndex: 4010,
                            }}
                        >
                            {/* Image: stop propagation so clicks don't close */}
                            <motion.img
                                ref={imgRef}
                                layoutId="project-image"
                                src={image}
                                draggable={false}                     // NEW: disable native image drag
                                onDragStart={(e) => e.preventDefault()} // NEW: belt & suspenders
                                onClick={(e) => e.stopPropagation()}
                                onWheel={onWheelZoom}
                                onPointerDown={onPointerDown}
                                onPointerMove={onPointerMove}
                                onPointerUp={onPointerUp}
                                onPointerCancel={onPointerUp}
                                style={{
                                    maxWidth: "90dvw",
                                    maxHeight: "90dvh",
                                    borderRadius: 12,
                                    userSelect: "none",
                                    touchAction: "none",
                                    cursor: isDragging ? "grabbing" : "grab",
                                    scale,
                                    x,
                                    y,
                                }}
                            />

                            {/* Controls (visible on mobile & desktop) */}
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 24,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    gap: 8,
                                    zIndex: 4020,
                                    pointerEvents: "auto",
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Ctrl onClick={() => scale.set(clamp(scale.get() / ZOOM_STEP, ZOOM_MIN, ZOOM_MAX))}>−</Ctrl>
                                <Ctrl onClick={() => scale.set(clamp(scale.get() * ZOOM_STEP, ZOOM_MIN, ZOOM_MAX))}>+</Ctrl>
                                <Ctrl onClick={resetView}>Reset</Ctrl>
                                <Ctrl onClick={() => setOpen(false)} style={{ width: 72 }}>Close</Ctrl>
                            </div>
                        </motion.div>
                    </AnimatePresence>,
                    document.body
                )
                : null,
        [open, image, isDragging, onWheelZoom, onPointerDown, onPointerMove, onPointerUp, resetView, scale, x, y]
    );

    return (
        <div>
            <LayoutGroup id="project-lightbox">

                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.15 }}>
                    <motion.img
                        layoutId="project-image"
                        ref={ref as any}
                        src={image}
                        onClick={() => setOpen(true)}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: isMobile ? 5 : 10,
                            filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
                            cursor: "zoom-in",
                            display: "block",

                            // 👇 prevent the ghosting/flicker while overlay is open
                            opacity: open ? 0 : 1,
                            visibility: open ? "hidden" : "visible",
                            pointerEvents: open ? "none" : "auto",
                        }}
                    />
                    {subtitle && !open &&
                        <AnimatePresence>
                            <motion.div layout initial={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ alignItems: "center", justifyContent: "center", display: "flex", marginTop: isMobile ? "0.5rem" : "1rem" }}>
                                <Text fz={isMobile ? "xs" : "sm"} c="darkColor" mb="md">
                                    {subtitle}
                                </Text>
                            </motion.div>
                        </AnimatePresence>
                    }

                </motion.div>

                {overlay}
            </LayoutGroup>
        </div>
    );
}

function Ctrl({
    children,
    onClick,
    style,
}: { children: React.ReactNode; onClick: () => void; style?: React.CSSProperties }) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(30,30,30,0.65)",
                color: "white",
                fontSize: 14,
                lineHeight: 1,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                ...style,
            }}

            className="project-card-title"
        >
            {children}
        </motion.button>
    );
}
