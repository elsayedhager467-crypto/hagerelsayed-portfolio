import React, { useRef } from "react";
import SideRays from "./UI/Hero-bg1";
import { useCountUp } from "react-countup";
import { motion } from "framer-motion";

export default function HeroSection() {
    function Stat({ value, suffix, label }) {
        const countRef = useRef(null);

        useCountUp({
            ref: countRef,
            end: value,
            duration: 2.5,
            enableScrollSpy: true,
            scrollSpyOnce: true,
        });

        return (
            <div className="px-8 text-center">
                <h3 className="text-[#F3F0EA] text-3xl md:text-4xl font-semibold">
                    <span ref={countRef}></span>
                    {suffix}
                </h3>

                <p className="text-[#B7B2AA] text-sm mt-2 tracking-wide">
                    {label}
                </p>
            </div>
        );
    }

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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0F0F10]">
            {/* Background */}

            <motion.div
                className="absolute inset-0 -z-50 pointer-events-none overflow-hidden"
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <SideRays
                        speed={3}
                        rayColor1="#7E5A6A"
                        rayColor2="#D36A98"
                        intensity={3}
                        spread={3}
                        origin="top-right"
                        tilt={60}
                        saturation={1.6}
                        blend={0.7}
                        falloff={1.6}
                        opacity={1}
                    />
                </div>
            </motion.div>

            {/* Content */}

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="
        relative
        z-20
        flex
        flex-col
        justify-center
        items-center
        text-center
        p-12
        min-h-screen
    "
            >
                <motion.span
                    variants={fadeUp}
                    className="text-[#E8C6D6] text-lg font-bold tracking-[0.3em] uppercase mb-2 md:mb-6"
                >
                    Hi, I'm Hager ElSayed
                </motion.span>

                <motion.h1
                    variants={fadeUp}
                    className="
                    text-[#F3F0EA]
                    text-5xl
                    my-4
                    md:my-0
                    md:text-6xl
                    leading-tight
                    max-w-5xl
                    font-semibold
                    "
                >
                    Content Creator,
                    <br />
                    Account Manager
                    <br />
                    & Scriptwriter
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="
                    text-[#B7B2AA]
                    md:mt-8
                    max-w-2xl
                    text-sm
                    md:text-lg
                    leading-8
                    "
                >
                    I create content that connects,
                    and campaigns that perform.
                    <br />
                    <br />
                    From strategy and scripting to
                    on-set supervision and execution,
                    I build content people actually
                    watch and remember.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="mt-2 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#work"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D36A98] via-[#A76C92] to-[#7E5A6A] px-8 py-4 text-sm md:text-base font-semibold text-white shadow-[0_20px_60px_rgba(211,106,152,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(211,106,152,0.30)]"
                    >
                        View My Work
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm md:text-base font-semibold text-[#F3F0EA] shadow-[0_14px_42px_rgba(0,0,0,0.24)] transition duration-300 hover:bg-white/10"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Statistics */}

                <motion.div
                    variants={container}
                    className="mt-16 flex flex-wrap justify-evenly items-center gap-y-8"
                >
                    {[
                        { value: 30, suffix: "+", label: "Brands" },
                        { value: 13, suffix: "+", label: "Industries" },
                        { value: 100, suffix: "+", label: "Content Pieces" },
                        { value: 6, suffix: "+", label: "Years of experience" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="flex items-center"
                        >
                            <Stat
                                value={item.value}
                                suffix={item.suffix}
                                label={item.label}
                            />

                            {index !== 3 && (
                                <div className="hidden md:block h-12 w-px bg-white/20" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}