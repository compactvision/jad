import { Leaf, Award, Sprout, Heart, Users, Globe } from "lucide-react";
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
                Notre histoire
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
              Passion fermière <br />
              <span className="text-green-600">depuis 20 ans</span>
            </h2>

            <div className="w-16 h-1 bg-amber-500 rounded-full mb-8" />

            <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              JAD cultive l'excellence dans l'élevage de volailles. Notre ferme
              aux portes du bocage vendéen incarne une vision : produire
              naturellement, respectueusement, passionnément.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Chaque poule, chaque pintade, chaque canard s'épanouit en plein
              air. Nous refusons la production intensive pour privilégier le
              bien-être animal et la qualité des produits.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    Élevage naturel et respectueux
                  </p>
                  <p className="text-sm text-slate-600">
                    Sans antibiotiques, en plein air
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    Certification qualité
                  </p>
                  <p className="text-sm text-slate-600">
                    100% plein air certifié
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Sprout className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    Durabilité garantie
                  </p>
                  <p className="text-sm text-slate-600">
                    Agriculture responsable et durable
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
                alt="Poules fermières en liberté dans la nature"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-200 transform transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-serif text-lg text-slate-800 font-semibold">
                  100% Naturel
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Alimentation sans antibiotiques, élevage en plein air certifié
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              number: "20+",
              label: "Années d'expérience",
              icon: <Award className="w-8 h-8" />,
              color: "green",
              delay: 0,
            },
            {
              number: "500+",
              label: "Volailles élevées",
              icon: <Heart className="w-8 h-8" />,
              color: "amber",
              delay: 100,
            },
            {
              number: "100%",
              label: "Plein air certifié",
              icon: <Globe className="w-8 h-8" />,
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
            Notre engagement pour demain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-serif text-slate-800 font-semibold">
                  Approche locale
                </h4>
              </div>
              <p className="text-slate-600">
                Nous travaillons en étroite collaboration avec les producteurs
                locaux pour garantir la fraîcheur et la qualité de nos produits.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-xl font-serif text-slate-800 font-semibold">
                  Impact environnemental
                </h4>
              </div>
              <p className="text-slate-600">
                Nos pratiques agricoles sont conçues pour minimiser notre impact
                environnemental et préserver la biodiversité locale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
