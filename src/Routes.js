import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./privaterouter";

const Login = lazy(() => import("./component/login"))
const AddUser = lazy(() => import("./admin/adduser"))
const Feedcheck = lazy(() => import("./component/feedcheck"))

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense>
                <Login />
            </Suspense>
        )
    },
    {
        path: "/adduser",
        element: (
            <Suspense>
                <PrivateRouter>
                    <AddUser />
                </PrivateRouter>
            </Suspense>
        )
    },
    {
        path: "/feedcheck",
        element: (
            <Suspense>
                <PrivateRouter>
                    <Feedcheck />
                </PrivateRouter>
            </Suspense>
        )
    }
])

export default routes;