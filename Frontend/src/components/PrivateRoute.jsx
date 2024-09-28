import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function PrivateRoute({allowrole}) {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if(!token){
        return <Navigate to='/login' />
    }
  
 if(!allowrole.includes(role)){
    return <Navigate to="/login"/>
 }
 return  (
    <>
    {/* <Navbar/> */}
    <Outlet/></>
    
 )
}
export default PrivateRoute