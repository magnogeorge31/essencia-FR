
import React from 'react';
import { ModuleItem } from '../types';

const Modules: React.FC = () => {
  const modules: ModuleItem[] = [
    { title: "Recettes pour le Soulagement Musculaire et Articulaire", image: "https://iili.io/fzM24bn.jpg" },
    { title: "Recettes pour la Réduction du Stress et de l'Anxiété", image: "https://iili.io/fzM342V.jpg" },
    { title: "Recettes pour Dormir et Combattre l'Insomnie", image: "https://iili.io/fzMFVZg.jpg" },
    { title: "Recettes pour l'Hydratation et le Soin de la Peau", image: "https://iili.io/fzM3ZQa.jpg" },
    { title: "Recettes pour Améliorer la Concentration et la Clarté Mentale", image: "https://iili.io/fzMCSCF.jpg" },
    { title: "Recettes pour la Récupération Après l'Effort", image: "https://iili.io/fzMxHI2.jpg" },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 text-gray-800 tracking-wide uppercase">
          NOUS ENSEIGNONS TOUT ICI !
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="font-bold text-gray-700 mb-4 h-12 flex items-center justify-center px-2 text-sm md:text-base">
                {mod.title}
              </h3>
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-100 shadow-lg hover:scale-105 transition duration-300">
                <img src={mod.image} alt={mod.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
