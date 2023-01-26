import Classes from "./Link.module.sass";
import {NavLink, useParams} from "react-router-dom";
import classnames from "classnames";
import {useCallback} from "react";

export function Link(props) {
    const {id = null} = useParams();
    const {to, className = undefined, children = null, ...otherProps} = props;
    const getUrl = useCallback((url) => {
        if (id === null) {
            return url;
        }
        return `/${url}/${id}`;
    }, [id]);

    return (
        <NavLink {...otherProps} to={getUrl(to)} className={classnames(Classes.link, className)}>
            {children}
        </NavLink>
    );
}

Link.propTypes = NavLink.propTypes;
