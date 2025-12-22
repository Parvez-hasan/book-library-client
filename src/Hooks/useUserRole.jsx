
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
    
  // const [role, setRole] = useState(null);
  // const [roleLoading, setRoleLoading] = useState(true);

 const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

   const { data: role = [], isLoading: isRoleLoading } = useQuery({
    
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role?email=${user.email}`);
    //  console.log(res);
      
      return res.data.role;
    },
  });

  return { role, isRoleLoading };
};

export default useUserRole;
