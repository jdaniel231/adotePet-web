import React from 'react';
import { Link } from 'react-router-dom';

interface Pet {
  image: string;
  name: string;
  breed: string;
}

const PetCard: React.FC<{ pet: Pet }> = ({ pet }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center transition-transform hover:-translate-y-1">
      <img src={`https://picsum.photos/seed/${pet.name}/320/240`} alt={pet.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl mb-2">{pet.name}</h3>
      <p className="mb-4">Raça: {pet.breed}</p>
      <Link to="/login" className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer transition-colors hover:bg-blue-700 no-underline">Adotar</Link>
    </div>
  );
};

export default PetCard;
