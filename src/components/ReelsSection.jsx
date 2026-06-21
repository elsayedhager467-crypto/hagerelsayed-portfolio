import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";


const reels = [
    { id: 1, title: "Ibrahim Anwar", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1782054116/0620_2_jeggyb.mp4" },
    { id: 2, title: "Inspiring", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1782059674/0620_1_lckpn3.mp4" },
    { id: 3, title: "عائشة", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1781985123/%D8%B9%D8%A7%D8%A6%D8%B4%D8%A9_6_to7ssf.mp4" },
    { id: 4, title: "Dr. Kholod", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1782059970/15_x0ugbb.mp4" },
    { id: 6, title: "Dr. Amany Shehata", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1782060007/final-_tdbmbn.mp4" },
    { id: 5, title: "Dr. Amany Tanany", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1782059960/promo_liwr2e.mp4" },
    { id: 7, title: "Mr. Khaled Al Ali", video: "https://res.cloudinary.com/ddef8je0a/video/upload/v1781984988/6_kdiezl.mp4" },
];

/* ================= ANIMATION ================= */

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function ReelsSection() {
    const [playingId, setPlayingId] = useState(null);

    const pauseAllVideos = () => {
        document.querySelectorAll("video").forEach((video) => {
            video.pause();
        });
        setPlayingId(null);
    };

    return (
        <motion.section
            id="work"
            className="relative py-6 md:py-12 overflow-hidden"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER (only animation added) */}
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <p className="uppercase tracking-[0.35em] text-white text-xs font-semibold mb-4">
                        scripted reels & short videos
                    </p>

                    <h2 className="text-[#ff4d9d] text-4xl md:text-6xl font-semibold">
                        personal branding Reels
                    </h2>

                    <p className="max-w-2xl mx-auto mt-6 text-[#E8C6D6]/60 leading-8">
                        Building personal brands that stand out, get remembered,
                        and drive real results.
                    </p>
                </motion.div>

                {/* NAVIGATION (unchanged) */}
                <div className="flex justify-center gap-4 mb-10">
                    <button className="reel-prev h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-[#E8C6D6] hover:border-[#ff4d9d]/60 transition-all duration-300">
                        <ChevronLeft size={18} />
                    </button>

                    <button className="reel-next h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-[#E8C6D6] hover:border-[#ff4d9d]/60 transition-all duration-300">
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* SWIPER + ANIMATION WRAPPER */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <Swiper
                        modules={[EffectCoverflow, Navigation]}
                        navigation={{
                            prevEl: ".reel-prev",
                            nextEl: ".reel-next",
                        }}
                        effect="coverflow"
                        centeredSlides
                        grabCursor
                        loop
                        slidesPerView={"auto"}
                        onSlideChange={pauseAllVideos}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 120,
                            modifier: 1.2,
                            scale: 0.88,
                            slideShadows: false,
                        }}
                        className="!overflow-visible"
                    >
                        {reels.map((reel) => (
                            <SwiperSlide
                                key={reel.id}
                                className="!w-[280px] md:!w-[330px]"
                            >
                                <motion.div
                                    variants={item}
                                    className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-black"
                                >
                                    {/* VIDEO */}
                                    <div className="aspect-[9/16]">
                                        <video
                                            src={reel.video}
                                            loop
                                            playsInline
                                            preload="metadata"
                                            className="w-full h-full object-cover cursor-pointer"
                                            onClick={(e) => {
                                                const currentVideo = e.currentTarget;

                                                document
                                                    .querySelectorAll("video")
                                                    .forEach((video) => {
                                                        if (video !== currentVideo) {
                                                            video.pause();
                                                        }
                                                    });

                                                if (currentVideo.paused) {
                                                    currentVideo.play();
                                                    setPlayingId(reel.id);
                                                } else {
                                                    currentVideo.pause();
                                                    setPlayingId(null);
                                                }
                                            }}
                                            onPause={() => {
                                                if (playingId === reel.id) {
                                                    setPlayingId(null);
                                                }
                                            }}
                                        />
                                    </div>

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />

                                    {/* PLAY BUTTON */}
                                    {playingId !== reel.id && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="h-16 w-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                                <Play
                                                    size={20}
                                                    fill="#E8C6D6"
                                                    className="text-[#E8C6D6] ml-1"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* TITLE */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                                        <h3 className="text-[#E8C6D6] font-medium text-center text-lg">
                                            {reel.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>
        </motion.section>
    );
}