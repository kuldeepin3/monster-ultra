"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Experience", href: "#" },
        { name: "About", href: "#about" },
        { name: "Features", href: "#features" },
        { name: "Shop", href: "#shop" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] p-4 md:p-10 flex justify-between items-center pointer-events-none">
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl md:text-2xl font-black tracking-tighter italic font-display pointer-events-auto cursor-pointer"
            >
                MONSTER <span className="text-silver">ULTRA</span>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.4em] uppercase pointer-events-auto text-silver/60">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-white transition-colors duration-300"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden pointer-events-auto text-white p-3 glass rounded-full"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl p-8 md:hidden pointer-events-auto z-[101] flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white p-3 glass rounded-full"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-8 items-center italic text-center">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-bold tracking-widest uppercase hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 px-12 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest"
                            >
                                Buy Now
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
