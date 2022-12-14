import { Ticker } from "./Ticker.jsx";
import { counters } from "data";

export const HomeCounter: React.FC = () => (
    <div className="bg-[url('/home_counter_bg.png')] bg-black bg-cover py-20 md:py-28">
        <div className="container mx-auto xl:px-36 flex flex-col lg:flex-row items-center justify-center divide-y lg:divide-y-0 lg:divide-x-2 divide-primary">
            {counters.map((counter, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center space-y-8 w-[80%] lg:w-1/3 py-8 text-center"
                >
                    <Ticker
                        className="font-np font-bold text-5xl text-primary"
                        end={counter.num}
                        duration={1.5}
                    />
                    <h4 className="font-np font-medium text-lg">{counter.text}</h4>
                </div>
            ))}
        </div>
    </div>
);
