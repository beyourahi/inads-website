export const AboutHero: React.FC = () => (
    <div
        className="bg-cover bg-center pb-36 pt-56"
        style={{
            backgroundImage: "url('/writing.png')",
        }}
    >
        <div className="container mx-auto px-5 flex justify-center items-center md:px-12 lg:px-24 xl:px-36 md:justify-between">
            <div className="space-y-3 font-np">
                <h1 className="text-primary font-black text-6xl md:text-[3.8rem] lg:text-7xl">GLOBALLY</h1>
                <h2 className="text-2xl xl:text-5xl">CONNECTED LARGE</h2>
                <h2 className="text-2xl xl:text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">
                        NET
                    </span>
                    WORK
                </h2>
            </div>

            <div className="hidden md:flex flex-col space-y-4">
                <h3 className="text-3xl font-np font-medium lg:text-4xl">About Us</h3>
                <span className="text-base font-ps font-normal lg:text-lg">Home - About us</span>
            </div>
        </div>
    </div>
);
