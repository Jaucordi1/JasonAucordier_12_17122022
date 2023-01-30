import Classes from "./Layout.module.sass";
import {Container} from "../Container/Container.jsx";
import {Sidebar} from "../Sidebar/Sidebar.jsx";
import {Navbar} from "../Navbar/Navbar.jsx";
import PropTypes from "prop-types";

function Layout(props) {
    return (
        <div className={Classes.layout}>
            <Navbar />
            <div className={Classes.page}>
                <Sidebar />
                <Container className={Classes.content}>
                    {props.children}
                </Container>
            </div>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export {Layout};
