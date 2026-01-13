
import React from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import MethodStory from './components/MethodStory';
import Modules from './components/Modules';
import PriceSection from './components/PriceSection';
import Bonuses from './components/Bonuses';
import SummaryStack from './components/SummaryStack';
import Testimonials from './components/Testimonials';
import TestimonialsSecondary from './components/TestimonialsSecondary';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <TopBar />
      <Hero />
      <Benefits />
      <MethodStory />
      <Modules />
      
      {/* Premier bloc de témoignages avant tout bouton d'achat */}
      <Testimonials />

      {/* Premier appel à l'offre */}
      <div className="bg-[#FAF9F5]">
        <PriceSection 
            title="CETTE OFFRE EST UNIQUE !" 
            subtitle="Pendant quelques jours, nous RÉDUISONS LE PRIX du cours pour remercier notre communauté et permettre à plus de personnes de découvrir le pouvoir de l'Aromathérapie Organique." 
        />
      </div>

      <Bonuses />
      <SummaryStack />
      
      {/* Deuxième appel à l'offre (Récap) */}
      <PriceSection 
          title="ACCÉDEZ-Y DÈS AUJOURD'HUI ! AVEC LE PRIX SPÉCIAL DEPUIS PARTOUT DANS LE MONDE" 
      />

      {/* Deuxième section de témoignages demandée sous le deuxième bouton d'achat */}
      <TestimonialsSecondary />
      
      <Guarantee />
      
      {/* Troisième appel à l'offre (Final) */}
      <PriceSection title="INSCRIVEZ-VOUS MAINTENANT EN CLIQUANT ICI" />

      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
