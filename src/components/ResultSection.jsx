import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCountUp } from "react-countup";

// result logos served from public folder

import "swiper/css";
import "swiper/css/navigation";

const results = [
    {
        id: 1,
        brand: "Majesty",
        logo: "/results-logos/majesty-logo.png",
        platform: "Facebook",
        period: "Dec 2025 – Mar 2026",
        metrics: [
            { value: "10.9M", label: "Views" },
            { value: "4.8M", label: "Reach" },
            { value: "197.6K", label: "Link Clicks" },
            { value: "105K", label: "Engagements" },
            { value: "27K+", label: "Followers Growth" },
            { value: "152K", label: "Visits" },
        ],
    },
    {
        id: 2,
        brand: "مطاعم شعبان",
        logo: "/results-logos/Shaaban-logo.png",
        platform: "Facebook",
        period: "Dec 2025 – Mar 2026",
        metrics: [
            { value: "7.9M", label: "Views" },
            { value: "3.2M", label: "Reach" },
            { value: "54K", label: "Link Clicks" },
            { value: "40K", label: "Engagements" },
            { value: "128K+", label: "Followers Growth" },
            { value: "10.7K", label: "Visits" },
        ],
    },
    {
        id: 3,
        brand: "سليم تك",
        logo: "/results-logos/selim-tech-logo.jfif",
        platform: "Facebook",
        period: "Mar 2026 – Jun 2026",
        metrics: [
            { value: "1.7M", label: "Views" },
            { value: "732.1K", label: "Reach" },
            { value: "16.6K", label: "Link Clicks" },
            { value: "18.5K", label: "Engagements" },
            { value: "85.4K+", label: "Followers Growth" },
            { value: "82.7K", label: "Visits" },
        ],
    },
    {
        id: 4,
        brand: "عم شرقي",
        logo: "/results-logos/sharky-logo.jfif",
        platform: "Facebook",
        period: "Dec 2025 – Mar 2026",
        metrics: [
            { value: "3.3M", label: "Views" },
            { value: "1.9M", label: "Reach" },
            { value: "32.9K", label: "Link Clicks" },
            { value: "19.9K", label: "Engagements" },
            { value: "13K+", label: "Followers Growth" },
            { value: "36.8K", label: "Visits" },
        ],
    },
    {
        id: 5,
        brand: "Rentelly",
        logo: "/results-logos/Rentelly-logo.jfif",
        platform: "Facebook",
        period: "Apr 2025 – Jun 2025",
        metrics: [
            { value: "1.0M", label: "Views" },
            { value: "442.2K", label: "Reach" },
            { value: "2.6K", label: "Link Clicks" },
            { value: "11.3K", label: "Engagements" },
            { value: "5.2K+", label: "Followers Growth" },
            { value: "50K", label: "Visits" },
        ],
    },
    {
        id: 6,
        brand: "فرح فون",
        logo: "/results-logos/farah-phone-logo.jfif",
        platform: "Facebook",
        period: "13 Aug 2024 – 9 Sep 2024",
        metrics: [
            { value: "650K", label: "Views" },
            { value: "316.7K", label: "Reach" },
            { value: "6.1K", label: "Link Clicks" },
            { value: "4.2K", label: "Engagements" },
            { value: "2.1K+", label: "Followers Growth" },
            { value: "15.8K", label: "Visits" },
        ],
    },
];

function parseMetricValue(value) {
    const match = /^([\d.]+)(.*)$/.exec(value);

    if (!match) {
        return { number: 0, suffix: "", precision: 0 };
    }

    const [, numericPart, suffix] = match;

    const precision = numericPart.includes(".")
        ? numericPart.split(".")[1].length
        : 0;

    return {
        number: parseFloat(numericPart),
        suffix,
        precision,
    };
}

function formatMetricValue(value, precision) {
    if (precision === 0) {
        return Math.round(value).toLocaleString();
    }

    return value.toFixed(precision).replace(/\.0+$/, "");
}

function AnimatedMetricValue({ value }) {
    const { number, suffix, precision } = parseMetricValue(value);

    const countRef = useRef(null);

    useCountUp({
        ref: countRef,
        end: number,
        duration: 1.8,
        enableScrollSpy: true,
        scrollSpyOnce: true,
        formattingFn: (val) =>
            formatMetricValue(parseFloat(val), precision),
    });

    return (
        <>
            <span ref={countRef} />
            {suffix}
        </>
    );
}

export default function ResultSection() {
    return (
        <section className="py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="text-center max-w-3xl mx-auto mb-4"
                >
                    <p className="uppercase tracking-[0.35em] text-xs text-white mb-4">
                        Performance Results
                    </p>

                    <h2 className="text-[#E8C6D6] text-4xl md:text-6xl font-light leading-tight">
                        Content Backed By
                        <span className="text-[#ff4d9d] block">
                            Real Results
                        </span>
                    </h2>

                    <p className="mt-6 text-[#E8C6D6]/60 leading-8">
                        Selected performance highlights from brands and campaigns
                        I contributed to through strategy, scripting, and execution.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex justify-center gap-4 mb-10"
                >
                    <button className="results-prev h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-[#E8C6D6]">
                        <ChevronLeft size={18} />
                    </button>

                    <button className="results-next h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-[#E8C6D6]">
                        <ChevronRight size={18} />
                    </button>
                </motion.div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".results-prev",
                        nextEl: ".results-next",
                    }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {results.map((item) => (
                        <SwiperSlide key={item.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="border border-white/10 rounded-[36px] overflow-hidden"
                            >
                                <div className="grid lg:grid-cols-[320px_1fr]">

                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        className="border-b lg:border-b-0 lg:border-r border-white/10 p-10 flex flex-col justify-center items-center"
                                    >
                                        <div className="w-32 h-32 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                                            <img
                                                loading="lazy"
                                                src={item.logo}
                                                alt={item.brand}
                                                className="object-contain"
                                            />
                                        </div>

                                        <h3 className="mt-8 text-[#E8C6D6] text-2xl font-medium">
                                            {item.brand}
                                        </h3>

                                        <p className="text-[#E8C6D6]/50 mt-2">
                                            {item.platform}
                                        </p>

                                        <p className="text-[#E8C6D6]/40 text-sm mt-1">
                                            {item.period}
                                        </p>
                                    </motion.div>

                                    <div className="p-10">
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                            {item.metrics.map((metric, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    viewport={{
                                                        once: true,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.08,
                                                        duration: 0.5,
                                                    }}
                                                    whileHover={{
                                                        y: -6,
                                                        scale: 1.02,
                                                    }}
                                                    className="border border-white/10 rounded-3xl p-6"
                                                >
                                                    <h4 className="text-[#ff4d9d] text-3xl md:text-4xl font-light">
                                                        <AnimatedMetricValue
                                                            value={metric.value}
                                                        />
                                                    </h4>

                                                    <p className="mt-2 text-[#E8C6D6]/60">
                                                        {metric.label}
                                                    </p>
                                                </motion.div>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}