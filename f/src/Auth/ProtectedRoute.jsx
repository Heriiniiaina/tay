import React from 'react'
import {useNavigate,Navigate,Outlet} from "react-router-dom"
export default function ProtectedRoute({role}) {
    
    const user = JSON.parse(sessionStorage.getItem("user"))
    console.log(user)
    if(!user || user.role != role)
        return <Navigate to={"/"} replace/>
  
    return <Outlet/>
  
}
