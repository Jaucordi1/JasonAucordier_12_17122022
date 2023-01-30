import Classes from "./LoginPage.module.sass"
import {NavLink} from "react-router-dom";

const USERS = [12, 18];

const LoginPage = () => {
    return (
        <main className={Classes.container}>
            {USERS.map(userID => (
                <NavLink key={userID} to={`/${userID}`} className={Classes.user}>
                    {userID}
                </NavLink>
            ))}
        </main>
    );
}
LoginPage.propTypes = {};

export default LoginPage;
