import Classes from "./DailyActivity.module.sass"
import {
    Bar,
    BarChart,
    CartesianGrid,
    Customized,
    Legend,
    ResponsiveContainer,
    Text,
    Tooltip,
    XAxis,
    YAxis
} from "recharts"
import {UserActivity} from "../../../models/userActivity/UserActivity.js";
import classnames from "classnames";
import PropTypes from "prop-types";

function shortActivityName(name) {
    switch (name) {
        case "calories":
            return "kCal";
        case "kilogram":
            return "kg";
        default:
            return name;
    }
}

function DailyActivity(props) {
    return (
        <ResponsiveContainer width="100%" height="100%" className={classnames(Classes.container, props.className)}>
            <BarChart data={props.data.sessions} barGap={8} margin={{left: 30, right: 0, top: 20, bottom: 0}}>
                <Customized component={(_props) => (
                    <Text fontSize={14} lineHeight={14} x={20} y={30}
                          style={{fill: "#20253A", fontWeight: 600}}
                          textAnchor="start" verticalAnchor="end">
                        Activité quotidienne
                    </Text>
                )} />
                <Legend align="right" verticalAlign="top" layout="horizontal" iconType="circle" iconSize={8}
                        wrapperStyle={{fontSize: "13px", lineHeight: "13px"}}
                        height={48}
                        formatter={value => (
                            <span style={{
                                display: "inline-block",
                                color: "black",
                                marginLeft: "5px",
                                marginRight: "20px",
                                transform: "translateY(10%)",
                            }}>
                                {value === "calories" ? "Calories brûlées (kCal)" : "Poids (kg)"}
                            </span>
                        )} />
                <CartesianGrid vertical={false} strokeDasharray="2 3" />
                <XAxis dataKey="day" axisLine={{stroke: "#DEDEDE"}} tickLine={false}
                       height={48}
                       tickFormatter={(value) => new Date(value).getDate()} tickMargin={15} />
                <YAxis orientation="right" axisLine={false} tickLine={false} tickCount={3}
                       width={90} tickMargin={30} allowDataOverflow={false} />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                <Tooltip labelStyle={{display: "none"}}
                         separator=""
                         formatter={(value, name, _item) => {
                             return [`${value}${shortActivityName(name)}`, ""];
                         }}
                         wrapperStyle={{
                             outline: "none",
                             width: "auto",
                             height: "auto",
                             color: "black",
                         }}
                         contentStyle={{
                             paddingLeft: "8px",
                             paddingRight: "8px",
                             width: "auto",
                             height: "auto",
                             backgroundColor: "#E60000",
                             borderColor: "#E60000",
                             color: "black",
                             fontSize: "16px",
                             lineHeight: "24px",
                         }}
                         itemStyle={{
                             color: "white",
                             textAlign: "center",
                         }}
                         cursor={{fill: "#C4C4C480"}} />
            </BarChart>
        </ResponsiveContainer>
    );
}

DailyActivity.propTypes = {
    className: PropTypes.string,
    data: PropTypes.instanceOf(UserActivity),
};

export {DailyActivity};
