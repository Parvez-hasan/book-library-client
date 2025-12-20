import React from 'react';
import { Link } from 'react-router';

const Button = ({links, title}) => {
   return (
    <div>
      <button className="py-2 px-4 bg-blue-600 text-white rounded-sm">
        <Link to={`/${links}`}>{title}</Link>
      </button>
    </div>
  );
};

export default Button;