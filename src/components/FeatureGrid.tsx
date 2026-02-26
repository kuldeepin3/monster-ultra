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
        <section id="features" className="relative bg-black py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase italic tracking-tighter font-display">
                        Pure  Performance, <span className="text-silver">Zero Compromise.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            className="glass p-8 rounded-2xl group transition-all"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase italic font-display">
                                {feature.title}
                            </h3>
                            <p className="text-silver/60 leading-relaxed font-light">
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
