import Image from "next/image";
import walking from "../../public/walking.png";
import divider from "../../public/divider.png";

const steps = [
    { num: 1, text: "Design study to measure campaign goals" },
    { num: 2, text: "Activate campaign" },
    { num: 3, text: "Segment exposed (test) and unexposed (control)" },
    { num: 4, text: "Survey brand lift questions or Measure Conversions" },
    {
        num: 5,
        text: "Assess Lift as a result of INADS campaign + audience analytics and demographics",
    },
];

export const MeasurementAnalysis: React.FC = () => (
    <section className="bg-[#0C0D0E] py-20 xl:py-28">
        <div className="container mx-auto px-8 xl:px-36 flex flex-col space-y-20 xl:space-y-32">
            {/*//! Heading  */}
            <h1 className="text-5xl xl:text-6xl font-np font-bold leading-tight">
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

                <div className="xl:w-[60%] space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-8">
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

                <div className="hidden xl:flex w-[40%] relative justify-end">
                    <div className="absolute bg-secondary w-96 h-[38rem] -top-5 -right-5 z-10"></div>
                    <Image src={walking} alt="Service Image" className="object-contain z-20" />
                </div>
            </div>
        </div>
    </section>
);
