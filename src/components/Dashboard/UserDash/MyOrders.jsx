import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const MyOrders = () => {
   const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // load orders
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/orders/${user.email}`)
        .then(res => setOrders(res.data));
    }
  }, [user, axiosSecure]);

  // cancel order
  const handleCancel = async () => {
    const res = await axiosSecure.patch(`/orders/cancel/${selectedId}`);
    if (res.data.modifiedCount > 0) {
      toast.success("Order cancelled");
      setOrders(prev =>
        prev.map(o =>
          o._id === selectedId
            ? { ...o, orderStatus: "cancelled" }
            : o
        )
      );
      setOpen(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {/* DaisyUI Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Date</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.bookTitle}</td>
                <td>
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td>
                  <span className="badge badge-outline">
                    {order.orderStatus}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      order.paymentStatus === "paid"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="flex gap-2">

                  {/* Cancel */}
                  {order.orderStatus === "pending" && (
                    <button
                      onClick={() => {
                        setSelectedId(order._id);
                        setOpen(true);
                      }}
                      className="btn btn-sm btn-error"
                    >
                      Cancel
                    </button>
                  )}

                  {/* Pay Now */}
                  {order.orderStatus === "pending" &&
                    order.paymentStatus === "unpaid" && (
                      <button className="btn btn-sm btn-primary">
                        Pay Now
                      </button>
                    )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Headless UI Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" />
        <div className="fixed inset-0 flex items-center justify-center">
          <DialogPanel className="bg-white p-6 rounded-lg max-w-sm">
            <DialogTitle className="text-lg font-bold">
              Cancel Order?
            </DialogTitle>
            <p className="mt-2 text-sm">
              Are you sure you want to cancel this order?
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="btn btn-sm"
              >
                No
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-sm btn-error"
              >
                Yes, Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default MyOrders;