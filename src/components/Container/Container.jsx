import Classes from "./Container.module.sass";
import classnames from "classnames";
import PropTypes from "prop-types";

function Container(props) {
    return (
        <div className={classnames(Classes.container, props.className)}>
            {props.children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired, className: PropTypes.string,
};

export {Container};
