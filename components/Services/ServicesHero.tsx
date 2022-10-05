export const ServicesHero: React.FC = () => (
    <div
        className="pb-36 pt-56 bg-cover bg-center"
        style={{
            backgroundImage:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('services_hero_bg.png')",
        }}
    >
        <div className="container mx-auto px-5 flex justify-center items-center">
            <div className="space-y-3 font-np">
                <h2 className="text-3xl">WHAT ELSE</h2>
                <h1 className="text-primary text-7xl font-black">
                    <span className="underline underline-offset-[40px] decoration-[3px]">W</span>E
                    DO?
                </h1>
            </div>

            <div className="hidden xl:flex flex-col space-y-4">
                <h3 className="text-4xl font-np font-medium">Services</h3>
                <span className="text-lg font-ps font-normal">Home - Services</span>
            </div>
        </div>
    </div>
);
