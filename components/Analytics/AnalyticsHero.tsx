export const AnalyticsHero: React.FC = () => (
    <div
        className="pb-36 pt-56"
        style={{
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url('/blockchain.png')",
            backgroundSize: "cover",
        }}
    >
        <div className="container mx-auto px-36 flex justify-between items-center">
            <div className="space-y-3">
                <h1 className="text-primary text-8xl font-black">MEASURABLE</h1>
                <h2 className="text-5xl">OUTDOOR</h2>
                <h2 className="text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">AD</span>
                    VERTISING
                </h2>
            </div>

            <div className="flex flex-col space-y-4">
                <h3 className="text-4xl">Analytics</h3>
                <span className="text-lg">Home - Analytics </span>
            </div>
        </div>
    </div>
);
