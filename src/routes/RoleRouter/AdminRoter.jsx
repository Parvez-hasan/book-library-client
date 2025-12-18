import React from 'react';
import useUserRole from '../../Hooks/useUserRole';
import Loading from '../../components/Loading';
import { Navigate } from 'react-router';

const AdminRoter = ({children}) => {

     const [role, isRoleLoading] = useUserRole();

  if (isRoleLoading) return <Loading></Loading>
  if (role === "admin") return children;
  return <Navigate to="/" replace="true" />;

};

export default AdminRoter;