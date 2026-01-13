
import React from 'react';
import { BonusItem } from '../types';

const Bonuses: React.FC = () => {
  const bonuses: BonusItem[] = [
    { number: 1, title: "Liste des Fournisseurs", description: "Oubliez les jours perdus à chercher où acheter ou à risquer avec des fournisseurs peu fiables. Accès Direct à des fournisseurs soigneusement sélectionnés.", image: "https://iili.io/fz6cH3G.jpg" },
    { number: 2, title: "Modèles d'Étiquettes", description: "Faites en sorte que vos produits paraissent incroyables dès le premier jour. Modèles Modifiables et Prêts à Imprimer.", image: "https://iili.io/fz60rG9.jpg" },
    { number: 3, title: "Accompagnement Exclusif", description: "Vous ne serez pas seule dans le processus : je vous guide pas à pas. Accès à notre Plateforme Privée pour un Support Direct.", image: "https://iili.io/fz6E45b.jpg" },
    { number: 4, title: "Guide Pratique : Emballages", description: "Emballages Écologiques, Étiquettes avec du Style et Détails qui font que votre marque se démarque.", image: "https://iili.io/fz6VBOG.jpg" },
    { number: 5, title: "Échantillons qui Vendent", description: "Vos Premières Formules pour gagner des clientes en un temps record. Stratégies de vente efficaces.", image: "https://iili.io/fz6k8Ba.jpg" },
    { number: 6, title: "Guide : Kit Cadeau", description: "Apprenez à combiner, présenter et vendre vos sels comme des cadeaux irrésistibles pour des occasions spéciales.", image: "https://iili.io/fz6vmoF.jpg" }
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center font-bold text-gray-800 text-xl mb-10 uppercase">
          DE PLUS, SI VOUS FAITES PARTIE DES PREMIÈRES PERSONNES À VOUS INSCRIRE AU COURS, VOUS RECEVEZ CES <span className="text-red-500">BONUS SUPPLÉMENTAIRES TOTALEMENT GRATUITS</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus) => (
            <div key={bonus.number} className="border border-red-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition">
              <div className="text-center mb-4">
                 <span className="bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded-full text-sm">🎁 BONUS {bonus.number} :</span>
                 <h4 className="font-bold text-lg mt-2 leading-tight text-gray-800">{bonus.title}</h4>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <img src={bonus.image} alt={bonus.title} className="w-32 h-44 object-cover shadow-md mb-4 rounded border" />
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {bonus.description}
                </p>
              </div>
              <div className="mt-4 text-center">
                 <span className="font-bold text-gray-900 text-sm bg-gray-100 px-4 py-1 rounded">AUJOURD'HUI GRATUIT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
