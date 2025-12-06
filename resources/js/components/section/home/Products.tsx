import { ShoppingBag, Clock, MapPin, Phone, Star, Truck, TrendingUp, Users, Sprout, Award, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("products");
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

  const activities = [
    {
      name: "Élevage avicole",
      description:
        "Développement d'un élevage moderne avec des pratiques respectueuses de l'environnement et du bien-être animal",
      image:
        "https://images.unsplash.com/photo-1583258216-7b0d4740804b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "En croissance",
      details: "215 poussins reçus le 11 septembre 2025",
      rating: 4.7,
      objective: "Objectif : 1 000 en 2026 – 1 600 en 2027",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      name: "Autonomie alimentaire",
      description:
        "Production de céréales pour nourrir notre élevage et réduire notre dépendance aux fournisseurs externes",
      image:
        "https://images.unsplash.com/photo-1592982537447-6c543b0581b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Projet stratégique",
      details: "Production future de maïs, soja, sorgho",
      rating: 4.9,
      objective: "Objectif : réduire les coûts et nourrir d'autres éleveurs",
      icon: <Sprout className="w-5 h-5" />,
    },
    {
      name: "Formation & structuration",
      description:
        "Éducation des jeunes éleveurs et accompagnement dans la mise en place de pratiques agricoles modernes",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Impact social",
      details: "Éducation des jeunes éleveurs",
      rating: 4.8,
      objective: "Respect d'un modèle organisé",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Méthode JAD Fibonacci™",
      description:
        "Notre système de progression unique qui permet aux producteurs d'avancer ensemble et de se renforcer en réseau",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Innovation",
      details: "Système de progression collaborative",
      rating: 4.9,
      objective: "Modèle unique de développement en réseau",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="products"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-amber-50 to-slate-50 overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 font-medium text-sm">
              Nos activités
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
            Innovation agricole, <span className="text-green-600">développement durable</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            JAD Aviculture SARL combine élevage avicole, innovation, autonomie alimentaire et formation pour moderniser l'agriculture congolaise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group relative h-full transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br from-green-300 to-amber-300 rounded-3xl opacity-0 transition-opacity duration-300 blur ${hoveredProduct === index ? "opacity-70" : ""}`}
              />

              <div className="relative bg-white rounded-3xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform:
                        hoveredProduct === index
                          ? "scale(110%)"
                          : "scale(100%)",
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${hoveredProduct === index ? "opacity-100" : "opacity-0"}`}
                  />

                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {activity.tag}
                  </div>

                  <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md transition-all duration-300">
                    {activity.icon}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-opacity duration-300">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium text-slate-700">
                        {activity.rating}
                      </span>
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      En cours
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-slate-800 mb-3 transition-colors">
                    {activity.name}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                    {activity.description}
                  </p>

                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-sm text-green-700 font-medium">
                      {activity.details}
                    </p>
                  </div>

                  <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <p className="text-sm text-amber-700 font-medium">
                      {activity.objective}
                    </p>
                  </div>

                  {/* <button className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                    <Award className="w-4 h-4" />
                    En savoir plus
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative">
            <h3 className="text-4xl lg:text-5xl font-serif mb-6">
              Rejoignez notre réseau
            </h3>
            <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment la Méthode JAD Fibonacci™ peut transformer votre activité agricole
              et vous connecter à un réseau de producteurs engagés dans la modernisation de l'agriculture congolaise
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">Formation</h4>
                <p className="text-white/80">
                  Ateliers pratiques pour jeunes éleveurs
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BarChart3 className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  Méthode JAD Fibonacci™
                </h4>
                <p className="text-white/80">
                  Système de progression collaborative
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Sprout className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  Autonomie alimentaire
                </h4>
                <p className="text-white/80">
                  Production locale pour la communauté
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+243832783069" className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Nous contacter
              </a>
              <button disabled={true} className="px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/50 rounded-full font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Prochain atelier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}