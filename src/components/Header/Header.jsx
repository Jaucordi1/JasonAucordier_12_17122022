import Classes from "./Header.module.sass"
import PropTypes from "prop-types";
import {User} from "../../models/user/User.js";
import classNames from "classnames";

export const Header = ({user, className}) => {
    return (
        <section className={classNames(Classes.heading, className)}>
            <h1 className={Classes.title}>
                {"Bonjour "}
                <span className={Classes.user}>
                    {user.userInfos.firstName}
                </span>
            </h1>
            <p className={Classes.subtitle}>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    );
};

Header.propTypes = {
    user: PropTypes.instanceOf(User).isRequired, className: PropTypes.string,
};
