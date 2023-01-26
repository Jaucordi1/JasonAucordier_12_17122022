import Classes from "./SessionsAverageDuration.module.sass"
import {
    CartesianGrid,
    Customized,
    Line,
    LineChart,
    ReferenceArea,
    ResponsiveContainer,
    Text,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import classnames from "classnames";
import PropTypes from "prop-types";
import {useState} from "react";

const SESSION_DAYS = ["L", "M", "M", "J", "V", "S", "D"];

export function SessionsAverageDuration(props) {
    const formatedData = props.data.map(session => ({
        day: SESSION_DAYS[session.day - 1],
        sessionLength: session.sessionLength,
    }));
    const [activeIndex, setActiveIndex] = useState();
    const [activePercent, setActivePercent] = useState(0);

    const onMouseMove = (mouseInfo, event) => {
        setActiveIndex(mouseInfo.activeTooltipIndex);
        const percentage = 100 - (((props.data.length - (mouseInfo.activeTooltipIndex || 0) - 1) * 100) / (props.data.length - 1));
        setActivePercent(percentage);
    }

    return (
        <ResponsiveContainer aspect={1} width="100%" height="100%" className={classnames(Classes.container, props.className)}>
            <LineChart data={props.data} onMouseMove={onMouseMove} className={Classes.chart}>
                <defs>
                    <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, .1)" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="day" style={{fill: "white", opacity: .5}}
                       axisLine={false} tickLine={false} scale="time" mirror
                       tickMargin={8}
                       tickFormatter={(tick) => SESSION_DAYS[tick - 1]} />
                <YAxis hide domain={[-50, 100]} orientation="right" tickLine={false} axisLine={false} tickCount={0} allowDataOverflow={false} />
                <Tooltip labelFormatter={(index, items) => {
                    if (items.length === 0) {
                        return "";
                    }
                    const {payload} = items[0];
                    return payload.sessionLength + " min"
                }}
                         wrapperStyle={{
                             outline: "none",
                             width: "auto",
                             height: "auto",
                             color: "black",
                         }} contentStyle={{
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    width: "auto",
                    height: "auto",
                    color: "inherit",
                    fontSize: "16px",
                    lineHeight: "24px",
                }}
                         cursor={false} itemStyle={{display: "none"}} />
                <Customized component={() => (
                    <Text fontSize={14} lineHeight={14}
                          x={20} y={20}
                          style={{fill: "rgba(255, 255, 255, .5)", whiteSpace: "pre-line"}}
                          textAnchor="start" verticalAnchor="start" maxLines={2}>
                        Durée moyenne des sessions
                    </Text>
                )} />
                <Line type="natural" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2}
                      className={Classes.line} dot={{r: 0}} activeDot={{r: 4, className: Classes.dot}} />
                <ReferenceArea ifOverflow="hidden" fill="rgba(0, 0, 0, .1)" isFront
                               x1={activeIndex !== undefined ? activeIndex + 1 : -1} y1={-50} x2={120} />
            </LineChart>
        </ResponsiveContainer>
    );
}

const AverageSession = PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number,
})
SessionsAverageDuration.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(AverageSession),
};
