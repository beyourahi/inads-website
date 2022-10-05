import Image from "next/image";

export const AnalyticsMasthead: React.FC = () => (
    <div className="bg-black relative overflow-clip">
        <div className="hidden xl:flex items-center justify-center absolute top-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((obj, index) => (
                <h1
                    key={index}
                    className="text-black font-np font-black text-[7rem] opacity-[0.15] tracking-widest"
                    style={{ WebkitTextStroke: "1px white", wordSpacing: "2rem" }}
                >
                    ANALYTICS
                </h1>
            ))}
        </div>

        <div className="container mx-auto px-5 xl:px-36 xl:pt-60 py-16 xl:py-0 xl:pb-28 flex flex-col xl:flex-row items-center space-y-12 xl:space-x-8">
            <div className="flex xl:w-3/5">
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

            <div className="space-y-16 xl:w-2/5">
                <h1 className="text-4xl xl:text-6xl text-center xl:text-left font-np font-bold">
                    <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                        A
                    </span>
                    nalytics
                </h1>
                <p className="text-lg font-ps font-normal text-center">
                    Post campaign Inadsgroup has a variety of reporting and measurement services to
                    quantify a measurable outcomes such as reach, brand lift, website visits,
                    footfall increases, among others.
                </p>
            </div>
        </div>
    </div>
);
