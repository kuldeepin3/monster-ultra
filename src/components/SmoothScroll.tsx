"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Resize handler to ensure scroll height is always accurate
        const handleResize = () => {
            lenis.resize();
        };

        window.addEventListener("resize", handleResize);

        // Optional: Manual scroll handling if needed
        const handleScroll = () => {
            // Handle scroll-related updates if necessary
        };

        lenis.on('scroll', handleScroll);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <>{children}</>;
}
