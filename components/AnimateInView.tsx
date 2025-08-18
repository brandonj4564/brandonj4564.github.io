'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimateInView({ children }: { children: React.ReactNode }) {
    const viewRef = useRef(null)
    // Boolean value that will be true when the element is in the viewport
    const isInView = useInView(viewRef, {
        once: true // This will make it so that the animation only plays once instead of every time it comes into view
    })

    return <motion.div ref={viewRef} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }}>
        {children}
    </motion.div>;
}