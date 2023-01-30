import Classes from "./Copyright.module.sass";

function Copyright() {
    return (
        <p className={Classes.copyright}>
            Copyright, SportSee 2020
        </p>
    );
}

Copyright.propTypes = {};

export {Copyright};
