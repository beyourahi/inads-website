import Image from "next/image";
import walking from "../../public/walking.png";
import divider from "../../public/divider.png";
import { analysis_steps } from "data";

export const MeasurementAnalysis: React.FC = () => (
    <section className="bg-[#0C0D0E] py-20 xl:py-28">
        <div className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36 flex flex-col space-y-20 xl:space-y-32">
            {/*//! Heading  */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-np font-bold leading-tight text-center lg:text-left">
                Measurement <br />
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    A
                </span>
                nalysis
            </h1>

            {/*//! Steps */}
            <div className="flex relative">
                {/*//// Hollow Text */}
                <div className="hidden xl:block absolute bottom-[50%] -left-[45%] -rotate-90 z-20">
                    <h1
                        className="font-np font-black text-9xl text-transparent opacity-20 tracking-wider"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        ANALYTICS
                    </h1>
                </div>

                <div className="lg:w-[60%] flex flex-col items-center lg:items-stretch space-y-8">
                    {analysis_steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between space-x-8 w-full md:w-[80%]"
                        >
                            <h1 className="text-primary text-xl xl:text-3xl font-np font-medium">
                                Step {step.num}
                            </h1>
                            <div>
                                <Image src={divider} alt="Divider" className="object-contain" />
                            </div>
                            <h1 className="font-ps font-normal text-base xl:text-2xl w-[50%]">
                                {step.text}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex w-[40%] relative justify-end">
                    <div className="block absolute bg-secondary w-72 h-[30rem] top-12 -right-8 xl:top-[1%] xl:-right-5 2xl:-top-[3%] 2xl:h-[40rem] z-10"></div>
                    <Image src={walking} alt="Service Image" className="object-contain z-20" />
                </div>
            </div>
        </div>
    </section>
);
