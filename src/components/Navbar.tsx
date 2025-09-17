import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-4 px-8 shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-blue-500">AdotePet</div>
      <ul className="flex gap-6">
        <li><a href="/" className="font-bold text-gray-800 hover:text-blue-500 transition-colors">Home</a></li>
        <li><a href="/#about-us" className="font-bold text-gray-800 hover:text-blue-500 transition-colors">Sobre</a></li>
        <li><a href="/#adoption" className="font-bold text-gray-800 hover:text-blue-500 transition-colors">Adoção</a></li>
        <li><a href="/#testimonials" className="font-bold text-gray-800 hover:text-blue-500 transition-colors">Depoimentos</a></li>
        <li><Link to="/login" className="font-bold text-gray-800 hover:text-blue-500 transition-colors">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;