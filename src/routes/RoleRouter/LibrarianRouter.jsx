import React from 'react';
import useUserRole from '../../Hooks/useUserRole';
import Loading from '../../components/Loading';
import { Navigate } from 'react-router';

const LibrarianRouter = ({children}) => {

    const {role, isRoleLoading} = useUserRole();

  if (isRoleLoading) return <Loading />;

  if (role === "Librarian") return children;
  return <Navigate to="/" replace="true" />;
  
};

export default LibrarianRouter;