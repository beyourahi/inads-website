import Image from "next/image";
import { HiArrowNarrowDown } from "react-icons/hi";
import play from "../../public/play.png";

export const Hero: React.FC = () => (
    <div className="h-full flex justify-start items-center relative">
        {/*//// Background Video */}
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/*//// Masthead */}
        <div className="relative container mx-auto px-36">
            {/*//? Hollow texts */}
            <div className="flex flex-col items-start justify-center absolute -top-20 left-0 font-black text-9xl z-20 ml-7">
                <h1
                    className="text-transparent opacity-20 tracking-widest mb-8"
                    style={{ WebkitTextStroke: "1px white" }}
                >
                    Design
                </h1>
                <h1
                    className="text-transparent opacity-20 tracking-widest mb-8"
                    style={{ WebkitTextStroke: "1px white" }}
                >
                    Creative
                </h1>
                <h1
                    className="text-transparent opacity-20 tracking-widest"
                    style={{ WebkitTextStroke: "1px white" }}
                >
                    Brand
                </h1>
            </div>

            {/*//? CTA */}
            <div className="space-y-8">
                <h1 className="text-8xl font-black">
                    We {""}
                    <span className="text-primary">
                        Believe In
                        <br />
                    </span>
                    Impressing {""}
                    <span className="text-primary ">
                        That
                        <br />
                    </span>
                    Lasts
                </h1>

                <h2 className="text-2xl w-[65%]">
                    Innovation, quality, customer service and reliability are the foundations of our
                    business
                </h2>

                <div>
                    <a href="#">
                        <Image src={play} alt="Play Video" />
                    </a>
                </div>
            </div>
        </div>

        {/*//// Arrow  */}
        <a
            href="#about"
            className="z-20 absolute bottom-0 left-[50%] text-4xl mb-12 bg-primary bg-opacity-10 p-3 rounded-full animate-bounce"
        >
            <HiArrowNarrowDown color="#70dd36" />
        </a>
    </div>
);
