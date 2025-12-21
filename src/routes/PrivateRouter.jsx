import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRouter = ({children}) => {


  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading />;

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location.pathname }} replace />;

};

export default PrivateRouter;
