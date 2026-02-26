"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const FRAME_COUNT = 40;

export default function CanvasHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll (0-1) to frame index (0-39)
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const imgPromises = Array.from({ length: FRAME_COUNT }).map((_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameNum = String(i + 1).padStart(3, "0");
                    img.src = `/img/ezgif-frame-${frameNum}.jpg`;
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.error(`Failed to load image: ${img.src}`);
                        reject();
                    };
                });
            });

            try {
                const loadedImages = await Promise.all(imgPromises);
                setImages(loadedImages);
                setIsLoading(false);
            } catch (err) {
                console.error("Error preloading images", err);
            }
        };

        loadImages();
    }, []);

    // Update canvas on scroll
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = () => {
            const index = Math.round(frameIndex.get());
            const img = images[index] || images[0];

            if (img) {
                // Handle object-fit: cover equivalent in canvas
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                const imgWidth = img.width;
                const imgHeight = img.height;

                const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
                const newWidth = imgWidth * ratio;
                const newHeight = imgHeight * ratio;
                const x = (canvasWidth - newWidth) / 2;
                const y = (canvasHeight - newHeight) / 2;

                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.drawImage(img, x, y, newWidth, newHeight);
            }

            requestAnimationFrame(render);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const animationFrame = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    // Text Animations
    const text1Opacity = useTransform(smoothProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const text1Y = useTransform(smoothProgress, [0, 0.1, 0.2], [50, 0, -50]);
    const text1Z = useTransform(smoothProgress, [0, 0.1, 0.2], [-500, 0, 500]); // 3D depth

    const text2Opacity = useTransform(smoothProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const text2X = useTransform(smoothProgress, [0.25, 0.35, 0.45], [-100, 0, 100]);
    const text2RotationY = useTransform(smoothProgress, [0.25, 0.35, 0.45], [-20, 0, 20]); // 3D rotation

    const text3Opacity = useTransform(smoothProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const text3X = useTransform(smoothProgress, [0.55, 0.65, 0.75], [100, 0, -100]);
    const text3RotationY = useTransform(smoothProgress, [0.55, 0.65, 0.75], [20, 0, -20]); // 3D rotation

    const text4Opacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);
    const text4Scale = useTransform(smoothProgress, [0.8, 0.95], [0.8, 1]);
    const text4Z = useTransform(smoothProgress, [0.85, 0.95], [-1000, 0]); // Zoom in from depth
    const text4RotationX = useTransform(smoothProgress, [0.85, 0.95], [20, 0]); // Tilt

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-black">
            {/* Sticky Canvas */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-white font-bold tracking-widest uppercase"
                        >
                            Loading Ultra Experience...
                        </motion.div>
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                />

                {/* Text Overlays - Layered for 3D depth */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6" style={{ perspective: "1500px" }}>
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y, z: text1Z }}
                        className="text-center"
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic font-display leading-tight drop-shadow-2xl">
                            ZERO SUGAR.
                        </h2>
                        <p className="text-lg md:text-3xl font-light tracking-[0.2em] md:tracking-[0.5em] text-silver mt-4">
                            FULL FORCE.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start pointer-events-none px-6 md:px-24" style={{ perspective: "1500px" }}>
                    <motion.div
                        style={{ opacity: text2Opacity, x: text2X, rotateY: text2RotationY }}
                        className="max-w-xl text-center md:text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 font-display leading-tight drop-shadow-2xl">
                            White Monster Energy.
                        </h2>
                        <p className="text-lg md:text-2xl text-silver/80">
                            Ultra Smooth. Ultra Clean.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-end pointer-events-none px-6 md:px-24" style={{ perspective: "1500px" }}>
                    <motion.div
                        style={{ opacity: text3Opacity, x: text3X, rotateY: text3RotationY }}
                        className="max-w-xl text-center md:text-right"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 font-display leading-tight drop-shadow-2xl">
                            160mg Caffeine.
                        </h2>
                        <p className="text-lg md:text-2xl text-silver/80">
                            Zero Sugar, Less Calories.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4" style={{ perspective: "1500px" }}>
                    <motion.div
                        style={{ opacity: text4Opacity, scale: text4Scale, z: text4Z, rotateX: text4RotationX }}
                        className="text-center"
                    >
                        <h2 className="text-[15vw] md:text-[10vw] font-black text-white uppercase leading-none italic font-display drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]">
                            UNLEASH <br /> THE ULTRA.
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
