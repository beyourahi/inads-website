export const AboutHero: React.FC = () => (
    <div className="bg-[url('/writing.png')] bg-cover pb-36 pt-56">
        <div className="container mx-auto px-36 flex justify-between items-center">
            <div className="space-y-3">
                <h1 className="text-primary text-8xl font-black">GLOBALLY</h1>
                <h2 className="text-5xl">CONNECTED LARGE</h2>
                <h2 className="text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">
                        NET
                    </span>
                    WORK
                </h2>
            </div>

            <div className="flex flex-col space-y-4">
                <h3 className="text-4xl">About Us</h3>
                <span className="text-lg">Home - About us</span>
            </div>
        </div>
    </div>
);
