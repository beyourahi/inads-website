import Image from "next/image";
import dart from "../../public/dart.png";
import { motion, Variants } from "framer-motion";

const swoosh: Variants = {
    offscreenR: {
        x: 300,
        opacity: 0,
    },
    onscreenR: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
    offscreenL: {
        x: -300,
        opacity: 0,
    },
    onscreenL: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
};

export const AboutMission: React.FC = () => (
    <div className="flex flex-col-reverse xl:flex-row bg-[#0C0D0E] py-20 xl:py-0 xl:pl-36 justify-center items-center overflow-x-hidden">
        <motion.div
            className="space-y-16 px-5 md:px-12 lg:px-24 xl:w-[50%]"
            variants={swoosh}
            initial="offscreenL"
            whileInView="onscreenL"
            viewport={{ once: true, amount: 0.5 }}
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-np font-bold text-center pt-20 xl:pt-0 xl:text-left">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Mission
            </h1>
            <p className="text-base md:text-xl font-ps font-normal text-center xl:text-left">
                Our mission is to give professional and highly creative result oriented advertising
                services and other related advisory and consulting services that will businesses,
                individuals and non-proﬁt organizations in building their brands and reaching out to
                a large range of potential customers all over Qatar.
            </p>
        </motion.div>

        <motion.div
            className="px-5 md:px-12 lg:px-24 xl:px-0 xl:w-[50%]"
            variants={swoosh}
            initial="offscreenR"
            whileInView="onscreenR"
            viewport={{ once: true, amount: 0.5 }}
        >
            <Image src={dart} alt="Dart Image" className="object-cover z-20" />
        </motion.div>
    </div>
);
