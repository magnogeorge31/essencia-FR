
import React from 'react';
import { MoreVertical, Phone, Video, ArrowLeft } from 'lucide-react';

interface Message {
  type: 'sent' | 'received';
  text?: string;
  image?: string;
  time: string;
}

interface TestimonialChat {
  name: string;
  avatar: string;
  messages: Message[];
}

const TestimonialsSecondary: React.FC = () => {
  const testimonials: TestimonialChat[] = [
    {
      name: "Rosa M. Groupe 1",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      messages: [
        { 
          type: 'received', 
          text: "Vous n'imaginez pas à quel point je suis heureuse ! Une cliente m'a commandé 15 kits pour des cadeaux d'entreprise et ils sont déjà tous prêts à être livrés. Ils sont magnifiques. Grâce au cours, j'ai appris à m'organiser, à présenter joliment et à fabriquer des produits qui ont l'air professionnels. Mille mercis pour tout !",
          time: "17:46"
        },
        { 
          type: 'received', 
          image: "https://iili.io/fXltqLQ.png", 
          time: "17:47"
        },
        { 
          type: 'sent', 
          text: "Bonjour Rosita, je te l'avais dit, c'était juste une question de croire en toi, je savais que tu y arriverais, Félicitations !!!!!!",
          time: "17:50"
        }
      ]
    },
    {
      name: "Valéria C.",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      messages: [
        { 
          type: 'received', 
          text: "Prof, j'ai publié une photo de mes Sels terminés et j'ai déjà des gens qui me demandent les prix ! Je n'ai même pas encore fait le lancement officiel et on me passe déjà commande. Merci pour votre façon si claire d'enseigner, cela m'a donné le coup de pouce dont j'avais besoin.",
          time: "20:38"
        },
        { 
          type: 'received', 
          image: "https://iili.io/fXlbxOg.png", 
          time: "20:39"
        },
        { 
          type: 'sent', 
          text: "Bonjour Vale, quel bonheur que le cours t'ait servi. N'aie pas peur de demander le juste prix pour ton travail, n'oublie pas que ce sont des produits premium !!!! Tu verras qu'ils se vendent très bien 💰💰",
          time: "20:45"
        }
      ]
    }
  ];

  return (
    <section className="bg-[#FAF9F5] py-16 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-3xl text-gray-800 mb-12 uppercase tracking-tight">
          PLUS DE TÉMOIGNAGES DE NOS ÉLÈVES
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-12">
           {testimonials.map((chat, idx) => (
             <div key={idx} className="border-gray-300 border rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50 w-full max-w-[320px] mx-auto relative flex flex-col h-[680px]">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] p-3 flex items-center gap-3 text-white shadow-md z-10">
                   <ArrowLeft className="w-5 h-5 cursor-pointer" />
                   <div className="w-9 h-9 rounded-full overflow-hidden border border-white/50">
                      <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{chat.name}</h4>
                      <p className="text-[10px] opacity-80 truncate">en ligne</p>
                   </div>
                   <div className="flex gap-3">
                      <Video className="w-5 h-5 cursor-pointer" />
                      <Phone className="w-4 h-4 cursor-pointer" />
                      <MoreVertical className="w-4 h-4 cursor-pointer" />
                   </div>
                </div>

                {/* WhatsApp Chat Area */}
                <div 
                  className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 relative"
                  style={{ 
                    backgroundColor: '#E5DDD5',
                    backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                    backgroundBlendMode: 'overlay'
                  }}
                >
                   {chat.messages.map((msg, i) => (
                      <div 
                        key={i} 
                        className={`max-w-[85%] rounded-lg p-2 shadow-sm text-sm relative ${
                          msg.type === 'sent' 
                            ? 'bg-[#dcf8c6] self-end rounded-tr-none' 
                            : 'bg-white self-start rounded-tl-none'
                        }`}
                      >
                         {msg.image && (
                           <div className="mb-2 rounded overflow-hidden shadow-sm">
                             <img src={msg.image} alt="Contenu partagé" className="w-full h-auto object-cover max-h-72" />
                           </div>
                         )}
                         
                         {msg.text && (
                           <p className="text-gray-800 leading-snug pr-2 pb-2">
                             {msg.text}
                           </p>
                         )}
                         
                         <span className="text-[10px] text-gray-500 absolute bottom-1 right-2 flex items-center gap-1">
                            {msg.time}
                            {msg.type === 'sent' && (
                              <span className="text-blue-500 font-bold text-xs">✓✓</span>
                            )}
                         </span>
                      </div>
                   ))}
                </div>

                {/* WhatsApp Input Area (Mock) */}
                <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 mt-auto">
                   <div className="bg-white flex-1 rounded-full px-4 py-2 text-sm text-gray-400">
                      Message
                   </div>
                   <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-sm">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSecondary;
