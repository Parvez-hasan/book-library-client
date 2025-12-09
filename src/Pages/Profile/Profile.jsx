import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {

  const { user, updateUser, logOut } = useAuth();
  
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    if (!name && !photo) {
      toast.error("Please enter name or photo URL!");
      return;
    }
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile Updated Successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile!");
      });
  };

/// logout
   const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Your account logOut successful");

      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  const formatLocalTime = (utcString) => {
  if (!utcString) return "N/A";
  const date = new Date(utcString);
  return date.toLocaleString("en-BD", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


  return (
    <div className="max-w-2xl mx-auto mt-5 bg-green-100 shadow-lg rounded-2xl p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
        My Profile
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={user?.photoURL || "https://via.placeholder.com/88" }
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-pink-400"
        />
        <h3 className="text-lg font-semibold dark:text-gray-900">{user?.displayName || "User"}</h3>
        <p className="text-gray-500">{user?.email}</p>
        <p className="text-sm text-gray-600">
          Last Login: {formatLocalTime(user?.metadata?.lastSignInTime)}
         
        </p>
      </div>

      {/* Edit Profile */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">
          Edit Profile
        </h3>
        <div className="space-y-3 dark:text-gray-900">
          <input
            type="text"
            placeholder="Enter new name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-pink-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-pink-400"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Update Profile
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleLogOut}
          className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg text-white font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;