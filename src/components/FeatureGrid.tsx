"use client";

import { motion } from "framer-motion";
import { Zap, Droplets, Citrus, Activity } from "lucide-react";

const features = [
    {
        title: "Energy Boost",
        description: "160mg of premium caffeine to keep you moving through the day and night.",
        icon: <Zap className="w-8 h-8 text-accent" />,
    },
    {
        title: "Zero Sugar",
        description: "All the flavor, none of the sugar. Pure energy without the crash.",
        icon: <Droplets className="w-8 h-8 text-accent" />,
    },
    {
        title: "Crisp Citrus",
        description: "A light, refreshing citrus profile that's smooth to the last drop.",
        icon: <Citrus className="w-8 h-8 text-accent" />,
    },
    {
        title: "Performance Focus",
        description: "Engineered for elite mental and physical performance.",
        icon: <Activity className="w-8 h-8 text-accent" />,
    },
];

export default function FeatureGrid() {
    return (
        <section id="features" className="relative bg-black py-24 md:py-40 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20 px-2"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 uppercase italic tracking-tighter font-display leading-tight">
                        Pure Performance, <br className="md:hidden" /> <span className="text-silver">Zero Compromise.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" style={{ perspective: "1500px" }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, rotateX: 15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 1.02, 0.47, 0.98] }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)", z: 50, transition: { duration: 0.3 } }}
                            className="glass p-6 sm:p-8 rounded-2xl group transition-all transform-gpu"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase italic font-display">
                                {feature.title}
                            </h3>
                            <p className="text-silver/60 leading-relaxed font-light text-sm sm:text-base">
                                {feature.description}
                            </p>

                            <div className="mt-8 w-12 h-[2px] bg-accent/30 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
