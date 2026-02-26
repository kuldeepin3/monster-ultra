"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion, useSpring, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 40;

export default function CanvasHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 40,
        restDelta: 0.001
    });

    // Map scroll (0-1) to frame index (0-39)
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);
    const currentFrameRef = useRef<number>(0);

    // Preload images with absolute reliability
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        const preloadImages = () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const frameNum = String(i).padStart(3, "0");
                img.src = `/img/ezgif-frame-${frameNum}.jpg`;

                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === FRAME_COUNT) {
                        setImages(loadedImages);
                        setIsLoaded(true);
                    }
                };

                img.onerror = () => {
                    console.error(`Failed to load: ${img.src}`);
                    loadedCount++; // Still count it to prevent hang
                    if (loadedCount === FRAME_COUNT) {
                        setImages(loadedImages);
                        setIsLoaded(true);
                    }
                };

                loadedImages[i - 1] = img;
            }
        };

        preloadImages();
    }, []);

    const render = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length < FRAME_COUNT) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Size logic
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Ensure canvas attributes match window
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
        }

        // Cover logic
        const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
        const x = (w - img.naturalWidth * scale) / 2;
        const y = (h - img.naturalHeight * scale) / 2;

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    }, [images]);

    // Update frame ref on change and render
    useMotionValueEvent(frameIndex, "change", (latest) => {
        const idx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(latest)));
        if (idx !== currentFrameRef.current) {
            currentFrameRef.current = idx;
            render(idx);
        }
    });

    // Initial render and resize handling
    useEffect(() => {
        const handleResize = () => render(currentFrameRef.current);
        window.addEventListener("resize", handleResize);

        if (isLoaded) {
            render(0);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, render]);

    // Text Animations
    const text1Opacity = useTransform(smoothProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const text1Y = useTransform(smoothProgress, [0, 0.1, 0.2], [50, 0, -50]);
    const text1Z = useTransform(smoothProgress, [0, 0.1, 0.2], [-500, 0, 500]);

    const text2Opacity = useTransform(smoothProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const text2X = useTransform(smoothProgress, [0.25, 0.35, 0.45], [-100, 0, 100]);
    const text2RotationY = useTransform(smoothProgress, [0.25, 0.35, 0.45], [-20, 0, 20]);

    const text3Opacity = useTransform(smoothProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const text3X = useTransform(smoothProgress, [0.55, 0.65, 0.75], [100, 0, -100]);
    const text3RotationY = useTransform(smoothProgress, [0.55, 0.65, 0.75], [20, 0, -20]);

    const text4Opacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);
    const text4Scale = useTransform(smoothProgress, [0.8, 0.95], [0.8, 1]);
    const text4Z = useTransform(smoothProgress, [0.85, 0.95], [-1000, 0]);
    const text4RotationX = useTransform(smoothProgress, [0.85, 0.95], [20, 0]);

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                {!isLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-white font-bold tracking-widest uppercase"
                        >
                            Preparing Experience...
                        </motion.div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="h-full w-full block"
                />

                {/* Text Overlays */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6" style={{ perspective: "1500px" }}>
                    <motion.div style={{ opacity: text1Opacity, y: text1Y, z: text1Z }} className="text-center">
                        <h2 className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic font-display leading-tight drop-shadow-2xl">
                            ZERO SUGAR.
                        </h2>
                        <p className="text-lg md:text-3xl font-light tracking-[0.2em] md:tracking-[0.5em] text-silver mt-4 uppercase">
                            Full Force.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start pointer-events-none px-6 md:px-24" style={{ perspective: "1500px" }}>
                    <motion.div style={{ opacity: text2Opacity, x: text2X, rotateY: text2RotationY }} className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 font-display leading-tight drop-shadow-2xl uppercase italic">
                            White Monster Energy.
                        </h2>
                        <p className="text-lg md:text-2xl text-silver/80 uppercase tracking-widest">
                            Ultra Smooth. <br className="hidden md:block" /> Ultra Clean.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-end pointer-events-none px-6 md:px-24" style={{ perspective: "1500px" }}>
                    <motion.div style={{ opacity: text3Opacity, x: text3X, rotateY: text3RotationY }} className="max-w-xl text-center md:text-right">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 font-display leading-tight drop-shadow-2xl uppercase italic">
                            160mg Caffeine.
                        </h2>
                        <p className="text-lg md:text-2xl text-silver/80 uppercase tracking-widest">
                            Zero Sugar, <br className="hidden md:block" /> Less Calories.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4" style={{ perspective: "1500px" }}>
                    <motion.div style={{ opacity: text4Opacity, scale: text4Scale, z: text4Z, rotateX: text4RotationX }} className="text-center">
                        <h2 className="text-[15vw] md:text-[10vw] font-black text-white uppercase leading-none italic font-display drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]">
                            UNLEASH <br /> THE ULTRA.
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
