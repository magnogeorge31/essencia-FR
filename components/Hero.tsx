
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] pt-10 pb-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Créez de Toutes Pièces Votre Propre Ligne de <span className="text-green-600">Sels de Bain Thérapeutiques</span> et Naturels avec la Méthode « Essence Active™ »
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Apprenez à Formuler des Mélanges Fonctionnels avec de <span className="font-bold">Réels Bienfaits</span>, Réduisez les Coûts de Production et Transformez chaque Sel de Bain en un <span className="font-bold">Produit Naturel Irrésistible</span> que vos clientes achèteront encore et encore.
        </p>
        
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="https://iili.io/fja9BgR.png" 
            alt="Méthode Essence Active - Cours de Sels de Bain Thérapeutiques" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
