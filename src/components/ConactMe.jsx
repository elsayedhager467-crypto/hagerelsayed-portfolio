import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ContactMe() {
    return (
        <motion.section
            id="contact"
            className="pt-12 md:pt-24 px-6"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 1.5 }}
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">

                    {/* Left Side */}

                    <div>
                        <p className="uppercase text-lg font-semibold text-white mb-6">
                            Contact Me
                        </p>

                        <h2 className="text-[#ff4d9d] text-5xl md:text-7xl leading-[0.95] font-light">
                            Have a <span className="text-[#E8C6D6]">project,</span>
                            <br />
                            a <span className="text-[#E8C6D6]">campaign,</span>
                            <br />
                            or just an <span className="text-[#E8C6D6]">idea?</span>
                        </h2>

                        <p className="mt-8 text-[#E8C6D6]/60 text-lg max-w-xl leading-relaxed">
                            Whether you're building a personal brand,
                            launching a campaign, or looking for content
                            that people actually remember, I'd love to hear
                            about it.
                        </p>
                    </div>

                    {/* Right Side */}

                    <div className="space-y-4">

                        {/* Whatsapp */}

                        <a
                            href="https://wa.me/201024895224"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                items-center
                                justify-between
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                hover:border-[#ff4d9d]/50
                                transition-all
                                duration-300
                            "
                        >
                            <div className="flex items-center gap-4">
                                <MessageCircle
                                    size={22}
                                    className="text-[#ff4d9d]"
                                />

                                <div>
                                    <p className="text-[#E8C6D6] font-medium">
                                        WhatsApp
                                    </p>

                                    <p className="text-[#E8C6D6]/50 text-sm">
                                        Quick conversation
                                    </p>
                                </div>
                            </div>

                            <ArrowUpRight
                                size={18}
                                className="
                                    text-[#E8C6D6]
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                    transition
                                "
                            />
                        </a>

                        {/* Email */}

                        <a
                            href="mailto:hagere882@gmail.com"
                            className="
                                group
                                flex
                                items-center
                                justify-between
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                hover:border-[#ff4d9d]/50
                                transition-all
                                duration-300
                            "
                        >
                            <div className="flex items-center gap-4">
                                <Mail
                                    size={22}
                                    className="text-[#ff4d9d]"
                                />

                                <div>
                                    <p className="text-[#E8C6D6] font-medium">
                                        Email
                                    </p>

                                    <p className="text-[#E8C6D6]/50 text-sm">
                                        hagere882@gmail.com
                                    </p>
                                </div>
                            </div>

                            <ArrowUpRight
                                size={18}
                                className="
                                    text-[#E8C6D6]
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                    transition
                                "
                            />
                        </a>

                        {/* LinkedIn */}

                        <a
                            href="https://linkedin.com/in/hager-elsayed-6a4b7b261"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                items-center
                                justify-between
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                hover:border-[#ff4d9d]/50
                                transition-all
                                duration-300
                            "
                        >
                            <div className="flex items-center gap-4">
                                <Briefcase
                                    size={22}
                                    className="text-[#ff4d9d]"
                                />

                                <div>
                                    <p className="text-[#E8C6D6] font-medium">
                                        LinkedIn
                                    </p>

                                    <p className="text-[#E8C6D6]/50 text-sm">
                                        Connect professionally
                                    </p>
                                </div>
                            </div>

                            <ArrowUpRight
                                size={18}
                                className="
                                    text-[#E8C6D6]
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                    transition
                                "
                            />
                        </a>

                    </div>
                </div>

                {/* Bottom Signature */}

                <div className="mt-24 py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#E8C6D6]/40 text-sm">
                        © 2026 Hager ElSayed
                    </p>

                    <p className="text-[#E8C6D6]/40 text-sm">
                        Content Creator & Content Strategist
                    </p>
                </div>

            </div>
        </motion.section>
    );
}