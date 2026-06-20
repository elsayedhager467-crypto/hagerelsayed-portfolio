import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socialPosts = [
    {
        id: "polar-01",
        brand: "Polar",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/RFxfqpyZ",
        image: "/social-posts/polar-01.png",
    },

    {
        id: "global-mining-01",
        brand: "العالمية للتعدين",
        industry: "Industrial & Services",
        platform: "Facebook",
        link: "https://surl.li/iinnbg",
        image: "/social-posts/global-mining-01.png",
    },
    {
        id: "polar-03",
        brand: "Polar",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/rPVeb2mI",
        image: "/social-posts/polar-03.png",
    },
    {
        id: "aldiwan-01",
        brand: "Al Diwan",
        industry: "Education",
        platform: "Instagram",
        link: "https://www.instagram.com/p/DGa12CLRWwg/",
        image: "/social-posts/diwan-01.png",
    },
    {
        id: "altaibat-01",
        brand: "الطيبات",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/O2ub42j3",
        image: "/social-posts/altaibat-01.png",
    },
    {
        id: "dr-shoeir-01",
        brand: "د. محمود شعير",
        industry: "Medical",
        platform: "Facebook",
        link: "https://surl.gd/ubepyx",
        image: "/social-posts/shoeir-01.png",
    },

    {
        id: "pablo-burger-01",
        brand: "Pablo Burger",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://www.facebook.com/photo?fbid=122199594626334839&set=a.122138418602334839&locale=ar_AR ",
        image: "/social-posts/pablo-01.png",
    },
    {
        id: "rentelly-01",
        brand: "Rentelly",
        industry: "Technology",
        platform: "Facebook",
        link: "https://2u.pw/w7NuJC",
        image: "/social-posts/rentelly-01.png",
    },

    {
        id: "altaibat-04",
        brand: "الطيبات",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/pU53iSJL",
        image: "/social-posts/altaibat-04.png",
    },
    {
        id: "tedent-02",
        brand: "TEdent Dent",
        industry: "Medical",
        platform: "Facebook",
        link: "https://2u.pw/GuWgv",
        image: "/social-posts/tedent-02.png",
    },
    {
        id: "aldiwan-02",
        brand: "Al Diwan",
        industry: "Education",
        platform: "Facebook",
        link: "https://2u.pw/GrUzMm",
        image: "/social-posts/diwan-02.png",
    },
    {
        id: "altaibat-02",
        brand: "الطيبات",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/a04b6Fz0",
        image: "/social-posts/altaibat-02.png",
    },
    {
        id: "elarab-01",
        brand: "بن العراب",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/8PpyA",
        image: "/social-posts/elarab-01.png",
    },

    {
        id: "loaloa-01",
        brand: "لؤلؤ",
        industry: "Retail & Fashion",
        platform: "Facebook",
        link: null,
        image: "/social-posts/loaloa-01.png",
    },


    {
        id: "lucky-leaf-01",
        brand: "Lucky Leaf / ZAT & COY",
        industry: "Industrial & Services",
        platform: "Facebook",
        link: "https://2u.pw/pCz2SY",
        image: "/social-posts/lucky-01.png",
    },

    {
        id: "agrocan-01",
        brand: "AGROCAN",
        industry: "Industrial & Services",
        platform: "Facebook",
        link: "https://2u.pw/byFDl",
        image: "/social-posts/agrocan-01.png",
    },
    {
        id: "altaibat-03",
        brand: "الطيبات",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/QPvdjg0w",
        image: "/social-posts/altaibat-03.png",
    },


    {
        id: "rentelly-02",
        brand: "Rentelly",
        industry: "Technology",
        platform: "Facebook",
        link: "https://2u.pw/5mdCrb",
        image: "/social-posts/rentelly-02.png",
    },

    {
        id: "rentelly-03",
        brand: "Rentelly",
        industry: "Technology",
        platform: "Facebook",
        link: "https://url-shortener.me/2HDZ",
        image: "/social-posts/rentelly-03.png",
    },

    {
        id: "core-academy-01",
        brand: "Core Academy",
        industry: "Education",
        platform: "Facebook",
        link: "https://2u.pw/Q4CB2aKm",
        image: "/social-posts/core-01.png",
    },

    {
        id: "core-academy-02",
        brand: "Core Academy",
        industry: "Education",
        platform: "Facebook",
        link: "https://2u.pw/uTHS0I5x",
        image: "/social-posts/core-02.png",
    },

    {
        id: "core-academy-03",
        brand: "Core Academy",
        industry: "Education",
        platform: "Facebook",
        link: "https://2u.pw/BoCc5Gvx",
        image: "/social-posts/core-03.png",
    },
    {
        id: "elhendawy-01",
        brand: "El Hendawy Group",
        industry: "Retail & Fashion",
        platform: "Facebook",
        link: "https://surl.li/bjkedv",
        image: "/social-posts/elhendawy-01.png",
    },
    {
        id: "khaled-diwan-01",
        brand: "مركز خالد ديوان للأشعة",
        industry: "Medical",
        platform: "Facebook",
        link: "https://surl.li/skkwwx",
        image: "/social-posts/khaled-diwan-01.png",
    },

    {
        id: "tedent-01",
        brand: "TEdent Dent",
        industry: "Medical",
        platform: "Facebook",
        link: "https://2u.pw/giZ0n",
        image: "/social-posts/tedent-01.png",
    },

    {
        id: "polar-02",
        brand: "Polar",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/Bueh9jV0",
        image: "/social-posts/polar-02.png",
    },
    {
        id: "jawharat-ellohom-01",
        brand: "جوهرة اللحوم",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/70XHgLrD",
        image: "/social-posts/Jawharat.png",
    },
    {
        id: "altaibat-05",
        brand: "الطيبات",
        industry: "Food & Beverage",
        platform: "Facebook",
        link: "https://2u.pw/fxxVQ3v0",
        image: "/social-posts/altaibat-05.png",
    },
];

