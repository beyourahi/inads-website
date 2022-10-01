export const ContactHero: React.FC = () => (
    <div
        className="pb-36 pt-56"
        style={{
            background:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('contact_hero_bg.png')",
            backgroundSize: "cover",
        }}
    >
        <div className="container mx-auto px-36 flex justify-between items-center">
            <div className="space-y-3 font-np">
                <h1 className="text-primary text-8xl font-black">NO CHANCE</h1>
                <h2 className="text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">TO</span>
                    {""} SKIP YOUR ADS
                </h2>
            </div>

            <div className="flex flex-col space-y-4">
                <h3 className="text-4xl font-np font-medium">Contact Us</h3>
                <span className="text-lg font-ps font-normal">Home - Contact us</span>
            </div>
        </div>
    </div>
);
