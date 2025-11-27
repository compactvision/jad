import { Heart, Sprout, Award, Zap, Calendar, Users, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Values() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('values');
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

  const values = [
    {
      icon: Heart,
      title: 'Bien-être animal',
      description: 'Nos volailles vivent en plein air avec accès à des zones herbeuses et à l\'ombre naturelle. Un espace vital pour leur épanouissement.',
      color: 'red'
    },
    {
      icon: Sprout,
      title: 'Agriculture responsable',
      description: 'Pratiques durables, rotation des pâturages, et gestion respectueuse de l\'environnement pour préserver nos terres.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Qualité garantie',
      description: 'Chaque produit est sélectionné avec soin. Nous refusons les compromis sur la qualité et la fraîcheur.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Transparence totale',
      description: 'Visite de la ferme bienvenue. Vous verrez comment nos volailles sont élevées avec respect et passion.',
      color: 'yellow'
    },
  ];

  const visitInfo = [
    {
      icon: Calendar,
      title: 'Quand ?',
      description: 'Chaque dimanche à 14h',
    },
    {
      icon: Users,
      title: 'Pour qui ?',
      description: 'Toute la famille, petits et grands',
    },
    {
      icon: Clock,
      title: 'Durée',
      description: 'Visite d\'environ 2 heures',
    },
    {
      icon: MapPin,
      title: 'Où ?',
      description: 'Ferme JAD, 15 route de la ferme',
    },
  ];

  return (
    <section id="values" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-green-50 to-slate-50 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-100 rounded-full -translate-x-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 font-medium text-sm">Nos engagements</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
            Quatre valeurs <br />
            <span className="text-green-600">qui nous guident</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            À JAD, nos principes sont au cœur de tout ce que nous faisons. Chaque jour, nous renouvelons notre engagement envers la qualité, l'environnement et le bien-être animal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group relative h-full transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br from-${value.color}-300 to-amber-300 rounded-3xl opacity-0 transition-opacity duration-300 blur ${hoveredValue === index ? 'opacity-70' : ''}`} />

                <div className="relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-green-300 h-full transform hover:-translate-y-2">
                  <div className="mb-6 inline-block p-3.5 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl group-hover:from-green-200 group-hover:to-amber-200 transition-all shadow-md">
                    <Icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>

                  <h3 className="text-2xl font-serif text-slate-800 mb-4 group-hover:text-green-600 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`relative bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-600/20 rounded-full mb-6">
                <span className="text-green-400 font-medium text-sm">Expérience unique</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                Visiter la <span className="text-amber-400">ferme JAD</span>
              </h3>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Découvrez notre univers et rencontrez nos volailles en personne. Nos visites guidées vous plongent au cœur de la passion fermière. Chaque dimanche à 14h, bienvenue chez JAD !
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {visitInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                      <div className="p-2 bg-amber-500/20 rounded-lg">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-amber-400 font-medium text-sm">{info.title}</p>
                        <span className="text-white/90">{info.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-800 rounded-full font-semibold transition-all hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Réserver une visite
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-amber-500/20 rounded-3xl transform translate-x-4 translate-y-4 blur" />
              <img
                src="https://images.pexels.com/photos/2317911/pexels-photo-2317911.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Visite de la ferme JAD avec des volailles"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-serif text-lg text-slate-800 font-semibold">Visites en famille</h4>
                </div>
                <p className="text-sm text-slate-600">
                  Une expérience éducative et amusante pour toute la famille. Les enfants adorent nos ateliers de découverte!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}