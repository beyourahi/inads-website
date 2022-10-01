export const HomeCounter: React.FC = () => (
    <div className="bg-[url('/home_counter_bg.png')] bg-black bg-cover py-28">
        <div className="container mx-auto px-36 flex justify-center divide-x-2 divide-primary">
            <div className="flex flex-col items-center justify-center space-y-8 w-1/3 py-8">
                <h3 className="font-np font-bold text-5xl text-primary">787</h3>
                <h4 className="font-np font-medium text-lg">IMPRESSIONS/MONTH</h4>
            </div>

            <div className="flex flex-col items-center justify-center space-y-8 w-1/3 py-8">
                <h3 className="font-np font-bold text-5xl text-primary">1628</h3>
                <h4 className="font-np font-medium text-lg">HOURS OF CONTENT PLAYED</h4>
            </div>

            <div className="flex flex-col items-center justify-center space-y-8 w-1/3 py-8">
                <h3 className="font-np font-bold text-5xl text-primary">2415</h3>
                <h4 className="font-np font-medium text-lg">SQ MI OF COVERAGE</h4>
            </div>
        </div>
    </div>
);
