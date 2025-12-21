import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const BookOrderModal = ({ isOpen, closeModal, book }) => {

   const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const handleOrder = async (data) => {
    const { name, email, number, address } = data;
    if (!user) {
      return navigate("/login");
    }
    const bookOrderData = {
      image: book.image,
      name: book.bookName,
      authorName: book.authorName,
      authorEmail: book.authorEmail,
      price: book.price,
      customerName: name,
      customerEmail: email,
      customerPhonNumber: number,
      customerAddress: address,
      quantity: 1,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to place this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!",
    }).then(async (result) => {

      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.post(`/orders`, bookOrderData);

          if (res.data?.insertedId) {
            Swal.fire({
              title: "Order Placed!",
              text: "Your order has been success.",
              icon: "success",
            });
          }
          navigate("/dashboard/my-orders");
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to place order.",
            icon: "error",
          });
        }
      }
    });
  };


  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        
      <div className="fixed inset-0 flex items-center justify-center p-6 bg-black/30">
        <DialogPanel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
          <DialogTitle className="text-lg font-semibold">
            Book Status Update
          </DialogTitle>

          <form
            onSubmit={handleSubmit(handleOrder)}
            className="grid gird-cols-2 gap-4"
          >
            <input
              value={user?.displayName}
              type="text"
              readOnly
              {...register("name", { required: true })}
              className="border border-gray-200 py-2 outline-none px-3 bg-gray-50 "
            />

            <input
              value={user?.email}
              type="email"
              readOnly
              {...register("email", { required: true })}
              className="border border-gray-200 py-2 outline-none px-3 bg-gray-50 "
            />
            <input
              type="number"
              {...register("number", { required: true })}
              className="border border-gray-300 py-2  outline-none px-3"
              placeholder=" Your Phone Number"
            />
            <input
              type="text"
              {...register("address", { required: true })}
              className="border border-gray-300 py-2  outline-none px-3"
              placeholder=" Your Address"
            />
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Place Order
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default BookOrderModal;