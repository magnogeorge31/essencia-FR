
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

const Testimonials: React.FC = () => {
  const testimonials: TestimonialChat[] = [
    {
      name: "Marie Silva",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      messages: [
        { 
          type: 'received', 
          text: "Je suis tellement heureuse de ce cours ! J'ai déjà commencé à vendre mes premiers sels. Merci pour tout !",
          time: "10:30"
        },
        { 
          type: 'sent', 
          text: "Félicitations ! Je suis ravie de ton succès. Continue comme ça ! 👏",
          time: "10:32"
        },
        { 
          type: 'received', 
          image: "https://iili.io/fzPDndN.jpg", 
          text: "Regarde ce que ça donne pour mes emballages !",
          time: "10:45"
        }
      ]
    },
    {
      name: "Sophie Martin",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      messages: [
        { 
          type: 'received', 
          text: "Bonjour ! Juste pour dire que le cours sur les fournisseurs m'a fait gagner énormément de temps. J'ai déjà passé ma première commande !",
          time: "14:15"
        },
        { 
          type: 'sent', 
          text: "C'est génial Sophie ! Cette liste est une mine d'or. Si tu as la moindre question, je suis là. 😘",
          time: "14:20"
        },
        { 
          type: 'received', 
          text: "Merci ! J'adore la méthode, c'est super pratique.",
          time: "14:22"
        }
      ]
    },
    {
      name: "Anne Durant",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      messages: [
        { 
          type: 'received', 
          text: "Je n'aurais jamais pensé réussir à faire des produits si jolis. Ma famille a adoré les cadeaux de Noël !",
          time: "09:10"
        },
        { 
          type: 'received', 
          image: "https://iili.io/fzi043X.jpg", 
          text: "J'ai suivi le guide des étiquettes et voici le résultat 😍",
          time: "09:11"
        },
        { 
          type: 'sent', 
          text: "Wow Anne ! C'est vraiment professionnel. Félicitations pour ce travail soigné !",
          time: "09:15"
        }
      ]
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-3xl text-gray-800 mb-12">
          De plus en plus d'entrepreneuses y parviennent
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((chat, idx) => (
             <div key={idx} className="border-gray-300 border rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50 max-w-[320px] mx-auto relative flex flex-col h-[550px]">
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
                           <div className="mb-2 rounded overflow-hidden">
                             <img src={msg.image} alt="Contenu partagé" className="w-full h-auto object-cover" />
                           </div>
                         )}
                         
                         <p className="text-gray-800 leading-snug pr-2 pb-2">
                           {msg.text}
                         </p>
                         
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
                <div className="bg-[#f0f0f0] p-2 flex items-center gap-2">
                   <div className="bg-white flex-1 rounded-full px-4 py-2 text-sm text-gray-400">
                      Message
                   </div>
                   <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-sm">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className=""><path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
