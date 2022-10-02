export const AboutHero: React.FC = () => (
    <div
        className="bg-cover bg-center pb-36 pt-56"
        style={{
            backgroundImage: "url('/writing.png')",
        }}
    >
        <div className="container mx-auto px-8 xl:px-36 flex justify-between items-center">
            <div className="space-y-3 font-np">
                <h1 className="text-primary text-6xl xl:text-8xl font-black">GLOBALLY</h1>
                <h2 className="text-3xl xl:text-5xl">CONNECTED LARGE</h2>
                <h2 className="text-3xl xl:text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">
                        NET
                    </span>
                    WORK
                </h2>
            </div>

            <div className="hidden xl:flex flex-col space-y-4">
                <h3 className="text-4xl font-np font-medium">About Us</h3>
                <span className="text-lg font-ps font-normal">Home - About us</span>
            </div>
        </div>
    </div>
);
