import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "../components";

const Analytics: NextPage = () => (
    <Layout page="Analytics">
        <div>
            {/*//! Hero */}
            <div className="bg-[url('/blockchain.png')] bg-cover pb-36 pt-56">
                <div className="container mx-auto px-36 flex justify-between items-center">
                    <div className="space-y-3">
                        <h1 className="text-primary text-8xl font-black">MEASURABLE</h1>
                        <h2 className="text-5xl">OUTDOOR</h2>
                        <h2 className="text-5xl">
                            <span className="underline underline-offset-[40px] decoration-primary">
                                AD
                            </span>
                            VERTISING
                        </h2>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-4xl">Analytics</h3>
                        <span className="text-lg">Home - Analytics </span>
                    </div>
                </div>
            </div>

            {/*//! Analytics */}
            <div className="relative overflow-clip">
                <div className="flex items-center justify-center absolute top-0 font-black text-[7rem]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((obj, index) => (
                        <h1
                            key={index}
                            className="text-black opacity-20 tracking-widest"
                            style={{ WebkitTextStroke: "1px white", wordSpacing: "2rem" }}
                        >
                            ANALYTICS
                        </h1>
                    ))}
                </div>

                <div className="container mx-auto px-36 pt-60 pb-28 flex items-center space-x-8">
                    <div className="flex w-3/5">
                        <div className="relative">
                            <Image
                                src="/pointing.png"
                                alt="Pointing Image"
                                width={435}
                                height={290}
                                className="object-contain z-20"
                            />
                            <div className="absolute bg-secondary w-44 h-52 -top-5 -left-4"></div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/pen.png"
                                alt="Pointing Image"
                                width={250}
                                height={290}
                                className="object-contain z-20"
                            />
                            <div className="absolute bg-secondary w-44 h-52 -bottom-3 right-1"></div>
                        </div>
                    </div>

                    <div className="space-y-16 w-2/5">
                        <h1 className="text-6xl font-bold">
                            <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                                A
                            </span>
                            nalytics
                        </h1>
                        <p className="text-xl break-all">
                            Post campaign Inadsgroup has a variety of reporting and measurement
                            services to quantify a measurable outcomes such as reach, brand lift,
                            website visits, footfall increases, among others.
                        </p>
                    </div>
                </div>
            </div>

            {/*//! Measurement Analysis */}
            <div></div>
        </div>
    </Layout>
);

export default Analytics;
