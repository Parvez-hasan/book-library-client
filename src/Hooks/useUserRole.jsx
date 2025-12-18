
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
    
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // const [role, setRole] = useState(null);
  // const [roleLoading, setRoleLoading] = useState(true);

 const { data: role = [], isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role?email=${user.email}`);
      return res.data.role;
    },
  });

  // useEffect(() => {
  //   if (!user?.email || loading) return;

  //   axiosSecure
  //     .get(`/users/role/${user.email}`)
  //     .then((res) => {
  //       setRole(res.data.role);
  //       setRoleLoading(false);
  //     })
  //     .catch(() => {
  //       setRole("user");
  //       setRoleLoading(false);
  //     });
  // }, [user, loading, axiosSecure]);

  return { role, isRoleLoading };
};

export default useUserRole;
