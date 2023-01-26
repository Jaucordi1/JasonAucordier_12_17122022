import Classes from "./Sidebar.module.sass"
import {Copyright} from "../Copyright/Copyright.jsx";
import {NavLink} from "react-router-dom";

export function Sidebar() {
    return (
        <div className={Classes.sidebar}>
            <div className={Classes.links}>
                <NavLink to="/meditate">
                    <img src="/icons/meditation.svg" alt="Méditation" className={Classes.icon} />
                </NavLink>
                <NavLink to="/swim">
                    <img src="/icons/swimming.svg" alt="Natation" className={Classes.icon} />
                </NavLink>
                <NavLink to="/ride">
                    <img src="/icons/ride.svg" alt="Vélo" className={Classes.icon} />
                </NavLink>
                <NavLink to="/dumbbells">
                    <img src="/icons/dumbbells.svg" alt="Haltères" className={Classes.icon} />
                </NavLink>
            </div>
            <Copyright />
        </div>
    );
}
