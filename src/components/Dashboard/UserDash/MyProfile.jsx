import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <img
        src={user.photoURL}
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h2 className="text-xl text-center mt-4 font-bold">
        {user.displayName}
      </h2>

      <p className="text-center text-gray-500">
        {user.email}
      </p>
    </div>
  );
};

export default MyProfile;
