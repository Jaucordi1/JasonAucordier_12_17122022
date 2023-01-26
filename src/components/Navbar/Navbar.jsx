import Classes from "./Navbar.module.sass"
import {Container} from "../Container/Container.jsx";
import {Link} from "../Link/Link.jsx";

export function Navbar() {
    return (
        <div className={Classes.navbar}>
            <img src="/logo.svg" alt="Logo" height="100%" />
            <Container className={Classes.links}>
                <Link to="/">Accueil</Link>
                <Link to="/profile">Profil</Link>
                <Link to="/settings">Réglage</Link>
                <Link to="/community">Communauté</Link>
            </Container>
        </div>
    );
}
