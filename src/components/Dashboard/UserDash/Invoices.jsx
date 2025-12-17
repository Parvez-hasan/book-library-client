import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Invoices = () => {
    
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/payments?email=${user.email}`)
      .then(res => setPayments(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Invoices</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {payments.map(p => (
            <tr key={p._id}>
              <td>{p.paymentId}</td>
              <td>${p.amount}</td>
              <td>{new Date(p.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;