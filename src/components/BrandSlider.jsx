// Logos served from public folder

const brands = [
    {
        id: 1,
        name: "Aikal",
        whiteLogo: "/logos/aikal-white.png",
        colorLogo: "/logos/aikal-original.png",
    },
    {
        id: 2,
        name: "Altaibat",
        whiteLogo: "/logos/altaibat-white.png",
        colorLogo: "/logos/altaibat-orginal.png",
    },
    {
        id: 3,
        name: "Benya",
        whiteLogo: "/logos/benya-white.png",
        colorLogo: "/logos/benya-original - Copy.png",
    },
    {
        id: 4,
        name: "Core",
        whiteLogo: "/logos/core-white.png",
        colorLogo: "/logos/core-original - Copy.png",
    },
    {
        id: 5,
        name: "Dar El Handsa",
        whiteLogo: "/logos/dar-elhandsa-white.png",
        colorLogo: "/logos/dar-elhandsa-original.png",
    },
    {
        id: 6,
        name: "Diwan",
        whiteLogo: "/logos/diwan-white.png",
        colorLogo: "/logos/diwan-original.png",
    },
    {
        id: 7,
        name: "El Bahrawy",
        whiteLogo: "/logos/elbahrawy-white.png",
        colorLogo: "/logos/elbahrawy-original.png",
    },
    {
        id: 8,
        name: "GMC",
        whiteLogo: "/logos/GMC-copy.png",
        colorLogo: "/logos/GMC-original.png",
    },
    {
        id: 9,
        name: "Hendawy",
        whiteLogo: "/logos/hendawy-white.png",
        colorLogo: "/logos/hendawy-oringial.png",
    },
    {
        id: 10,
        name: "LLC",
        whiteLogo: "/logos/lcc-white.png",
        colorLogo: "/logos/lcc-original.png",
    },
    {
        id: 11,
        name: "Lucky Leaf",
        whiteLogo: "/logos/luckyleaf-white.png",
        colorLogo: "/logos/luckyleaf-original.png",
    },
    {
        id: 12,
        name: "Majesty",
        whiteLogo: "/logos/majesty-white.png",
        colorLogo: "/logos/majesty-original.png",
    },
    {
        id: 13,
        name: "Polar",
        whiteLogo: "/logos/polar-white.png",
        colorLogo: "/logos/polar-original.png",
    },
    {
        id: 14,
        name: "Rentelly",
        whiteLogo: "/logos/rentelly-white.png",
        colorLogo: "/logos/rentelly-original.png",
    },
    {
        id: 15,
        name: "Tedent",
        whiteLogo: "/logos/tedent-white.png",
        colorLogo: "/logos/tedent-original.png",
    },
];


import { motion } from "framer-motion";

export default function BrandsSlider() {
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
        <section className="py-12 md:py-24 overflow-hidden">
            <motion.div
                className="max-w-6xl mx-auto px-6 text-center mb-16"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.12,
                        },
                    },
                }}
            >
                <motion.p
                    variants={fadeUp}
                    className="uppercase tracking-[0.35em] text-xs text-white mb-4"
                >
                    Brands
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    className="text-[#E8C6D6] text-4xl md:text-6xl font-light"
                >
                    Brands I've
                    <span className="text-[#ff4d9d]"> Worked With</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="mt-6 text-[#E8C6D6]/60 max-w-2xl mx-auto leading-8"
                >
                    A selection of brands, businesses, and campaigns I've
                    contributed to through content strategy, scripting, and
                    creative execution.
                </motion.p>
            </motion.div>

            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="brands-marquee flex w-max gap-10 md:gap-20 items-center">
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center"
                        >
                            <div className="absolute inset-[-10px] bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                            {/* White Logo */}
                            <img
                                loading="lazy"
                                src={brand.whiteLogo}
                                alt={brand.name}
                                className="
                                    h-20 md:h-24
                                    object-contain
                                    transition-all
                                    duration-500
                                    group-hover:opacity-0
                                "
                            />

                            {/* Colored Logo */}
                            <img
                                loading="lazy"
                                src={brand.colorLogo}
                                alt={brand.name}
                                className="
                                    absolute
                                    h-24 md:h-32
                                    object-contain
                                    opacity-0
                                    scale-120
                                    transition-all
                                    duration-500
                                    group-hover:opacity-100
                                    group-hover:scale-140
                                "
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}