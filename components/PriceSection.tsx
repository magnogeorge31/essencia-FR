
import React from 'react';
import { ArrowDown, ShieldCheck, CreditCard } from 'lucide-react';

const PriceSection: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  
  return (
    <section className="bg-[#FAF9F5] py-16 px-4 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            {subtitle}
          </p>
        )}

        <div className="flex justify-center mb-10">
            <img src="https://iili.io/fzMcGgp.jpg" className="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl border border-gray-200" alt="Méthode Essence Active" />
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 md:p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-green-500 text-white text-xs font-bold py-1 uppercase tracking-widest">
                Accès Immédiat Aujourd'hui
            </div>
            
            <p className="text-gray-500 font-bold text-lg mt-4">PRIX RÉGULIER</p>
            <p className="text-red-500 font-bold text-3xl line-through decoration-red-500 decoration-4">49,90 €</p>
            
            <p className="text-black font-extrabold text-xl md:text-2xl mt-4 uppercase">
                PRIX EXCLUSIF <br/> OFFRE SPÉCIALE
            </p>
            
            <div className="text-green-600 font-black text-7xl md:text-9xl my-2 leading-none">
                14,90
            </div>
            <p className="text-green-700 font-bold text-5xl uppercase tracking-widest">€</p>
            <p className="text-gray-800 font-bold text-lg mt-2">PAIEMENT UNIQUE</p>
            <p className="text-red-600 font-bold mt-2 animate-bounce">RÉDUCTION DISPONIBLE PENDANT QUELQUES HEURES</p>
        </div>

        <div className="flex justify-center mt-6 mb-8">
            <ArrowDown className="text-green-500 w-12 h-12 animate-bounce" />
        </div>

        {/* CTA Button Only - Link updated */}
        <div className="flex justify-center mb-8">
            <a 
              href="https://pay.hotmart.com/R103829419W?checkoutMode=10"
              className="bg-green-600 hover:bg-green-700 text-white text-lg md:text-2xl font-bold py-5 px-8 md:px-16 rounded-lg shadow-[0_4px_0_rgb(21,128,61)] hover:shadow-[0_2px_0_rgb(21,128,61)] transform hover:translate-y-[2px] transition-all w-full md:w-auto uppercase flex flex-col md:flex-row items-center justify-center gap-2 text-center no-underline cursor-pointer"
            >
                <span>JE VEUX COMMENCER MAINTENANT</span>
                <span className="hidden md:inline">-</span>
                <span>14,90 €</span>
            </a>
        </div>

        {/* Trust and Info Section Matching Image */}
        <div className="mt-10 space-y-6 text-center">
            
            <p className="text-[10px] md:text-xs font-bold text-black uppercase max-w-xl mx-auto leading-tight">
                IMPORTANT : NOTRE SYSTÈME EFFECTUE AUTOMATIQUEMENT LA CONVERSION DANS VOTRE DEVISE LOCALE À UN TAUX DE CHANGE PRÉFÉRENTIEL AVANT VOTRE INSCRIPTION
            </p>

            <h3 className="text-[#D4AF37] font-bold text-lg md:text-xl uppercase tracking-wide">
                ACCÈS À VIE À LA PLATEFORME ÉDUCATIVE
            </h3>

            {/* Payment Icons Strip */}
            <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="bg-white border border-gray-200 rounded px-2 py-1 flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span className="text-[10px] font-bold text-gray-700 uppercase leading-none">Achat<br/>100% Sécurisé</span>
                </div>
                <div className="flex gap-2 opacity-80">
                     <div className="h-6 bg-white border rounded px-1 flex items-center"><span className="font-bold text-blue-800 text-xs italic">Visa</span></div>
                     <div className="h-6 bg-white border rounded px-1 flex items-center"><span className="font-bold text-red-600 text-xs">Mastercard</span></div>
                     <div className="h-6 bg-white border rounded px-1 flex items-center"><span className="font-bold text-blue-500 text-xs">Amex</span></div>
                     <div className="h-6 bg-white border rounded px-1 flex items-center"><span className="font-bold text-blue-900 text-xs italic">PayPal</span></div>
                     <div className="h-6 bg-white border rounded px-1 flex items-center"><span className="font-bold text-orange-500 text-xs">Discover</span></div>
                </div>
            </div>

            <p className="text-[#1E3A8A] font-extrabold uppercase text-sm md:text-base">
                DISPONIBLE DANS LE MONDE ENTIER
            </p>

            {/* Big Shield */}
            <div className="flex justify-center py-2">
                <div className="relative">
                    <div className="w-24 h-28 bg-gradient-to-b from-green-400 to-green-600 rounded-b-full rounded-t-lg shadow-xl flex flex-col items-center justify-center text-white border-4 border-white ring-4 ring-green-100">
                         <ShieldCheck className="w-10 h-10 mb-1" />
                         <span className="text-[10px] uppercase font-medium tracking-tighter">Achat 100%</span>
                         <span className="text-lg font-black leading-none tracking-wide">SÉCURISÉ</span>
                    </div>
                </div>
            </div>

            <p className="text-[10px] md:text-xs text-black font-bold max-w-2xl mx-auto leading-relaxed uppercase px-4">
                EFFECTUEZ VOTRE ACHAT EN TOUTE CONFIANCE, RAPIDITÉ ET SÉCURITÉ SANS COMPLICATIONS AVEC NOTRE PLATEFORME DE PAIEMENT PROTÉGÉE PRÈS CHIFFREMENT SSL ET SOUTENUE PAR VISA, MASTERCARD, AMERICAN EXPRESS ET PAYPAL
            </p>

            <h4 className="text-[#8B4513] font-bold text-lg uppercase mt-6 tracking-wider">
                IMPORTANT :
            </h4>

            <p className="text-xs md:text-sm text-black font-bold max-w-xl mx-auto leading-relaxed uppercase px-4">
                À LA FINALISATION DE VOTRE ACHAT, VOUS RECEVREZ AUTOMATIQUEMENT TOUS VOS ACCÈS À LA PLATEFORME ÉDUCATIVE PAR E-MAIL
            </p>
        </div>

      </div>
    </section>
  );
};

export default PriceSection;
