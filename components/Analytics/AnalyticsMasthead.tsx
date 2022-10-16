import Image from "next/image";
import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
            },
        },
    },
};

export const AnalyticsMasthead: React.FC = () => (
    <div className="bg-black relative overflow-clip">
        <motion.div
            className="hidden xl:flex items-center justify-center absolute top-0"
            variants={marqueeVariants}
            animate="animate"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((obj, index) => (
                <h1
                    key={index}
                    className="text-black font-np font-black text-9xl opacity-20 tracking-widest"
                    style={{ WebkitTextStroke: "1px white", wordSpacing: "2rem" }}
                >
                    ANALYTICS
                </h1>
            ))}
        </motion.div>

        <div className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36 xl:pt-60 py-16 xl:py-0 xl:pb-28 flex flex-col lg:flex-row items-center space-y-12 lg:space-x-8">
            <div className="flex lg:w-3/5">
                <div className="relative">
                    <Image
                        src="/pointing.png"
                        alt="Pointing Image"
                        width={435}
                        height={290}
                        className="object-contain z-20"
                    />
                    <div className="hidden xl:block absolute bg-secondary w-44 h-52 -top-5 -left-4"></div>
                </div>

                <div className="relative">
                    <Image
                        src="/pen.png"
                        alt="Pointing Image"
                        width={250}
                        height={290}
                        className="object-contain z-20"
                    />
                    <div className="hidden xl:block absolute bg-secondary w-44 h-52 -bottom-3 right-1"></div>
                </div>
            </div>

            <div className="space-y-16 lg:w-2/5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-np font-bold">
                    <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                        A
                    </span>
                    nalytics
                </h1>
                <p className="text-lg md:text-xl font-ps font-normal text-center lg:text-left">
                    Post campaign Inadsgroup has a variety of reporting and measurement services to
                    quantify a measurable outcomes such as reach, brand lift, website visits,
                    footfall increases, among others.
                </p>
            </div>
        </div>
    </div>
);
