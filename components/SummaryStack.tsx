
import React from 'react';
import { CheckSquare } from 'lucide-react';

const SummaryStack: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] py-14 px-4">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-gray-700 flex items-center justify-center gap-2">
               <span className="text-yellow-500 text-2xl">🎁</span> TOUT CE QUE VOUS RECEVREZ POUR SEULEMENT 14,90 EUROS
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Imaginez avoir Votre Propre Ligne de Sels de Bain Thérapeutiques, sans commettre d'erreurs ni perdre de matériel.
            </p>
         </div>

         <div className="mb-10 flex justify-center">
            <img src="https://iili.io/fzPTdrl.jpg" alt="Pack Complet" className="rounded-xl shadow-xl border border-white" />
         </div>

         <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-center font-bold text-lg mb-6 uppercase tracking-wider text-green-700">VOICI CE QUE VOUS OBTENEZ EN VOUS INSCRIVANT</h4>
            <ul className="space-y-3 text-sm md:text-base text-gray-700">
               {[
                 "Cours complet Pas à Pas : Apprenez à Créer 50 Formules de Sels de Bain Thérapeutiques Uniques.",
                 "Guide Pratique de Présentation et Emballage.",
                 "Formules Personnalisées avec la Méthode « Essence Active™ ».",
                 "Stratégies pour Fidéliser vos Clientes.",
                 "Plan de Production Sans Gaspillage.",
                 "Accès à Vie et Mises à Jour."
               ].map((item, i) => (
                 <li key={i} className="flex gap-2 items-start">
                   <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0" />
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
            
            <div className="my-6 border-t border-dashed border-gray-300"></div>
            
            <h5 className="font-bold text-orange-600 mb-4 flex items-center gap-2">
               🎁 Et vous recevez aussi ces BONUS GRATUITS :
            </h5>
            <ul className="space-y-2 text-sm text-gray-600">
               <li><strong>👉 BONUS 1 :</strong> Liste de Fournisseurs Vérifiés.</li>
               <li><strong>👉 BONUS 2 :</strong> Modèles d'Étiquettes Professionnelles.</li>
               <li><strong>👉 BONUS 3 :</strong> Accompagnement Exclusif sur la Plateforme.</li>
               <li><strong>👉 BONUS 4 :</strong> Guide Pratique : Emballages Écologiques.</li>
               <li><strong>👉 BONUS 5 :</strong> Échantillons qui Vendent.</li>
               <li><strong>👉 BONUS 6 :</strong> Guide pour Créer Votre Premier Kit Cadeau.</li>
            </ul>
         </div>
      </div>
    </section>
  );
};

export default SummaryStack;
