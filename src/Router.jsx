import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.jsx";
import ErrorPage from "./pages/Error/ErrorPage";
import {api} from "./services/ApiService.js";
import {Suspense, lazy} from "react";

const HomePage = lazy(() => import("./pages/Home/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage.jsx"));

export const ROUTE = {
    HOME: "/",
    LOGIN: "/login",
    DASHBOARD: "/:id",
    PROFILE: "/profile",
    SETTINGS: "/settings",
    COMMUNITY: "/community",
};

const LoadingRoute = () => {
    return (
        <div>Chargement de la page…</div>
    );
};

const RootRoute = () => {
    return (
        <Layout>
            <Suspense fallback={<LoadingRoute />}>
                <Outlet />
            </Suspense>
        </Layout>
    )
};
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

const Router = () => <RouterProvider router={router} fallbackElement={<LoadingRoute />} />

export default Router;
