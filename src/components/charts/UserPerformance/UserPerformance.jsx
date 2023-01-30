import Classes from "./UserPerformance.module.sass"
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Text} from "recharts";
import classNames from "classnames";
import PropTypes from "prop-types";
import {useMemo} from "react";

const translatedKinds = {
    "cardio": "Cardio",
    "energy": "Energie",
    "endurance": "Endurance",
    "strength": "Force",
    "speed": "Vitesse",
    "intensity": "Intensité",
};

function UserPerformanceChart(props) {
    const data = useMemo(() => [...props.data.data].reverse(), [props.data.data]);
    console.debug("Data :", data);
    return (
        <ResponsiveContainer width="100%" height="100%" className={classNames(Classes.container, props.className)}>
            <RadarChart data={data} className={Classes.chart} outerRadius="65%"
                        startAngle={30 + 60} endAngle={-330 + 60}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} tick={(props1) => (
                    <Text {...props1} style={{textTransform: "capitalize", fill: "#FFFFFF"}}>
                        {translatedKinds[props.data.kind[props1.payload.value]] || props.data.kind[props1.payload.value]}
                    </Text>
                )} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

UserPerformanceChart.propTypes = {
    className: PropTypes.string,
};

export {UserPerformanceChart};
