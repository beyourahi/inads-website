import Image from "next/image";
import walking from "../../public/walking.png";
import divider from "../../public/divider.png";

export const MeasurementAnalysis: React.FC = () => (
    <section className="bg-[#0C0D0E] py-28">
        <div className="container mx-auto px-36 flex flex-col space-y-32">
            {/*//! Heading  */}
            <h1 className="text-6xl font-np font-bold leading-tight">
                Measurement <br />
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    A
                </span>
                nalysis
            </h1>

            {/*//! Steps */}
            <div className="flex relative">
                {/*//// Hollow Text */}
                <div className="absolute bottom-[50%] -left-[45%] -rotate-90 z-20">
                    <h1
                        className="font-np font-black text-9xl text-transparent opacity-20 tracking-wider"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        ANALYTICS
                    </h1>
                </div>

                <div className="w-[60%] space-y-8">
                    <div className="flex items-center space-x-9">
                        <h1 className="text-primary text-3xl font-np font-medium">Step 1</h1>
                        <div>
                            <Image src={divider} alt="Divider" className="object-contain" />
                        </div>
                        <h1 className="font-ps font-normal text-2xl w-[50%]">
                            Design study to measure campaign goals
                        </h1>
                    </div>

                    <div className="flex items-center space-x-9">
                        <h1 className="text-primary text-3xl font-np font-medium">Step 2</h1>
                        <div>
                            <Image src={divider} alt="Divider" className="object-contain" />
                        </div>
                        <h1 className="font-ps font-normal text-2xl w-[50%]">Activate campaign</h1>
                    </div>

                    <div className="flex items-center space-x-9">
                        <h1 className="text-primary text-3xl font-np font-medium">Step 3</h1>
                        <div>
                            <Image src={divider} alt="Divider" className="object-contain" />
                        </div>
                        <h1 className="font-ps font-normal text-2xl w-[50%]">
                            Segment exposed (test) and unexposed (control)
                        </h1>
                    </div>

                    <div className="flex items-center space-x-9">
                        <h1 className="text-primary text-3xl font-np font-medium">Step 4</h1>
                        <div>
                            <Image src={divider} alt="Divider" className="object-contain" />
                        </div>
                        <h1 className="font-ps font-normal text-2xl w-[50%]">
                            Survey brand lift questions or Measure Conversions
                        </h1>
                    </div>

                    <div className="flex items-center space-x-9">
                        <h1 className="text-primary text-3xl font-np font-medium">Step 5</h1>
                        <div>
                            <Image src={divider} alt="Divider" className="object-contain" />
                        </div>
                        <h1 className="font-ps font-normal text-2xl w-[50%]">
                            Assess Lift as a result of INADS campaign + audience analytics and
                            demographics
                        </h1>
                    </div>
                </div>

                <div className="w-[40%] relative flex justify-end">
                    <div className="absolute bg-secondary w-96 h-[38rem] -top-5 -right-5 z-10"></div>
                    <Image src={walking} alt="Service Image" className="object-contain z-20" />
                </div>
            </div>
        </div>
    </section>
);
