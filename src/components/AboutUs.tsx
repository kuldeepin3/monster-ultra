"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="relative bg-black py-40 px-6 overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start text-left"
                    >
                        <h4 className="text-accent font-mono text-sm tracking-[0.5em] uppercase mb-6">
                            The Genesis
                        </h4>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase italic leading-[0.9] mb-8 font-display break-words">
                            MONSTER <br />
                            <span className="text-silver">ULTRA.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-silver/70 leading-relaxed font-light mb-10 max-w-lg">
                            Zero Ultra wasn't just another flavor—it was a revolution. Born from the need for a crisp, refreshing, and clean energy experience without the weight of sugar. It’s the ultimate choice for the relentless.
                        </p>

                        <div className="grid grid-cols-3 gap-4 md:gap-12 mt-4 w-full">
                            <div className="flex flex-col">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">0g</p>
                                <p className="text-[8px] md:text-[10px] text-silver/40 uppercase tracking-widest font-bold">Sugar</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">10cal</p>
                                <p className="text-[8px] md:text-[10px] text-silver/40 uppercase tracking-widest font-bold">Calories</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">160mg</p>
                                <p className="text-[8px] md:text-[10px] text-silver/40 uppercase tracking-widest font-bold">Caffeine</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden glass border-white/5 group shadow-2xl shadow-white/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                            <Image
                                src="/img/monster-ultra-about.png"
                                alt="White Monster Energy Zero Ultra Can"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                priority
                            />

                            <div className="absolute bottom-8 left-8 z-20 font-display">
                                <p className="text-white font-black text-3xl md:text-4xl italic uppercase leading-none tracking-tighter">
                                    ULTRA <br /> SMOOTH.
                                </p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 glass rounded-full flex flex-col items-center justify-center text-center p-4 border-accent/20 z-30 shadow-xl"
                        >
                            <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-accent mb-1 sm:mb-2 font-bold">Authentic</p>
                            <p className="text-sm sm:text-lg md:text-xl font-black italic leading-none font-display">FULL <br /> FLAVOR</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
