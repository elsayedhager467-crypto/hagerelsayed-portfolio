import {
    Pencil,
    Target,
    Sparkles,
    Palette,
    Camera,
    Layers,
    Brush,
    BadgeCheck
} from "lucide-react";
import { motion } from "framer-motion";

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
    // {
    //     icon: BadgeCheck,
    //     title: "Personal Branding",
    // },
    // {
    //     icon: Brush,
    //     title: "Creative Direction",
    // },
    {
        icon: Camera,
        title: "Account & Production Management",
    },
    {
        icon: Camera,
        title: "Account & Production Management",
    },
    {
        icon: Camera,
        title: "Account & Production Management",
    },
];

export default function AboutMe() {
    return (
        <section className="relative w-full py-12 md:py-24 overflow-hidden isolate">
            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <p className="uppercase tracking-[0.25em] text-2xl font-semibold text-[#ff4d9d] mb-5 text-center md:text-left">
                            About Me
                        </p>

                        <p className="text-white text-lg md:text-xl leading-8 text-center md:text-left">
                            I am Helping brands turn ideas into impactful content through strategy, storytelling, client management, and creative execution. Experienced in content planning, personal branding, scriptwriting, and production coordination.
                        </p>

                        <p className="text-white text-lg md:text-xl leading-8 text-center md:text-left">
                            I collaborate closely with clients, designers, videographers, and production teams to transform ideas into impactful content. From developing content calendars and campaign concepts to writing scripts and supervising shoots, I contribute to every stage of the creative journey.
                        </p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="uppercase tracking-[0.25em] text-2xl font-semibold text-[#ff4d9d] mb-5 text-center md:text-left">
                            What I Do
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05,
                                        }}
                                        className="
                                            group
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/20
                                            p-5
                                            h-[180px]
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
                                                mx-auto
                                            "
                                        />

                                        <h3 className="text-[#E8C6D6] text-sm text-center">
                                            {service.title}
                                        </h3>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
        </section>
    );
}