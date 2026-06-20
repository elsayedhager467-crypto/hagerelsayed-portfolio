import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const testimonials = [
    {
        id: 1,
        name: "Mr.Adham",
        role: "Operation Manager",
        company: "AAGT Marketing Agency",
        image: "/testimonials-logos/aagt-feedback1-logo.jpg",
        link: "https://www.facebook.com/share/1A6xqfqjTh/",
        quote:
            " كتيم حابين نشكرك علي المجهود الكبير اللي بتقدميه في الشغل ليكي دور واضح في النتائج اللي حققناها مع العملاء سواء من ناحية الأفكار أو المتابعة مع العملاء وتتنفيذ الشغل المطلوب وأكتر حاجه مميزة هي روحك مع التيم و التعاون اللي بتقديمه دائمًا حاضرة للمساعدة ومشاركة أفكار جديدة وداعمة لأي حد محتاج مساعدة أو توجيه فخورة جدًا بوجودك ضمن التيم ومقدرة كل الجهد والطاقة الإيجابية اللي بتقدميها يوميًا 🙏"
    },
    {
        id: 2,
        name: "Eng.Mohammed Atta",
        role: "Founder",
        company: "Kitchen Store",
        image: "/testimonials-logos/ks-feedback2-logo.jpg",
        link: "https://www.facebook.com/share/193ojmptQw/",
        quote:
            " أ. هاجر اخبارك ايه انا زهقتك معايا كل شوية ميتنج بس علشان عارف إن كل مرة بنتكلم بتديني أفكار أطور من المكان عندي وحاجات تسهل الدنيا عليا وعلى العملاء"
    },
    {
        id: 3,
        name: "Mr.Mohamed Samy",
        role: "Founder",
        company: "Polar Restaurant and Cafe",
        image: "/testimonials-logos/polar-feedback3-logo.jpg",
        link: "https://www.facebook.com/share/14jM6e8tStq/",
        quote:
            "لو هنتكلم فعلا عن حد تمت معاه متابعه وتنفيذ بشكل سلس من غير زهق أو ملل بجد هنحطك في المقام الأول يا هاجر فعلا كانت افضل فترة بالنسبة ليا اشتغلتها معاكي"
    },
    {
        id: 4,
        name: "Dr.Haidy",
        role: "Founder",
        company: "Core Academy",
        image: "/testimonials-logos/core-feedback4-logo.jpg",
        link: "https://www.facebook.com/profile.php?id=61561610169624&locale=ar_AR",
        quote:
            "شغل عالي اوي و عارفة مين رايح فين شكرا ليكي و تعبك معانا كأنك صاحبة ما شاء الله يا هاجر ربنا يحسن ما بين ايدك أول مره ألاقي حد فاهم دماغي وعارف أنا عاوزه ايه الاستراتيجي منظمة جدا والافكار اللي فيها رائعة بجد تسلم ايدك 🥰",
    },
    {
        id: 5,
        name: "Eng.Mohamed",
        role: "Founder",
        company: "SUN & SPX Eyewear",
        image: "/testimonials-logos/sun&spx-feedback5-logo.jpg",
        link: "https://www.facebook.com/SUN.SPXeyewear?locale=ar_AR",
        quote:
            "شغل عالي اوي فاهمه البراند وعارفه مين رايح فين شكرا ليكي ولتعبك معانا كأنك صاحبة المكان ❤️🙏🏼"
    },
    {
        id: 6,
        name: "Mrs.Sohila Ahmed",
        role: "Operation Manager",
        company: "ing",
        image: "/testimonials-logos/ing-feedback6-logo.jpg",
        link: "https://www.facebook.com/share/192RfTMspZ/",
        quote:
            "استاذة هاجر من افضل الناس اللي اشتغلت معاهم من اول يوم شغل ملتزمة مجتهدة مميزة اكتر حد بيتابع الجديد ويعلمه للي حواليه حقيقي شغلها في كل المجالات بيتكلم عنها سواء في شغل الكريتف او في شغل الاكونت مانجر كانت مميزه جدا ومحسنه في التواصل مع العميل ومع التيم"
    },
    {
        id: 7,
        name: "Mrs.Radwa",
        role: "Manager",
        company: "primemediapartener",
        image: "/testimonials-logos/pmp-feedback7-logo.jpg",
        link: "https://www.instagram.com/primemediapartener?igsh=bDFvbnR6MWF5ZmZq",
        quote:
            "وأخيرًا ❤️ بحيي مجهود هاجر في إنشاء الافكار الكرييتف الفترة الأخيرة وشغل بروفايل الشركة ومش بس الجدولة 👏️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️"
    },
];

