import Classes from "./UserScore.module.sass"
import {Customized, Label, Pie, PieChart, ResponsiveContainer, Text} from "recharts";
import classnames from "classnames";
import PropTypes from "prop-types";
import {useMemo} from "react";

const CustomLabel = ({viewBox, todayScore = 0}) => {
    const {cx, cy} = viewBox;

    return (
        <svg className="recharts-text recharts-label"
             textAnchor="middle"
             dominantBaseline="central" style={{outline: "none"}}>
            <text x={cx} y={cy} style={{outline: "none"}}>
                <tspan x={cx} dy="-10px" alignmentBaseline="middle" fontSize="24px"
                       fill="#282D30" fontWeight={700} style={{outline: "none"}}>
                    {todayScore}%
                </tspan>
                <tspan x={cx} dy="25px" fontSize="14px" fill="#74798C" fontWeight={600}
                       style={{outline: "none", fill: "#74798C"}}>
                    de votre
                </tspan>
                <tspan x={cx} dy="25px" fontSize="14px" fill="#74798C" fontWeight={600}
                       style={{outline: "none", fill: "#74798C"}}>
                    objectif
                </tspan>
            </text>
        </svg>
    );
};

function UserScoreChart(props) {
    const data = useMemo(() => [{
        name: "Score", value: props.data.todayScore, // value: 1,
    }, {
        name: "no value", value: 1 - props.data.todayScore, // value: 1 - 1,
        fill: "transparent",
    }], [props.data]);
    const bgData = [{
        name: "Score", value: 1
    },];

    return (
        <ResponsiveContainer width="100%" height="100%" className={classnames(Classes.container, props.className)}>
            <PieChart className={Classes.chart}>
                <Customized component={(_props) => (
                    <Text fontSize={14} lineHeight={14}
                          x={20} y={20}
                          style={{fill: "#20253A", fontWeight: 600}}
                          textAnchor="start" verticalAnchor="start">
                        Score
                    </Text>
                )} />
                <Pie data={bgData} nameKey="name" dataKey="value" className={Classes.pie}
                     cx="50%" cy="50%" innerRadius="0%" outerRadius="70%"
                     fill="#FFFFFF" isAnimationActive={false} maxRadius={1}
                />
                <Pie data={data} nameKey="name" dataKey="value" className={Classes.pie}
                     cx="50%" cy="50%" fill="#FF0000" blendStroke
                     innerRadius="70%" outerRadius="77%" cornerRadius="50%" maxRadius={1}
                     startAngle={180 + 30} endAngle={0 - 30}>
                    <Label content={<CustomLabel todayScore={data[0].value * 100} />} position="center"
                           style={{outline: "none"}} />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

UserScoreChart.propTypes = {
    className: PropTypes.string,
};

export {UserScoreChart};
