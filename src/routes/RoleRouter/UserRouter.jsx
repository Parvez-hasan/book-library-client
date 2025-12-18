import React from 'react';
import useUserRole from '../../Hooks/useUserRole';
import Loading from '../../components/Loading';
import { Navigate } from 'react-router';

const UserRouter = ({children}) => {

   const [role, isRoleLoading] = useUserRole();

  if (isRoleLoading) return <Loading />;
  if (role === "customer") return children;
  return <Navigate to="/" replace="true" />;

};

export default UserRouter;