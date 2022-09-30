import Image from "next/image";
import service1 from "../../public/service1.png";

export const ServicesList = () => (
    <div className="bg-black py-28">
        <div className="container mx-auto px-28 flex flex-col space-y-28">
            {/*//! Heading  */}
            <h1 className="text-6xl font-bold">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Services
            </h1>

            <section className="flex flex-col">
                <div className="flex space-x-28">
                    <div className="space-y-10 w-1/2">
                        <h1 className="text-primary text-3xl font-medium">
                            Media Planning & Strategy
                        </h1>
                        <p className="text-lg break-normal">
                            INADS focuses on understanding what media a client&apos;s target
                            customer reads, watches, interacts with or hears to develop a strategic
                            plan of relevant advertising opportunities ( broadcast/online display
                            and video search-adword). We create and strategize a good advertising
                            and marketing plan for all your products, business, or brand. We are
                            meant to work within your business objectives and keep within the budget
                            to develop advertising campaigns that attract the attention of potential
                            customers and lure them into buying your products. We focus on securing
                            those media advertising opportunities at the best position and price for
                            the client{" "}
                        </p>
                    </div>
                    <div className="w-1/2 relative">
                        <div className="absolute bg-secondary w-96 h-72 -top-5 right-10 z-10"></div>
                        <Image src={service1} alt="Service Image" className="object-contain z-20" />
                    </div>
                </div>
            </section>
        </div>
    </div>
);
