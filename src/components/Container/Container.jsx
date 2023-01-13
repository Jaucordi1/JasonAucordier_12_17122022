import Classes from "./Container.module.sass"
import PropTypes from "prop-types";
import classnames from "classnames";

export function Container(props) {
    return (
        <div className={classnames(Classes.container, props.className)}>
            {props.children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
