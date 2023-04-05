import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


const Login=lazy(()=>import("./component/login"))
const FeedCheck=lazy(()=>import("./component/feedcheck"))
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
        path:"/feedcheck",
        element:(
            <Suspense>
                <FeedCheck/>
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