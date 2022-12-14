export const ContactHero: React.FC = () => (
    <div
        className="bg-cover bg-center pb-36 pt-56"
        style={{
            backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('contact_hero_bg.png')",
        }}
    >
        <div className="container mx-auto px-5 flex justify-center items-center md:px-12 lg:px-24 xl:px-36 md:justify-between">
            <div className="space-y-3 font-np">
                <h1 className="text-primary text-5xl lg:text-6xl font-black">NO CHANCE</h1>
                <h2 className="text-2xl lg:text-3xl">
                    <span className="underline underline-offset-[40px] decoration-primary">TO</span>
                    {""} SKIP YOUR ADS
                </h2>
            </div>

            <div className="hidden md:flex flex-col space-y-4">
                <h3 className="text-3xl font-np font-medium lg:text-4xl">Contact Us</h3>
                <span className="text-base font-ps font-normal lg:text-lg">Home - Contact us</span>
            </div>
        </div>
    </div>
);
