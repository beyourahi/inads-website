import Image from "next/image";

export const Newsletter: React.FC = () => (
    <section className="py-28 relative bg-black">
        {/*//! Side Image */}
        <div className="absolute top-0 right-0 w-[200px] h-[449px]">
            <Image
                src="/newsletter_image.png"
                alt="Image"
                layout="fill"
                className="object-contain"
            />
        </div>

        {/*//! Form Box */}
        <div className="container mx-auto px-36 flex justify-between">
            <div className="bg-[url('/newsletter_BG.png')] bg-cover flex justify-between items-center py-20 px-16 w-full">
                {/*//// Heading */}
                <div>
                    <h1 className="text-5xl font-np font-bold leading-tight">
                        Subscribe to our <br /> Newsletter
                    </h1>
                </div>

                {/*//// Form */}
                <form className="space-x-4 w-[55%] flex justify-between">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full py-4 px-6 text-black font-ps font-normal text-lg rounded-md border-2 border-white border-solid outline-none focus:outline-primary focus:outline-offset-0 focus:outline-[3px] transition-all ease-in"
                    />
                    <button
                        type="submit"
                        className="bg-primary hover:bg-secondary font-ps font-normal transition-all ease-in px-12 py-4 rounded-md text-xl"
                    >
                        <span>Subscribe</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
);