const filters = [
    "All",
    "Food & Beverage",
    "Medical",
    "Education",
    "Technology",
    "Industrial & Services",
    "Retail & Fashion",
];


/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12, // slower cascade (this is what you actually want)
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9, // natural slow animation
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function SocialMediaPosts() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedPost, setSelectedPost] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const filteredPosts = useMemo(() => {
        return activeFilter === "All"
            ? socialPosts
            : socialPosts.filter((post) => post.industry === activeFilter);
    }, [activeFilter]);

    const displayedPosts = useMemo(() => {
        return showAll ? filteredPosts : filteredPosts.slice(0, 12);
    }, [showAll, filteredPosts]);

    const hasMore = useMemo(() => {
        return filteredPosts.length > 12;
    }, [filteredPosts]);

    const headerFadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const headerContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    return (
        <section className="py-12 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    className="mb-16 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerContainer}
                >
                    <motion.h2
                        variants={headerFadeUp}
                        className="text-5xl font-bold text-[#E8C6D6]"
                    >
                        Social Media <span className="text-[#ff4d9d]"> Campaigns</span>
                    </motion.h2>
                    <motion.p variants={headerFadeUp} className="mt-4 text-zinc-400">
                        Content, Strategy & Creative Execution
                    </motion.p>
                </motion.div>

                {/* FILTERS */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => {
                                setActiveFilter(filter);
                                setShowAll(false);
                            }}
                            className={`px-5 py-2 rounded-full border transition cursor-pointer
              ${activeFilter === filter
                                    ? "bg-pink-500 text-white border-pink-500"
                                    : "border-zinc-700 text-zinc-400 hover:border-pink-500"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
                >
                    {displayedPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            onClick={() => setSelectedPost(post)}
                            className="
                                break-inside-avoid
                                cursor-pointer
                                overflow-hidden
                                rounded-3xl
                                bg-zinc-900
                                border border-zinc-800
                            "
                        >
                            <img
                                loading="lazy"
                                src={post.image}
                                alt={post.brand}
                                className="
                                    w-full
                                    object-cover
                                    transition
                                    duration-500
                                    hover:scale-105
                                "
                            />

                            <div className="p-5">
                                <h3 className="font-semibold text-white">
                                    {post.brand}
                                </h3>
                                <p className="text-sm text-zinc-400">
                                    {post.industry}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* SHOW MORE */}
                {hasMore && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="cursor-pointer px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300"
                        >
                            {showAll ? "Show Less" : "See More"}
                        </button>
                    </div>
                )}

                {/* MODAL */}
                <PostModal
                    post={selectedPost}
                    close={() => setSelectedPost(null)}
                />
            </div>
        </section>
    );
}


function PostModal({ post, close }) {
    return (
        <AnimatePresence>
            {post && (
                <motion.div
                    className="
                        fixed inset-0 z-50
                        bg-black/80 backdrop-blur-sm
                        flex items-center justify-center
                        p-5
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={close}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="
                            max-w-5xl
                            w-full
                            rounded-3xl
                            overflow-hidden
                            bg-zinc-950
                            border border-zinc-800
                        "
                    >
                        <img
                            loading="lazy"
                            src={post.image}
                            alt={post.brand}
                            className="
                                w-full
                                max-h-[70vh]
                                object-contain
                                bg-black
                            "
                        />

                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white">
                                {post.brand}
                            </h3>

                            <div className="flex gap-3 mt-3 flex-wrap">
                                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                                    {post.industry}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                                    {post.platform}
                                </span>
                            </div>

                            <a
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    inline-block
                                    mt-6
                                    px-6 py-3
                                    rounded-full
                                    bg-pink-500
                                    text-white
                                    hover:bg-pink-600
                                    transition
                                "
                            >
                                View Original Post
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

