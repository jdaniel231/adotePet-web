import React from 'react';
import { Link } from 'react-router-dom';
import petImage from '../assets/ChatGPT Image 15 de set. de 2025, 15_43_48.png';

const PetCard: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center transition-transform hover:-translate-y-1">
      <img src={petImage} alt="Pet" className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl mb-2">Max</h3>
      <p className="mb-4">Raça: Golden Retriever</p>
      <Link to="/login" className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer transition-colors hover:bg-blue-700 no-underline">Adotar</Link>
    </div>
  );
};

export default PetCard;