import React from "react";
import Loading from "../../Loading";
import AdminRouter from '..//..//..//routes/RoleRouter/AdminRoter'
import LibrarianRouter from '..//..//..//routes/RoleRouter/LibrarianRouter'
import UserRouter from '..//..//..//routes/RoleRouter/UserRouter'
import useUserRole from "../../../Hooks/useUserRole";

const DashboardRoot = () => {

    const {role, isRoleLoading} = useUserRole()

    if(isRoleLoading) return <Loading></Loading>
  return (
    <div>

      {role === "admin" && <AdminRouter></AdminRouter> }
      {role === "Librarian" && <LibrarianRouter></LibrarianRouter> }
      {role === "customer" && <UserRouter></UserRouter> }
    </div>
  );
};

export default DashboardRoot;
