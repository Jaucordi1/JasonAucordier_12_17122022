import Classes from "./UserKeyDataCard.module.sass"
import {UserKeyData} from "../../models/user/UserKeyData.js";
import PropTypes from "prop-types";
import classnames from "classnames";

export const UserKeyDataCard = (props) => {
    /**
     * @type {number} value
     */
    const value = props.data[props.displayKey];

    return (
        <article className={classnames(Classes.container, props.className)}>
            <figure className={Classes.icon}>
                <img src={`/icons/${props.displayKey}.svg`} alt="" />
            </figure>
            <div className={Classes.data}>
                <strong className={Classes.title}>
                    {`${value.toLocaleString("en")}${props.unit}`}
                </strong>
                <span className={Classes.subtitle}>
                    {props.label}
                </span>
            </div>
        </article>
    );
};

UserKeyDataCard.propTypes = {
    className: PropTypes.string,
    data: PropTypes.instanceOf(UserKeyData).isRequired,
    displayKey: PropTypes.oneOf(["calorieCount", "proteinCount", "carbohydrateCount", "lipidCount"]).isRequired,
    unit: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
