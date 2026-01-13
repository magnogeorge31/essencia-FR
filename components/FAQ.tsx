
import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    { question: "COMBIEN DE TEMPS FAUT-IL POUR COMPLÉTER LE COURS ?", answer: "Le cours se fait entièrement à votre rythme. Vous pouvez le terminer en un week-end ou y consacrer 15 minutes par jour. L'accès est à vie." },
    { question: "AI-JE BESOIN D'UNE EXPÉRIENCE PRÉALABLE POUR SUIVRE CE COURS ?", answer: "Non, la méthode part de zéro absolu. Nous enseignons tout, des ingrédients de base jusqu'à la vente finale." },
    { question: "COMMENT PUIS-JE ACCÉDER AU CONTENU DU COURS APRÈS L'ACHAT ?", answer: "Immédiatement après le paiement, vous recevrez un e-mail avec vos identifiants de connexion à notre plateforme d'élèves." },
    { question: "DE QUELS MATÉRIAUX AI-JE BESOIN POUR SUIVRE LE COURS ?", answer: "Nous commençons avec des ustensiles que vous avez déjà en cuisine. Les ingrédients spécifiques figurent dans la liste des fournisseurs que nous vous remettons." },
    { question: "COMBIEN DE TEMPS AURAI-JE ACCÈS AU COURS UNE FOIS ACHETÉ ?", answer: "L'accès est à vie. Vous pourrez visionner les cours et consulter les ebooks quand vous le souhaitez, pour toujours." },
    { question: "QUELS SONT LES MODES DE PAIEMENT ?", answer: "Nous acceptons les cartes de crédit, de débit et PayPal." },
    { question: "LE PAIEMENT EST-IL SÉCURISÉ ?", answer: "Oui, 100% sécurisé. Nous utilisons un cryptage SSL de niveau bancaire pour protéger vos données." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF9F5] py-16 px-4">
      <div className="max-w-3xl mx-auto">
         <h2 className="text-center font-bold text-2xl text-gray-800 mb-10 uppercase">
            QUESTIONS FRÉQUEMMENT POSÉES
         </h2>
         <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <button 
                        onClick={() => toggle(idx)}
                        className="w-full text-left px-6 py-4 flex justify-between items-center font-bold text-gray-700 hover:bg-gray-50 transition"
                    >
                        <span className="text-sm md:text-base">{faq.question}</span>
                        {openIndex === idx ? <ChevronUp className="w-5 h-5 text-green-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>
                    {openIndex === idx && (
                        <div className="px-6 py-4 bg-gray-50 text-sm text-gray-600 border-t border-gray-100 animate-fadeIn">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQ;
