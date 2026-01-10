import React from "react";
import Loading from "../../Loading";
import useUserRole from "../../../Hooks/useUserRole";
import AdminDashboard from "../StataticDash/AdminDashboard";
import LibrarianDashboard from "../StataticDash/LibrarianDashboard";
import UserDashboard from "../StataticDash/UserDashboard";

const DashboardRoot = () => {

    const {role, isRoleLoading} = useUserRole()

    if(isRoleLoading) return <Loading></Loading>
    
  return (
    <div>

      {role === "admin" && <AdminDashboard></AdminDashboard> }
      {role === "Librarian" && <LibrarianDashboard></LibrarianDashboard> }
      {role === "customer" && <UserDashboard></UserDashboard> }
    </div>
  );
};

export default DashboardRoot;
