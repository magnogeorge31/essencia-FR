
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-black text-yellow-400 py-3 px-4 text-center font-bold text-sm md:text-base sticky top-0 z-50 flex items-center justify-center gap-2 shadow-lg">
      <AlertTriangle className="w-5 h-5 text-yellow-400" />
      <span>ATTENTION : Dernières heures de la promotion 🔥 70% de réduction et accès immédiat</span>
    </div>
  );
};

export default TopBar;
