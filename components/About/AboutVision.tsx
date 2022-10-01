export const AboutVision: React.FC = () => (
    <div className="flex bg-[#0C0D0E]">
        <div className="w-[45%] bg-[url('/specs.png')] bg-cover"></div>
        <div className="space-y-16 p-28 w-[55%]">
            <h1 className="text-6xl font-np font-bold">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Vision
            </h1>
            <p className="text-2xl font-ps font-normal break-all">
                Our Vision is to build an overwhelming advertising agency that will dominate the
                advertising market in Qatar.
            </p>
        </div>
    </div>
);
