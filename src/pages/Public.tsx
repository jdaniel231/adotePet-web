import React from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard';
import petImage from '../assets/ChatGPT Image 15 de set. de 2025, 15_43_48.png';


const Public: React.FC = () => {
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
          <Link to="/login" className="bg-red-500 text-white py-4 px-8 rounded-md text-lg cursor-pointer transition-colors hover:bg-red-700 no-underline">Quero Adotar</Link>
        </div>
      </section>

      <section id="about-us" className="py-32 px-8 text-center">
        <h2 className="text-4xl mb-4">Sobre Nós</h2>
        <p className="max-w-3xl mx-auto text-lg">Somos uma organização sem fins lucrativos dedicada a encontrar lares amorosos para animais de estimação abandonados e resgatados. Nossa missão é dar a cada animal uma segunda chance de ser feliz.</p>
      </section>

      <main id="adoption" className="py-16 px-8">
        <h2 className="text-4xl text-center mb-8">Animais para Adoção</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PetCard />
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