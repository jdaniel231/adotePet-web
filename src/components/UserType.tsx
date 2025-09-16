
import React from 'react';
import { Link } from 'react-router-dom';

const UserType: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Você quer:
        </h2>
        <div className="flex flex-col gap-4">
          <Link to="/login/adopter">
            <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
              Adotar um Pet
            </button>
          </Link>
          <Link to="/login/donor">
            <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-lg">
              Doar um Pet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserType;
