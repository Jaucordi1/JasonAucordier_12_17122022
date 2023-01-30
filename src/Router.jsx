import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.jsx";
import ErrorPage from "./pages/Error/ErrorPage";
import {api} from "./services/ApiService.js";
import {lazy, Suspense} from "react";

// App pages lazy-loading
const HomePage = lazy(() => import("./pages/Home/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage.jsx"));

// App routes helper
export const ROUTE = {
    HOME: "/",
    LOGIN: "/login",
    DASHBOARD: "/:id",
    PROFILE: "/profile",
    SETTINGS: "/settings",
    COMMUNITY: "/community",
};

/**
 * Component displaying a loader
 * @returns {JSX.Element}
 * @constructor
 */
const LoadingRoute = () => {
    return (
        <div>Chargement de la page…</div>
    );
};

/**
 * Integrating actual react-router route element inside the App layout.
 * Display LoadingComponent in Suspense React API.
 * @returns {JSX.Element}
 * @constructor
 */
const RootRoute = () => {
    return (
        <Layout>
            <Suspense fallback={<LoadingRoute />}>
                <Outlet />
            </Suspense>
        </Layout>
    )
};

/**
 * Integrating error page inside the App layout.
 * Display LoadingComponent in Suspense React API.
 * @returns {JSX.Element}
 * @constructor
 */
const ErrorRoute = () => {
    return (
        <Layout>
            <Suspense fallback={<LoadingRoute />}>
                <ErrorPage />
            </Suspense>
        </Layout>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: ROUTE.HOME,
                element: <LoginPage />,
            },
            {
                path: ROUTE.DASHBOARD,
                element: <HomePage />,
                loader: async ({params}) => {
                    const id = Number(params.id)
                    if (!params.id || isNaN(id)) {
                        throw new Response("Erreur d'ID", {status: 500, statusText: "No ID"})
                    }
                    return api.getUser(id);
                },
            },
            // Add other pages, here is an example, copying the landing page as "/login" route
            {
                path: "/login", // Add "/id" at path end to make it private (for authenticated users)
                element: <LoginPage />,
            },
        ],
    }
]);

/**
 * The fully configured routing component !
 * @returns {JSX.Element}
 * @constructor
 */
const Router = () => <RouterProvider router={router} fallbackElement={<LoadingRoute />} />

export default Router;
