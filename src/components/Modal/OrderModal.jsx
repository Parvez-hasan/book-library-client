import React, { Fragment } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';

const OrderModal = ({isOpen, closeModal, book, user}) => {

   const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const orderData = {
      bookId: book._id,
      bookTitle: book.title,
      price: book.price,
      userName: user.displayName,
      userEmail: user.email,
      phone: data.phone,
      address: data.address,
      orderStatus: "pending",
      paymentStatus: "unpaid",
      createdAt: new Date(),
    };

    const res = await axiosSecure.post("/orders", orderData);

    if (res.data.insertedId) {
      toast.success("Order placed successfully!");
      reset();
      closeModal();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>

      <Dialog as="div" className="relative z-50" onClose={closeModal}>

        {/* Background  */}

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

              <DialogTitle className="text-xl font-bold text-gray-800 mb-4">
                Order Book
              </DialogTitle>

              {/* Book Info */}
              <div className="mb-4 border rounded p-3 bg-gray-50">
                <p className="font-semibold">{book.title}</p>
                <p className="text-sm text-gray-500">Price: ৳ {book.price}</p>
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                <input
                  value={user.displayName}
                  readOnly
                  className="w-full px-3 py-2 border rounded bg-gray-100"
                />

                <input
                  value={user.email}
                  readOnly
                  className="w-full px-3 py-2 border rounded bg-gray-100"
                />

                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border rounded"
                />

                <textarea
                  {...register("address", { required: true })}
                  placeholder="Delivery Address"
                  className="w-full px-3 py-2 border rounded"
                />

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-1/2 py-2 rounded border"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-1/2 py-2 rounded bg-pink-600 text-white hover:bg-pink-700"
                  >
                    Place Order
                  </button>
                </div>

              </form>
            </DialogPanel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OrderModal;