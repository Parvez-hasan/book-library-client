import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (!user?.email || loading) return;

    axiosSecure
      .get(`/users/role/${user.email}`)
      .then((res) => {
        setRole(res.data.role);
        setRoleLoading(false);
      })
      .catch(() => {
        setRole("user");
        setRoleLoading(false);
      });
  }, [user, loading, axiosSecure]);

  return { role, roleLoading };
};

export default useUserRole;
