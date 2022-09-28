import type { NextPage } from "next";
import Image from "next/image";
import shape from "../public/home_bg_shape.png";
import { Layout } from "../components";

const Home: NextPage = () => (
    <Layout page="Home">
        <div className="h-screen">
            {/*//! Hero */}
            <div className="bg-[url('/home_bg.png')] bg-cover h-full flex justify-between items-center">
                <div className="flex items-center justify-center pl-72 relative">
                    <div className="flex flex-col items-start justify-center absolute -top-20 left-0 font-black text-9xl z-20">
                        <h1
                            className="text-black opacity-20 tracking-widest mb-8"
                            style={{ WebkitTextStroke: "1px white" }}
                        >
                            Design
                        </h1>
                        <h1
                            className="text-black opacity-20 tracking-widest mb-8"
                            style={{ WebkitTextStroke: "1px white" }}
                        >
                            Creative
                        </h1>
                        <h1
                            className="text-black opacity-20 tracking-widest"
                            style={{ WebkitTextStroke: "1px white" }}
                        >
                            Brand
                        </h1>
                    </div>

                    <div className="space-y-12 z-30">
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
                        <h2 className="text-2xl w-[85%]">
                            Innovation, quality, customer service and reliability are the
                            foundations of our business
                        </h2>
                    </div>
                </div>

                <div className="h-full">
                    <Image src={shape} alt="Image Shape" className="object-contain" />
                </div>
            </div>

            {/* About Us  */}

            {/* Features  */}

            {/* Contact Us */}
        </div>
    </Layout>
);

export default Home;
