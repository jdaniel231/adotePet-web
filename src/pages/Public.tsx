import React from 'react';
import './Public.css';
import petImage from '../assets/ChatGPT Image 15 de set. de 2025, 15_43_48.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">AdotePet</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about-us">Sobre</a></li>
        <li><a href="#adoption">Adoção</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
      </ul>
    </nav>
  );
};

const PetCard: React.FC = () => {
  return (
    <div className="pet-card">
      <img src={petImage} alt="Pet" className="pet-image" />
      <h3>Max</h3>
      <p>Raça: Golden Retriever</p>
      <button>Adotar</button>
    </div>
  );
};

const Public: React.FC = () => {
  return (
    <div className="public-page">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Adote um Amigo</h1>
          <p>Transforme uma vida e a sua também</p>
          <button>Quero Adotar</button>
        </div>
      </section>

      <section id="about-us" className="about-us">
        <h2>Sobre Nós</h2>
        <p>Somos uma organização sem fins lucrativos dedicada a encontrar lares amorosos para animais de estimação abandonados e resgatados. Nossa missão é dar a cada animal uma segunda chance de ser feliz.</p>
      </section>

      <main id="adoption" className="main-content">
        <h2>Animais para Adoção</h2>
        <div className="pet-list">
          <PetCard />
        </div>
      </main>

      <section id="testimonials" className="testimonials">
        <h2>Depoimentos</h2>
        {/* Placeholder for testimonials */}
      </section>

      <footer className="footer">
        <p>&copy; 2025 AdotePet. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Public;
