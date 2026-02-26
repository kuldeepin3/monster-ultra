"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicTransition() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
                >
                    {/* Shutter effect */}
                    <motion.div
                        initial={{ y: 0 }}
                        exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
                        className="absolute inset-0 bg-black flex flex-col items-center justify-center p-12"
                    >
                        <div className="relative overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase font-display"
                            >
                                MONSTER ULTRA
                            </motion.h1>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                className="h-[2px] w-full bg-accent mt-4 origin-left"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 1 }}
                            className="mt-8 text-[10px] tracking-[1em] text-silver uppercase"
                        >
                            Loading Experience
                        </motion.p>
                    </motion.div>

                    {/* Secondary shutter for cinematic feel */}
                    <motion.div
                        initial={{ y: "100%" }}
                        exit={{ y: "100%", transition: { duration: 1 } }}
                        className="absolute inset-0 bg-accent/5"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
