export const ServicesHero: React.FC = () => (
    <div
        className="pb-36 pt-56 bg-cover bg-center"
        style={{
            backgroundImage:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('services_hero_bg.png')",
        }}
    >
        <div className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36 flex justify-center items-center md:justify-between">
            <div className="space-y-3 font-np">
                <h2 className="text-2xl md:text-3xl lg:text-4xl">WHAT ELSE</h2>
                <h1 className="text-primary text-6xl md:text-7xl lg:text-8xl font-black">
                    <span className="underline underline-offset-[40px] decoration-[3px]">W</span>E
                    DO?
                </h1>
            </div>

            <div className="hidden md:flex flex-col space-y-4">
                <h3 className="text-3xl font-np font-medium lg:text-4xl">Services</h3>
                <span className="text-base font-ps font-normal lg:text-lg">Home - Services</span>
            </div>
        </div>
    </div>
);
