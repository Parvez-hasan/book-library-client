import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    
    baseURL: 'https://book-library-server-tau.vercel.app/' ,

    withCredentials: true,
})
const useAxiosSecure = () => {

      const { user, loading, logoutUserFunc } = useAuth();
      const navigate = useNavigate();

        useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
      }
    );

     const responsiveInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          logoutUserFunc()
            .then(() => {
              console.log("Logout successfuly");
            })
            .catch((err) => console.log(err));
          navigate("/login");
        }
        return Promise.reject(err);
      }
    );

      return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responsiveInterceptor);
    };
  }, [user, loading, navigate, logoutUserFunc]);

  return axiosSecure;
};


export default useAxiosSecure;