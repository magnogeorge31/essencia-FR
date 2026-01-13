
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
         <div className="flex-shrink-0">
             <div className="w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-600 shadow-xl relative">
                <div className="w-32 h-32 bg-black rounded-full flex flex-col items-center justify-center text-yellow-400 p-2 border-2 border-white">
                    <span className="text-4xl font-black">7</span>
                    <span className="text-xl font-bold uppercase">Jours</span>
                    <span className="text-[10px] uppercase tracking-wide">Satisfaction Garantie</span>
                </div>
                <div className="absolute -bottom-4 bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-md">
                    Votre risque est nul
                </div>
             </div>
         </div>
         <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">
                VOTRE ACHAT EST 100% SÉCURISÉ.
            </h3>
            <p className="text-gray-600 mb-4 font-semibold">
                Garantie Inconditionnelle de Satisfaction :
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
                Nous voulons que vous achetiez en toute tranquillité et confiance, en sachant que ce cours est authentique, sans astuces ni promesses vides, seulement des connaissances réelles et un soutien sincère pour votre entreprise d'aromathérapie organique et écologique.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
                C'est pourquoi nous offrons une <strong>Garantie Complète de Satisfaction de 7 jours.</strong> Si vous n'êtes pas totalement satisfaite pour n'importe quelle raison, nous vous rembourserons 100% de votre investissement.
            </p>
         </div>
      </div>
    </section>
  );
};

export default Guarantee;