export default function Testimonials() {
    const [selectedQuote, setSelectedQuote] = useState(null);
    return (
        <section className="py-12 md:py-24 overflow-hidden">
            <p className="uppercase tracking-[0.35em] text-xs text-white mb-4 text-center px-4">
                Clients' feedback
            </p>

            <h2 className="text-[#E8C6D6] text-4xl md:text-6xl font-light text-center mb-16 px-4">
                Trusted by People
                <span className="text-[#ff4d9d]"> I’ve Worked With</span>
            </h2>

            <div className="relative">
                <div className="flex animate-testimonials gap-6 w-max">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 60,
                                scale: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.25 },
                            }}
                            className="
            w-[360px]
            border
            border-white/10
            rounded-[28px]
            p-8
            flex
            flex-col
            justify-between
            bg-black/20
            backdrop-blur-sm
        "
                        >
                            <div className="mb-8">
                                <button
                                    onClick={() => setSelectedQuote(item)}
                                    className="
                    text-right
                    w-full
                    cursor-pointer
                    group
                "
                                >
                                    <p
                                        className={`
                        text-[#E8C6D6]/75
                        leading-8
                        transition-colors
                        duration-300
                        group-hover:text-[#E8C6D6]
                        ${item.quote.length > 180 ? "line-clamp-3" : ""}
                    `}
                                    >
                                        "{item.quote}"
                                    </p>

                                    {item.quote.length > 180 && (
                                        <span
                                            className="
                            text-[#ff4d9d]
                            text-sm
                            mt-2
                            inline-block
                            font-medium
                            group-hover:underline
                        "
                                        >
                                            Read More
                                        </span>
                                    )}
                                </button>
                            </div>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="
                flex
                items-center
                justify-between
                group
            "
                            >
                                <div className="flex items-center gap-4">
                                    <motion.img
                                        loading="lazy"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.25 }}
                                        src={item.image}
                                        alt={item.name}
                                        className="
                        w-12
                        h-12
                        rounded-full
                        object-cover
                    "
                                    />

                                    <div>
                                        <p className="text-[#E8C6D6] text-sm font-medium">
                                            {item.name}
                                        </p>

                                        <p className="text-[#E8C6D6]/50 text-xs">
                                            {item.role} · {item.company}
                                        </p>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ x: 4, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ArrowUpRight
                                        size={18}
                                        className="text-[#ff4d9d]"
                                    />
                                </motion.div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedQuote && (
                    <motion.div
                        onClick={() => setSelectedQuote(null)}
                        className="
                fixed
                inset-0
                z-[9999]
                bg-black/80
                backdrop-blur-md
                flex
                items-center
                justify-center
                p-6
            "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: 40,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                    max-w-2xl
                    w-full
                    rounded-[32px]
                    border
                    border-white/10
                    bg-[#0d0d0d]
                    p-8
                    relative
                "
                        >
                            <button
                                onClick={() => setSelectedQuote(null)}
                                className="
                        absolute
                        top-5
                        right-5
                        text-[#E8C6D6]/60
                        hover:text-[#ff4d9d]
                        transition
                    "
                            >
                                <X size={22} />
                            </button>

                            <div className="flex items-center gap-4 mb-8">
                                <img
                                    loading="lazy"
                                    src={selectedQuote.image}
                                    alt={selectedQuote.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-[#E8C6D6] font-medium">
                                        {selectedQuote.name}
                                    </h3>

                                    <p className="text-[#E8C6D6]/50 text-sm">
                                        {selectedQuote.role} · {selectedQuote.company}
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#E8C6D6]/80 leading-9 text-right whitespace-pre-wrap">
                                "{selectedQuote.quote}"
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}