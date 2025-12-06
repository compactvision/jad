import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, Heart, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('footer');
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Ici, vous ajouteriez la logique pour s'inscrire à la newsletter
      console.log('Inscription à la newsletter:', email);
      setSubscribed(true);
      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const navLinks = [
    { label: 'Notre histoire', id: 'about' },
    { label: 'Nos activités', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/legal-notice' },
    // { label: 'Politique de confidentialité', href: '/privacy-policy' },
    // { label: 'CGV', href: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/jadaviculture', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/jadaviculture', label: 'Instagram' },
    { icon: Mail, href: 'jadaviculture@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: MapPin, content: 'Kindele, Vallée de la Funa, Commune de Mont-Ngafula, Kinshasa, RDC' },
    { icon: Phone, content: '+243 83 27 83 069' },
    { icon: Clock, content: 'Lun-Ven: 7h30-18h, Sam: 7h30-13h, Dim: 8h-12h' },
  ];

  return (
    <footer id="footer" className="relative bg-slate-800 text-white py-16 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full translate-y-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo et description */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-4 text-white">JAD Aviculture</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Entreprise agro-pastorale innovante. Modernisation de l'agriculture congolaise grâce à la Méthode JAD Fibonacci™.
            </p>
            
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{info.content}</span>
                  </div>
                );
              })}
              
              {/* Bouton WhatsApp */}
              <div className="flex items-center gap-3 mt-2">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/243832783069" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                >
                  WhatsApp Business
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="font-serif text-xl mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jad-fibonacci" className="text-white/70 hover:text-green-400 transition-colors inline-block">Méthode JAD Fibonacci™</Link>
              </li>
              <li>
                <Link href="/become-member" className="text-white/70 hover:text-green-400 transition-colors inline-block">Devenir collaborateur</Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    className="text-white/70 hover:text-green-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Légal */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="font-serif text-xl mb-4 text-white">Légal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-green-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="font-serif text-xl mb-4 text-white">Newsletter</h4>
            <p className="text-white/70 mb-4 text-sm">
              Recevez nos actualités et offres exclusives sur la Méthode JAD Fibonacci™
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-green-600/20 border border-green-600/30 rounded-lg text-center">
                <p className="text-green-400 text-sm">Merci pour votre inscription !</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  S'inscrire
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className={`border-t border-white/20 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="text-center md:text-right text-white/60 text-sm">
              <p>
                &copy; {currentYear} JAD Aviculture SARL. Tous droits réservés.
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
                Fabriqué avec <Heart className="w-4 h-4 text-red-500 mx-1" /> pour l'agriculture congolaise
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}