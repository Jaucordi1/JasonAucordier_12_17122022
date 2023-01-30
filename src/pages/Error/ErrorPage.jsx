import Classes from "./ErrorPage.module.sass"
import {useAsyncError, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const loaderError = useAsyncError();

    console.debug({
        error, loaderError
    });

    return (
        <div className={Classes.page}>
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>
            <pre className={Classes.error}>
                {JSON.stringify(error, undefined, 4)}
            </pre>
        </div>
    );
};
ErrorPage.propTypes = {};

export default ErrorPage;
