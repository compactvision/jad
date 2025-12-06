import {
  Star,
  MessageCircle,
  Quote,
  ThumbsUp,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("testimonials");
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

  const testimonials = [
    {
      name: "Brenda",
      role: "Etudiante",
      content:
        "Je suis intéressée par JAD parce qu’ils proposent une formation pratique et pas seulement de la théorie. C’est ce qu’il nous faut pour nous lancer en agriculture. Ce modèle est motivant car il permet aux jeunes de passer de l’idée à un vrai projet rentable.",
      rating: 5,
      avatar:
        "/assets/testimonials/brenda.jpeg",
      date: "Il y a 2 semaines",
      verified: true,
    },
    {
      name: "Gloria",
      role: "Visiteur",
      content:
        "JAD Aviculture peut vraiment aider les jeunes à devenir autonomes. Avec un système encadré, ce n’est plus un rêve, mais une activité qui peut nourrir une famille.",
      rating: 5,
      avatar:
        "/assets/testimonials/gloria.jpeg",
      date: "Il y a 1 mois",
      verified: true,
    },
    {
      name: "Roseline",
      role: "Visiteur",
      content:
        "Une vraie opportunité pour les jeunes !",
      rating: 5,
      avatar:
        "/assets/testimonials/roseline.jpeg",
      date: "Il y a 3 semaines",
      verified: true,
    },
    // {
    //   name: "Monsieur Tshilombo",
    //   role: "Client fidèle",
    //   content:
    //     "J'ai visité la ferme JAD et j'ai été impressionné par les méthodes d'élevage respectueuses. Les animaux sont en bonne santé et bien traités.",
    //   rating: 5,
    //   avatar:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    //   date: "Il y a 1 semaine",
    //   verified: false,
    // },
  ];

  const stats = [
    { number: "4.8", label: "Note moyenne", icon: Star },
    { number: "200+", label: "Familles ravies", icon: MessageCircle },
    { number: "95%", label: "Clients satisfaits", icon: ThumbsUp },
    { number: "1 an+", label: "Déjà une référence", icon: TrendingUp },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-green-50 to-slate-50 overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 rounded-full -translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-100 rounded-full translate-y-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 font-medium text-sm">
              Témoignages
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
            Ce qu'on dit <br />
            <span className="text-green-600">de nous</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Les avis de nos clients, restaurateurs et partenaires qui font
            confiance à la qualité JAD
          </p>
        </div>

        {/* Statistiques */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">
                  {stat.number}
                </div>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative h-full transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
              onMouseEnter={() => setHoveredTestimonial(index)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br from-green-300 to-amber-300 rounded-3xl opacity-0 transition-opacity duration-300 blur ${hoveredTestimonial === index ? "opacity-70" : ""}`}
              />

              <div className="relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-green-300 h-full flex flex-col transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 p-1 bg-green-600 rounded-full">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-8 h-8 text-green-200" />
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed italic flex-grow text-lg">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-serif text-slate-800 font-semibold text-lg">
                      {testimonial.name}
                    </p>
                    <span className="text-xs text-slate-500">
                      {testimonial.date}
                    </span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div
          className={`bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <MessageCircle className="w-10 h-10 text-amber-400" />
              </div>
            </div>

            <h3 className="text-4xl lg:text-5xl font-serif mb-6">
              Partagez votre histoire
            </h3>

            <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Votre avis nous intéresse ! Laissez-nous votre impression après
              avoir découvert nos produits. Vos témoignages nous aident à
              progresser et inspirent nos futurs clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Calendar className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">Réponse rapide</h4>
                <p className="text-white/80 text-sm">
                  Nous répondons à tous les avis dans les 24h
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <ThumbsUp className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  Avantages exclusifs
                </h4>
                <p className="text-white/80 text-sm">
                  Bénéficiez d'offres spéciales en laissant un avis
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Star className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  Programme fidélité
                </h4>
                <p className="text-white/80 text-sm">
                  Accumulez des points à chaque avis partagé
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Laisser un avis
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/50 rounded-full font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                Voir tous les avis
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
