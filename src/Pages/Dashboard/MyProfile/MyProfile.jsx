import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";
import { IoIosPhotos } from "react-icons/io";
import { imageUpload } from "../../../utiles";
import { updateProfile } from "firebase/auth";
import Loading from "../../../components/Loading";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [isProfile, setIsProfile] = useState(false);
  const {
    data: userInfo = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-info", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user.email}`);
      return data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const handleProfileUpdate = async (data) => {
    try {
      Swal.fire({
        title: "Updating..",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      let imageURL = image;

      if (data.photo && data.photo.length > 0) {
        imageURL = await imageUpload(data.photo[0]);
      }

      await updateProfile(user, {
        displayName: data.name,
        photoURL: imageURL,
      });

      const updateData = {
        name: data.name,
        image: imageURL,
      };

      const res = await axiosSecure.patch(`/users/${userInfo._id}`, updateData);

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Profile Update",
          text: "Your profile has been updated successfully.",
          confirmButtonColor: "#16a34a",
        });

        refetch();
        reset();
        setIsProfile(false);
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "Nothing was updated!",
          confirmButtonColor: "#16a34a",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  if (isLoading) return <Loading />;

  const { name, email, image, create_date, last_loggedIn, role } = userInfo;

  return (
    <>
      <div className="max-w-lg mx-auto mt-18 p-6 bg-blue-50 shadow-lg dark:text-black rounded-lg border border-blue-400">
        <div className="flex flex-col items-center text-center">
          <img
            src={image}
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-blue-400 shadow"
          />

          <p className="border border-blue-400 rounded-full py-1 px-3 bg-blue-200 mt-1 text-gray-700 font-semibold">
            {role}
          </p>

          <h2 className="text-2xl font-semibold mt-3">{name}</h2>
          <p className="text-gray-600">{email}</p>

          <div className="mt-5 w-full text-left space-y-2">
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {/* {new Date(create_date).toLocaleString()} */}
              {create_date ? new Date(create_date).toLocaleString() : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Last Login:</span>{" "}
              {new Date(last_loggedIn).toLocaleString()}
            </p>
          </div>
          {/* <button
            onClick={() => setIsProfile(true)}
            className={`py-2 px-4 w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md cursor-pointer ${
              isProfile ? "hidden" : "block"
            }`}
          >
            Update Profile
          </button> */}

          <button
            onClick={() => setIsProfile(true)}
            className={`py-2 px-4 cursor-pointer bg-gradient-to-b from-pink-500 to-pink-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] mt-2 rounded-xl border-[1px] border-slate-500 text-white font-medium group ${
              isProfile ? "hidden" : "block"
            }`}
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Update Profile
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Update Profile
              </p>
            </div>
          </button>
        </div>
      </div>

      {isProfile && (
        <div className="max-w-lg mx-auto mt-8 border border-blue-400 p-3 rounded-md">
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-blue-700 font-semibold mb-1"
              >
                Full Name
              </label>
              <div className="flex items-center border border-blue-300 rounded p-2 focus-within:ring-2 focus-within:ring-blue-400">
                <FaUser className="text-blue-500 mr-2" />
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={userInfo?.name}
                  id="name"
                  placeholder=" Name"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label
                htmlFor="photo"
                className="text-blue-700 font-semibold mb-1"
              >
                Your Photo
              </label>
              <div className="flex items-center border border-blue-300 rounded p-2 focus-within:ring-2 focus-within:ring-blue-400">
                <IoIosPhotos className="text-blue-500 mr-2" />
                <input
                  {...register("photo")}
                  type="file"
                  id="photo"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

          
            <button className="w-full mt-3 bg-gradient-to-b from-pink-500 to-pink-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-2 rounded-xl border border-slate-500 text-white font-medium group">
              <div className="relative h-7 overflow-hidden flex items-center justify-center">
                <p className="absolute inset-0 flex items-center justify-center transform group-hover:-translate-y-7 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Update Profile
                </p>
                <p className="absolute inset-0 flex items-center justify-center transform translate-y-7 group-hover:translate-y-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Update Profile
                </p>
              </div>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default MyProfile;
