import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface TickerProps {
    className: string;
}

export const Ticker: React.FC<TickerProps> = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp {...rest} start={viewPortEntered ? null : 0}>
            {({ countUpRef }) => (
                <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={isVisible => {
                        if (isVisible) setViewPortEntered(true);
                    }}
                    delayedCall
                >
                    <h4 className={className} ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    );
};