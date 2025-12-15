import { Navigate } from "react-router";
import useUserRole from "../Hooks/useUserRole";
import Loading from "../components/Loading";

const AdminRoute = ({ children }) => {
  const { role, roleLoading } = useUserRole();

  if (roleLoading) return <Loading></Loading>;
  if (role !== "admin") return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
