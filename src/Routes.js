import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login=lazy(()=>import("./component/login"))
const AddUser=lazy(()=>import("./admin/adduser"))

const routes= createBrowserRouter([
    {
        path:"/",
        element:(
            <Suspense>
                <Login/>
            </Suspense>
        )
    },
    {
        path:"/adduser",
        element:(
            <Suspense>
             <AddUser/>
            </Suspense>
        )
    }
])

export default routes;