import Image from "next/image";
import { HiArrowNarrowDown } from "react-icons/hi";
import play from "../../public/play.png";

export const HomeHero: React.FC = () => (
    <div className="h-full flex justify-start items-center relative">
        {/*//// Background Video */}
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/*//// Masthead */}
        <div className="relative container mx-auto px-5 md:px-12 lg:px-24">
            {/*//? Hollow texts */}
            <div className="hidden md:flex flex-col items-start justify-center absolute -top-[15%] md:-top-[10%] lg:-top-20 left-0 md:-left-[5%] lg:left-0 font-np font-black text-[3.5rem] md:text-7xl lg:text-8xl xl:text-9xl z-20 ml-7">
                <h1
                    className="text-transparent opacity-[0.15] tracking-widest mb-2 xl:mb-8"
                    style={{ WebkitTextStroke: "1px white" }}
                >
                    Design
                </h1>
                <h1
                    className="text-transparent opacity-[0.15] tracking-widest mb-2 xl:mb-8"
                    style={{ WebkitTextStroke: "1px white" }}
                >
                    Creative
                </h1>
                <h1
                    className="text-transparent opacity-[0.15] tracking-widest"
                    style={{ WebkitTextStroke: "1px white" }}
                >
                    Brand
                </h1>
            </div>

            {/*//? CTA */}
            <div className="space-y-8 md:space-y-10 lg:space-y-16">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-np">
                    We {""}
                    <span className="text-primary">Believe In </span>
                    Impressions {""}
                    <span className="text-primary ">That </span>
                    Lasts
                </h1>

                <h2 className="text-lg md:text-2xl lg:text-3xl font-ps w-[80%]">
                    Innovation, quality, customer service and reliability are the foundations of our
                    business
                </h2>

                <div className="w-[25%] md:w-full">
                    <a href="#">
                        <Image src={play} alt="Play Video" />
                    </a>
                </div>
            </div>
        </div>

        {/*//// Arrow  */}
        <div className="z-20 absolute -bottom-[3%] lg:bottom-0 left-[43%] lg:left-[50%] text-3xl md:text-4xl mb-12 bg-primary bg-opacity-5 hover:bg-opacity-20 p-3 rounded-full animate-bounce transition-all ease-in">
            <a href="#about">
                <HiArrowNarrowDown className="text-primary" />
            </a>
        </div>
    </div>
);
