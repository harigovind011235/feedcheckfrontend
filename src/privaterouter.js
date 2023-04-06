import React from "react"
import { Navigate } from "react-router-dom";

function PrivateRouter({children}){
    const cookieString = document.cookie;
    const token = cookieString.split('; ')
    .find(row => row.startsWith('token'))
    ?.split('=')[1];
   
    return(
        <>
        {token ? children : <Navigate to = {"/"}/>}
        </>
    )
}
export default PrivateRouter