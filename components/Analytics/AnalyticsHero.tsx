export const AnalyticsHero: React.FC = () => (
    <div
        className="pb-36 pt-56 bg-contain xl:bg-cover"
        style={{
            backgroundImage:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url('/blockchain.png')",
        }}
    >
        <div className="container mx-auto flex justify-center items-center px-5 md:px-12 lg:px-24 md:justify-between">
            <div className="space-y-3 font-np">
                <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black">
                    MEASURABLE
                </h1>
                <h2 className="text-2xl xl:text-5xl">OUTDOOR</h2>
                <h2 className="text-2xl xl:text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">AD</span>
                    VERTISING
                </h2>
            </div>

            <div className="hidden md:flex flex-col space-y-4">
                <h3 className="text-3xl font-np font-medium lg:text-4xl">Analytics</h3>
                <span className="text-base font-ps font-normal lg:text-lg">Home - Analytics </span>
            </div>
        </div>
    </div>
);
