import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading';

const WisList = () => {

 const axiosSecure = useAxiosSecure();

  const {
    data: wishLists = [],
    isLoading,
    refetch,
  } = useQuery({

    queryKey: ["wishLists"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish-list`);
      return res.data;
    },
  });


  const handleDeleteWishLi = async (id) => {

    //  delete
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {

      try {
        const res = await axiosSecure.delete(`/wish-list/${id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Delete!",
            text: "Book removed to wishlist.",
            icon: "success",
            confirmButtonText: "OK",
          });

          refetch();
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  if (isLoading) return <Loading />;


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-5 text-center text-blue-500">
        My Wishlist
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className="bg-blue-200">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Owner Email</th>
              <th>Added Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {wishLists.map((item, index) => (
              <tr key={item._id} className="hover:bg-blue-100 ">
                <td>{index + 1}</td>

                <td>
                  <img
                    src={item.image}
                    alt={item.bookName}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>

                <td className="font-medium text-nowrap">{item.bookName}</td>

                <td className=" text-nowrap">{item.authorName}</td>

                <td className=" text-nowrap">{item.authorEmail}</td>

                <td className=" text-nowrap">
                  {item.wishList_date
                    ? new Date(item.wishList_date).toLocaleDateString()
                    : " "}
                </td>
                <td className=" text-nowrap">
                  <button
                    onClick={() => handleDeleteWishLi(item._id)}
                    className="py-1 px-2 rounded-sm bg-pink-600 text-white cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WisList;