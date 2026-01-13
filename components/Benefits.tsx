
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "À la fin du cours, vous ne saurez pas seulement fabriquer des Sels de Bain. Vous maîtriserez l'art de la Formulation Thérapeutique Naturelle. Vous apprendrez comment chaque ingrédient influe sur le Corps, l'Esprit et les Émotions.",
    "Lancer votre Première Ligne Artisanale sans vous sentir perdue. Vous aurez la Clarté d'un Pas à Pas concret pour créer des Produits Fonctionnels et attractifs dès le départ.",
    "Vous recevrez une Liste Vérifiée de Fournisseurs par Pays pour des ingrédients de Qualité au Meilleur Prix afin de ne plus vous soucier de l'endroit où acheter ce dont vous avez besoin.",
    "Offrir des produits que vos Clientes Veuillent Racheter. Grâce aux 50 Formules Exclusives, vous pourrez personnaliser votre offre et fidéliser avec des Expériences Sensorielles Uniques.",
    "Offrir des Bienfaits Réels pour Soulager les Douleurs Musculaires et Articulaires, le Stress, l'Insomnie et l'Anxiété, la Fatigue Mentale, la Peau sèche et déshydratée.",
    "Vous réduirez le gaspillage et les erreurs de production : Grâce aux Techniques Optimisées, vous économiserez de l'argent et de la matière première, Maximisant ainsi vos Gains.",
    "Avoir une Présentation Professionnelle sans besoin de machines coûteuses. Vous découvrirez comment Emballer vos Produits pour vous démarquer sur les marchés, en boutique ou sur les réseaux sociaux.",
    "Apprendre à vous Différencier avec une Proposition Claire et Fonctionnelle. Vous ne rivaliserez pas sur le prix. Vous rivaliserez sur la Valeur Réelle. Parce que vos Sels ne seront pas de simples mélanges : ils seront des Thérapies en Flacon."
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800 border-b-4 border-green-200 inline-block mx-auto pb-2 text-balance">
          CE QUE VOUS ACCOMPLIREZ AVEC LA MÉTHODE « ESSENCE ACTIVE™ »
        </h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                 <span dangerouslySetInnerHTML={{ __html: benefit.replace(/(Formulation|Première Ligne|Liste Vérifiée|Clientes Veuillent Racheter|Bienfaits Réels|réduirez|Présentation Professionnelle|Différencier)/g, '<strong>$1</strong>') }} />
              </p>
            </div>
          ))}
          <div className="flex items-start gap-4 mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
            <CheckCircle2 className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
            <p className="text-green-900 font-semibold">
              Et le meilleur : sans besoin de machines chères, ni expérience préalable, ni cours techniques interminables.
            </p>
          </div>

          <div className="mt-8 rounded-xl overflow-hidden shadow-xl border-4 border-white">
             <img 
               src="https://iili.io/fX0MvQ2.png" 
               alt="Bénéfices de la méthode en pratique" 
               className="w-full h-auto object-cover" 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
