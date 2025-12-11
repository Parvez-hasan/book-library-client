import React from 'react';

const Features = () => {
   return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="p-4 border rounded">
          <h4 className="font-medium">Secure Payments</h4>
          <p className="text-sm text-gray-500 mt-2">Stripe integration for secure transactions.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-medium">Role Based Dashboard</h4>
          <p className="text-sm text-gray-500 mt-2">User, Librarian and Admin roles with proper access control.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-medium">Responsive UI</h4>
          <p className="text-sm text-gray-500 mt-2">Works beautifully on mobile, tablet and desktop.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;