import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from "@mui/material";

const Admins = process.env.REACT_APP_ADMIN_USERS;

const PrivateRoutes = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (!isLoading && isAuthenticated) {
        return (
            Admins.slice(",").includes(user.email)? <Outlet/> : <Navigate to={"/home"}/>
        )
    } else if (!isLoading) {
        return <Navigate to={"/home"}/>
    } else {
        return <CircularProgress/>
    }
}

export default PrivateRoutes;