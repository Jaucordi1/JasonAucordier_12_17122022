import Classes from "./ErrorPage.module.sass"
import {useAsyncError, useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const loaderError = useAsyncError();

    console.debug({
        error, loaderError
    });

    return (
        <div className={Classes.page}>
            <pre className={Classes.error}>
                {JSON.stringify(error, undefined, 4)}
            </pre>
        </div>
    );
};

export default Error;
