"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="shop" className="relative bg-black py-24 md:py-40 px-6 border-t border-white/5 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-6xl md:text-9xl font-black text-white uppercase italic tracking-widest mb-12 md:mb-16 font-display leading-[0.9]"
                >
                    READY TO <br /> GO ULTRA?
                </motion.h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                    <motion.button
                        whileHover={{ backgroundColor: "#F1F1F1", color: "#000" }}
                        className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full border border-white text-white text-base md:text-lg font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                        Find Near You
                    </motion.button>

                    <motion.a
                        href="https://blinkit.com/prn/x/prid/432768?tracking_id=f72e09fb-9fc2-4c0d-85b0-b7fa1adfb5ef"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: "#F1F1F1", color: "#000" }}
                        className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full border border-white text-white text-base md:text-lg font-bold uppercase tracking-widest transition-colors duration-300 inline-block no-underline"
                    >
                        Buy Online
                    </motion.a>
                </div>

                <div className="mt-20 md:mt-32 text-silver/30 text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-widest uppercase">
                    © 2026 Monster Energy Ultra. Unleash the Beast.
                </div>
            </div>
        </footer>
    );
}
