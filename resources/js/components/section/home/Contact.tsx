import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier au chargement initial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
    setFormSubmitted(true);
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: [
        'Kindele, Vallée de la Funa',
        'Commune de Mont-Ngafula',
        'Kinshasa, RDC'
      ],
      action: null
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: ['+243 832 783 069'],
      action: 'tel:+243832783069'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['contact@jadaviculture.com'],
      action: 'mailto:contact@jadaviculture.com'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: [
        'Lun - Sam: 7h30 - 18h',
        'Dimanche: 8h - 12h',
        'Fermé les jours fériés'
      ],
      action: null
    }
  ];

  const marketInfo = [
    {
      icon: Calendar,
      title: 'Quand ?',
      content: 'Tous les jours sauf dimanche'
    },
    {
      icon: MapPin,
      title: 'Où ?',
      content: 'Marché de Mont Ngafula, Kinshasa'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: '7h - 13h'
    },
    {
      icon: Users,
      title: 'Produits',
      content: 'Œufs, volailles, spécialités'
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 font-medium text-sm">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
            Parlons de votre <br />
            <span className="text-green-600">prochaine commande</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Une question sur nos produits ? Envie de commander en gros ? Nous répondons à vos messages rapidement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="group flex gap-6">
                  <div className="flex-shrink-0 mt-1 p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-slate-800 mb-2">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        className="text-slate-700 hover:text-green-600 transition-colors font-medium text-lg"
                      >
                        {info.content[0]}
                      </a>
                    ) : (
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {info.content.map((line, i) => (
                          <span key={i}>
                            {i > 0 && <><br /></>}
                            {line.startsWith('Lun') || line.startsWith('Sam') || line.startsWith('Dim') ? (
                              <span className="font-medium">{line}</span>
                            ) : (
                              line
                            )}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Bouton WhatsApp Business */}
            <div className="group flex gap-6">
              <div className="flex-shrink-0 mt-1 p-3 bg-green-500 rounded-lg group-hover:bg-green-600 transition-colors">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-slate-800 mb-2">WhatsApp Business</h3>
                <a 
                  href="https://wa.me/243832783069" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contacter sur WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl border-2 border-green-200 hover:border-green-400 transition-all shadow-md hover:shadow-lg">
              <h4 className="font-serif text-2xl text-slate-800 mb-4">Marché local</h4>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                Retrouvez-nous chaque samedi matin sur le marché du centre-ville avec une sélection fraîche de nos meilleurs produits.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {marketInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{item.title}</p>
                        <p className="text-sm text-slate-700 font-medium">{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carte interactive */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-64 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5033865618843!2d15.258771315332467!3d-4.382632846517748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33b9b7e7e7e7%3A0x1a6a33b9b7e7e7e7!2sMont-Ngafula%2C%20Kinshasa%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1623945678910!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Carte de JAD Aviculture à Mont-Ngafula"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-green-300 to-amber-300 rounded-3xl blur opacity-30" />

            {formSubmitted ? (
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 rounded-full">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-slate-800 mb-4">Message envoyé !</h3>
                <p className="text-slate-600 mb-6">
                  Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
                </p>
                <p className="text-sm text-slate-500">
                  Cette fenêtre se fermera automatiquement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-200">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-3">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-lg"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-3">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-lg"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-800 mb-3">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-lg"
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option value="order">Commander des produits</option>
                    <option value="visit">Visiter la ferme</option>
                    <option value="partnership">Partenariat</option>
                    <option value="fibonacci">Méthode JAD Fibonacci™</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-3">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all resize-none text-lg"
                    placeholder="Dites-nous comment nous pouvons vous aider..."
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    Nous nous engageons à répondre à tous les messages dans les 24 heures ouvrables.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}