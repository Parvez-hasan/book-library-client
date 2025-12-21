import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const OrderTableRow = ({ order, refetch }) => {

    const axiosSecure = useAxiosSecure();
  const {
    _id,
    name,
    authorName,
    customerName,
    customerEmail,
    price,
    status,
    paymentStatus,
    order_date,
    quantity,
    image,
    description,
  } = order;

  const handleCencel = async (order) => {

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No",
    });

    if (!confirm.isConfirmed) return;

    const cancelledStatus = { status: "cancelled" };

    try {
      const res = await axiosSecure.patch(
        `/order-cancelled/${order._id}`,
        cancelledStatus
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Cancelled!",
          text: "Order has been cancelled successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }

      return res.data;
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };


  const handlePayment = async (payment) => {
    const paymentInfo = {
      name: payment.name,
      price: payment.price,
      customerEmail: payment.customerEmail,
      _id: payment._id,
      authorName: payment.authorName,
    };
    const res = await axiosSecure.post(`/create-checkout-session`, paymentInfo);
    return (window.location.href = res.data.url);
  };

  return (
    <tr className="bg-blue-50 border-b border-gray-300 text-gray-700">
      {/* Customer Name */}
      <td className="py-3 px-4 text-gray-700 text-center text-sm text-nowrap">
        {customerName}
      </td>

      {/* Book Name */}
      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        {name}
      </td>

      {/* Author Name */}
      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        {authorName}
      </td>

      {/* Customer Email */}
      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        {customerEmail}
      </td>


      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        <span
          className={`${
            paymentStatus === "unpaid"
              ? "text-pink-500 bg-pink-100 "
              : "text-green-500 bg-green-100  "
          } py-1 px-3 rounded-full`}
        >
          {" "}
          {paymentStatus}
        </span>
      </td>

      {/* Status */}
      <td
        className={`py-3 px-4  text-gray-700 text-center text-sm text-nowrap `}
      >
        <span
          className={`${
            status === "pending" || status === "cancelled"
              ? "text-pink-500 bg-pink-100 "
              : "text-green-500 bg-green-100  "
          } py-1 px-3 rounded-full`}
        >
          {" "}
          {status}
        </span>
      </td>

      {/* Price */}
      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        ${price}
      </td>
      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        {quantity}
      </td>

      {/* Order Date */}
      <td className="py-3 px-4  text-gray-700 text-center text-sm text-nowrap">
        {new Date(order_date).toDateString()}
      </td>

      {/* Actions */}
      <td className="py-3 px-4  text-center text-sm text-nowrap">
        <button
          disabled={paymentStatus === "paid" || status === "cancelled"}
          onClick={() => handlePayment(order)}
          className="bg-green-500 text-white py-1 px-4 rounded-sm cursor-pointer text-nowrap"
        >
          Pay
        </button>

        <button
          onClick={() => handleCencel(order)}
          disabled={paymentStatus === "paid" || status === "cancelled"}
          className="bg-pink-500 text-white py-1 px-4 rounded-sm cursor-pointer ml-2"
        >
          Cancelled
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;