import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const BookModal = ({ isOpen, closeModal, bookId, refetch }) => {

   const [updatedStatus, setUpdatedStatus] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleUpdate = async () => {

    if (!updatedStatus) {
      return Swal.fire("Error!", " select a status", "error");
    }

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update book status?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await axiosSecure.patch(`/books/${bookId}`, {
        status: updatedStatus,
      });

      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Book status updated successfully.", "success");
        refetch();
        closeModal();
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
      console.error(error);
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  items-center justify-center p-4">
          <DialogPanel className=" w-full max-w-md rounded-xl p-6 shadow-xl
    bg-black text-gray-800
    dark:bg-gray-900 dark:text-gray-100">
            <DialogTitle className="text-lg font-semibold ">
              Update Book Status
            </DialogTitle>

            <div className="mt-4 dark:text-gray-800">
              <select
                value={updatedStatus}
                onChange={(e) => setUpdatedStatus(e.target.value)}
                className="  w-full my-3 border rounded-xl px-3 py-3
    bg-white text-gray-800 border-gray-300
    dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
              >
                <option value="">Select Status</option>
                <option value="published">Published</option>
                <option value="unpublished">Unpublished</option>
              </select>
            </div>

            <div className="flex mt-2 justify-around">
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Update
              </button>

              <button
                onClick={closeModal}
                className="bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default BookModal;