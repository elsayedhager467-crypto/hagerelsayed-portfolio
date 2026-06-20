import {
    Pencil,
    Target,
    Sparkles,
    Palette,
    Camera,
    Layers,
} from "lucide-react";

const services = [
    {
        icon: Target,
        title: "Content Strategy",
    },
    {
        icon: Layers,
        title: "Campaigns & Content Planning",
    },
    {
        icon: Pencil,
        title: "Scriptwriting",
    },
    {
        icon: Sparkles,
        title: "Personal Branding",
    },
    {
        icon: Palette,
        title: "Creative Direction",
    },
    {
        icon: Camera,
        title: "Account & Production Management",
    },
];

import { motion } from "framer-motion";

export default function AboutMe() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative w-full py-12 md:py-24">
            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            <motion.div
                className="max-w-7xl mx-auto px-6 lg:px-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-12 lg:gap-8">

                    {/* LEFT */}
                    <motion.div
                        variants={container}
                        className="space-y-2"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="uppercase tracking-[0.25em] text-2xl font-semibold text-[#ff4d9d] mb-5 text-center md:text-left"
                        >
                            About Me
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-white text-lg md:text-xl leading-8 text-center md:text-left"
                        >
                            I am Helping brands turn ideas into impactful content through strategy, storytelling, client management, and creative execution. Experienced in content planning, personal branding, scriptwriting, and production coordination.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-white text-lg md:text-xl leading-8 text-center md:text-left"
                        >
                            I collaborate closely with clients, designers, videographers, and production teams to transform ideas into impactful content. From developing content calendars and campaign concepts to writing scripts and supervising shoots, I contribute to every stage of the creative journey.
                        </motion.p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div variants={container}>
                        <motion.p
                            variants={fadeUp}
                            className="uppercase tracking-[0.25em] text-2xl font-semibold text-[#ff4d9d] mb-5 text-center md:text-left"
                        >
                            What I Do
                        </motion.p>

                        <motion.div
                            variants={container}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3"
                        >
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeUp}
                                        className="
                                            group
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/20
                                            p-5
                                            min-h-[160px]
                                            transition-all
                                            duration-300
                                            hover:border-[#ff4d9d]/60
                                            hover:bg-white/[0.02]
                                        "
                                    >
                                        <Icon
                                            size={52}
                                            strokeWidth={1.8}
                                            className="
                                                text-[#ff4d9d]
                                                mb-4
                                                transition-transform
                                                duration-300
                                                group-hover:scale-120
                                                mx-auto
                                            "
                                        />

                                        <h3 className="text-[#E8C6D6] text-sm text-center">
                                            {service.title}
                                        </h3>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
        </section>
    );
}