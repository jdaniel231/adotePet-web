import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard';
import petImage from '../assets/ChatGPT Image 15 de set. de 2025, 15_43_48.png';

const Public: React.FC = () => {
  const pets = [
    { image: petImage, name: 'Max', breed: 'Golden Retriever' },
    { image: petImage, name: 'Bella', breed: 'Labrador' },
    { image: petImage, name: 'Charlie', breed: 'Beagle' },
    { image: petImage, name: 'Lucy', breed: 'Poodle' },
    { image: petImage, name: 'Cooper', breed: 'Bulldog' },
    { image: petImage, name: 'Luna', breed: 'Siberian Husky' },
    { image: petImage, name: 'Rocky', breed: 'German Shepherd' },
    { image: petImage, name: 'Daisy', breed: 'Rottweiler' },
    { image: petImage, name: 'Milo', breed: 'Shih Tzu' },
    { image: petImage, name: 'Sadie', breed: 'Chihuahua' },
    { image: petImage, name: 'Toby', breed: 'Boxer' },
    { image: petImage, name: 'Zoe', breed: 'Doberman' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 6;

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  const totalPages = Math.ceil(pets.length / petsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${petImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-6xl mb-4">Adote um Amigo</h1>
          <p className="text-2xl mb-8">Transforme uma vida e a sua também</p>
          <div className="flex gap-4 justify-center">
            <Link to="/login/adopter" className="bg-red-500 text-white py-4 px-8 rounded-md text-lg cursor-pointer transition-colors hover:bg-red-700 no-underline">Quero Adotar</Link>
            <Link to="/login/donor" className="bg-green-500 text-white py-4 px-8 rounded-md text-lg cursor-pointer transition-colors hover:bg-green-700 no-underline">Quero Doar</Link>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-32 px-8 text-center">
        <h2 className="text-4xl mb-4">Sobre Nós</h2>
        <p className="max-w-3xl mx-auto text-lg">Somos uma organização sem fins lucrativos dedicada a encontrar lares amorosos para animais de estimação abandonados e resgatados. Nossa missão é dar a cada animal uma segunda chance de ser feliz.</p>
      </section>

      <main id="adoption" className="py-16 px-8">
        <h2 className="text-4xl text-center mb-8">Animais para Adoção</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPets.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={prevPage} disabled={currentPage === 1} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 disabled:bg-gray-400">Anterior</button>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400">Próximo</button>
        </div>
      </main>

      <section id="testimonials" className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-4xl mb-8">Depoimentos</h2>
        {/* Placeholder for testimonials */}
      </section>
    </>
  );
};

export default Public;
