"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="shop" className="relative bg-black py-40 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-widest mb-16 font-display"
                >
                    READY TO <br /> GO ULTRA?
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.button
                        whileHover={{ backgroundColor: "#F1F1F1", color: "#000" }}
                        className="w-full md:w-auto px-12 py-5 rounded-full border border-white text-white text-lg font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                        Find Near You
                    </motion.button>

                    <motion.a
                        href="https://blinkit.com/prn/x/prid/432768?tracking_id=f72e09fb-9fc2-4c0d-85b0-b7fa1adfb5ef"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: "#F1F1F1", color: "#000" }}
                        className="w-full md:w-auto px-12 py-5 rounded-full border border-white text-white text-lg font-bold uppercase tracking-widest transition-colors duration-300 inline-block no-underline"
                    >
                        Buy Online
                    </motion.a>
                </div>

                <div className="mt-32 text-silver/30 text-xs font-mono tracking-widest uppercase">
                    © 2026 Monster Energy Ultra. Unleash the Beast.
                </div>
            </div>
        </footer>
    );
}
