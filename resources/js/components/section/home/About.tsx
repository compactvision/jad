import { Leaf, Award, Sprout, Heart, Users, Globe, TrendingUp, Network } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifier au chargement initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-green-50 to-slate-50 overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
              <span className="text-green-700 font-medium text-sm">
                Notre histoire commence ici
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
              JAD Aviculture SARL <br />
              <span className="text-green-600">Moderniser l'agriculture congolaise</span>
            </h2>

            <div className="w-16 h-1 bg-amber-500 rounded-full mb-8" />

            <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              JAD Aviculture SARL est une entreprise agro-pastorale fondée par 
              trois jeunes entrepreneurs congolais : Jonathan Kalume, Ariel Amisi et David Saïd Mutena.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Nous travaillons pour moderniser l'agriculture congolaise en combinant 
              élevage avicole, innovation, autonomie alimentaire et un modèle unique : 
              la Méthode JAD Fibonacci™, un système de progression qui permet aux producteurs 
              d'avancer ensemble et de se renforcer en réseau.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    Innovation agricole
                  </p>
                  <p className="text-sm text-slate-600">
                    Techniques modernes pour un élevage avicole performant
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Network className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    Méthode JAD Fibonacci™
                  </p>
                  <p className="text-sm text-slate-600">
                    Système de progression collaborative pour les producteurs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Sprout className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    Autonomie alimentaire
                  </p>
                  <p className="text-sm text-slate-600">
                    Renforcement de la sécurité alimentaire locale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-amber-100 rounded-3xl -z-10 transform translate-x-6 translate-y-6" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/2317907/pexels-photo-2317907.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Élevage avicole moderne au Congo"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-200 transform transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Network className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-serif text-lg text-slate-800 font-semibold">
                  Méthode JAD Fibonacci™
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Un système unique de progression collaborative pour les producteurs
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              number: "3",
              label: "Fondateurs passionnés",
              icon: <Users className="w-8 h-8" />,
              color: "green",
              delay: 0,
            },
            {
              number: "100%",
              label: "Méthode innovante",
              icon: <TrendingUp className="w-8 h-8" />,
              color: "amber",
              delay: 100,
            },
            {
              number: "∞",
              label: "Potentiel de croissance",
              icon: <Network className="w-8 h-8" />,
              color: "blue",
              delay: 200,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2 transition-all duration-1000 delay-${stat.delay} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className={`text-${stat.color}-600 mb-3`}>{stat.icon}</div>
                <div
                  className={`text-5xl font-serif text-${stat.color}-600 font-bold mb-2`}
                >
                  {stat.number}
                </div>
                <p className="text-lg text-slate-700 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 text-center transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h3 className="text-3xl font-serif text-slate-800 mb-8">
            Notre vision pour l'avenir
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Network className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-serif text-slate-800 font-semibold">
                  Réseau collaboratif
                </h4>
              </div>
              <p className="text-slate-600">
                Notre Méthode JAD Fibonacci™ permet aux producteurs de progresser ensemble,
                de partager leurs connaissances et de se renforcer mutuellement.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-xl font-serif text-slate-800 font-semibold">
                  Modernisation agricole
                </h4>
              </div>
              <p className="text-slate-600">
                Nous combinons tradition et innovation pour moderniser l'agriculture
                congolaise tout en préservant notre héritage culturel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}