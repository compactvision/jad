import Breadcrumb from "@/components/common/Breadcrumb";
import AppShell from "@/layouts/AppShell";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Award, Network, Star, ArrowRight, Target, Shield, Crown } from "lucide-react";

export default function Fibonacci() {
    const [activeLevel, setActiveLevel] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const handleMouseMove = (e: MouseEvent) => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    setMousePosition({
                        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
                        y: (e.clientY - rect.top - rect.height / 2) / rect.height
                    });
                }
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isMobile]);

    const levels = [
        { 
            number: 1, 
            title: "Départ", 
            description: "L'embryon de l'excellence agricole",
            detail: "Premiers pas dans l'élevage avicole avec formation pratique",
            icon: <Users className="w-6 h-6" />
        },
        { 
            number: 2, 
            title: "Première croissance", 
            description: "Les racines de la maîtrise",
            detail: "Développement des compétences techniques et gestionnelles",
            icon: <TrendingUp className="w-6 h-6" />
        },
        { 
            number: 3, 
            title: "Première fusion", 
            description: "La force de l'union",
            detail: "Collaboration synergique avec d'autres producteurs",
            icon: <Network className="w-6 h-6" />
        },
        { 
            number: 5, 
            title: "Reconnaissance locale", 
            description: "L'émergence du leader",
            detail: "Établissement comme référent dans la communauté",
            icon: <Award className="w-6 h-6" />
        },
        { 
            number: 8, 
            title: "Réseau structuré", 
            description: "L'architecture du succès",
            detail: "Création d'un écosystème agricole collaboratif",
            icon: <Target className="w-6 h-6" />
        },
        { 
            number: 13, 
            title: "Leadership régional", 
            description: "La vision qui transforme",
            detail: "Influence sur les politiques et pratiques agricoles",
            icon: <Shield className="w-6 h-6" />
        },
        { 
            number: 21, 
            title: "Référence", 
            description: "La légende agricole",
            detail: "Modèle d'excellence pour l'agriculture congolaise",
            icon: <Crown className="w-6 h-6" />
        }
    ];

    return (
        <AppShell>
            <Head title="Méthode JAD Fibonacci™" />
            <Breadcrumb title="Méthode JAD Fibonacci™" desc="Un modèle d'élévation progressive des producteurs agricoles"/>
            
            <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
                {/* Hero Section */}
                <div className="relative px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-16 sm:pb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6 sm:mb-8 border border-green-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-green-700">Méthode exclusive JAD Aviculture</span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gray-900">
                            JAD Fibonacci™
                        </h1>
                        
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                            Un modèle d'élévation progressive où <span className="text-green-600 font-semibold">chaque progression est une addition</span>
                        </p>
                        
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 max-w-5xl mx-auto">
                            <p className="text-lg sm:text-2xl lg:text-3xl font-light leading-relaxed text-gray-700 px-2">
                                La Méthode JAD Fibonacci™ transforme des producteurs isolés en 
                                <span className="text-green-600 font-semibold"> un réseau agricole puissant et collaboratif</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visualisation des niveaux - Responsive */}
                <div className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-20" ref={containerRef}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
                                Les 7 Niveaux de l'Excellence
                            </h2>
                            <p className="text-gray-500 text-base sm:text-lg px-4">
                                {isMobile ? "Appuyez sur chaque niveau pour explorer votre parcours" : "Survolez chaque niveau pour explorer votre parcours"}
                            </p>
                        </div>

                        {/* Version Desktop - Visualisation 3D */}
                        {!isMobile && (
                            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
                                {/* Lignes de connexion */}
                                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                                    {levels.slice(0, -1).map((_, index) => {
                                        const nextIndex = index + 1;
                                        const x1 = 50 + Math.cos((index * 60 - 90) * Math.PI / 180) * 30;
                                        const y1 = 50 + Math.sin((index * 60 - 90) * Math.PI / 180) * 30;
                                        const x2 = 50 + Math.cos((nextIndex * 60 - 90) * Math.PI / 180) * 30;
                                        const y2 = 50 + Math.sin((nextIndex * 60 - 90) * Math.PI / 180) * 30;
                                        
                                        return (
                                            <line
                                                key={index}
                                                x1={`${x1}%`}
                                                y1={`${y1}%`}
                                                x2={`${x2}%`}
                                                y2={`${y2}%`}
                                                stroke="#e5e7eb"
                                                strokeWidth="2"
                                                strokeDasharray="5,5"
                                            />
                                        );
                                    })}
                                </svg>

                                {/* Niveaux circulaires */}
                                {levels.map((level, index) => {
                                    const angle = (index * 60 - 90) * Math.PI / 180;
                                    const radius = window.innerWidth < 1024 ? 150 : 200;
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;
                                    const isActive = activeLevel === index;
                                    
                                    return (
                                        <div
                                            key={index}
                                            className={`absolute transition-all duration-500 cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
                                            style={{
                                                transform: `translate(${x + mousePosition.x * 15}px, ${y + mousePosition.y * 15}px) ${isActive ? 'scale(1.15)' : 'scale(1)'}`,
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: '-80px',
                                                marginTop: '-80px'
                                            }}
                                            onMouseEnter={() => setActiveLevel(index)}
                                            onMouseLeave={() => setActiveLevel(null)}
                                        >
                                            <div className={`relative w-40 h-40 rounded-full bg-white shadow-lg border-2 ${isActive ? 'border-green-500 shadow-green-200' : 'border-gray-200'}`}>
                                                <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-4">
                                                    <div className={`text-3xl font-bold mb-2 ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                                                        {level.number}
                                                    </div>
                                                    <div className={`p-2 rounded-full mb-2 ${isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                                        {level.icon}
                                                    </div>
                                                    <h3 className={`text-xs font-semibold text-center ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                                                        {level.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            
                                            {/* Info tooltip */}
                                            {isActive && (
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 p-4 bg-white rounded-lg shadow-xl border border-gray-200 z-30">
                                                    <p className="text-sm text-gray-700">{level.description}</p>
                                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                                                        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                
                                {/* Centre du diagramme - Modifié */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                                    <div className="w-24 h-24 sm:w-28 sm:h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 p-1 shadow-xl">
                                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                                            <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">1</div>
                                            <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center px-2">
                                                Niveau de<br />départ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Version Mobile - Cartes en grille */}
                        {isMobile && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {levels.map((level, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-xl p-4 sm:p-6 shadow-md border-2 transition-all duration-300 cursor-pointer ${
                                            activeLevel === index ? 'border-green-500 shadow-lg' : 'border-gray-200'
                                        }`}
                                        onClick={() => setActiveLevel(activeLevel === index ? null : index)}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`text-2xl sm:text-3xl font-bold ${activeLevel === index ? 'text-green-600' : 'text-gray-400'}`}>
                                                {level.number}
                                            </div>
                                            <div className={`p-2 rounded-full ${activeLevel === index ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                                {level.icon}
                                            </div>
                                        </div>
                                        <h3 className={`text-base sm:text-lg font-semibold mb-2 ${activeLevel === index ? 'text-gray-900' : 'text-gray-700'}`}>
                                            {level.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">{level.description}</p>
                                        {activeLevel === index && (
                                            <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">{level.detail}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Timeline détaillée - Responsive */}
                <div className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Votre Parcours de Transformation</h2>
                            <p className="text-gray-500 text-base sm:text-lg px-4">Chaque niveau est une étape vers l'excellence</p>
                        </div>

                        {/* Version Desktop - Timeline classique */}
                        {!isMobile && (
                            <div className="relative">
                                {/* Ligne centrale */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                                
                                {levels.map((level, index) => (
                                    <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300">
                                                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                                                    <span className="text-3xl font-bold text-green-600">{level.number}</span>
                                                    <h3 className="text-xl font-semibold text-gray-900">{level.title}</h3>
                                                </div>
                                                <p className="text-gray-600 mb-2">{level.description}</p>
                                                <p className="text-sm text-gray-500">{level.detail}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Point sur la timeline */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-green-500 z-10"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Version Mobile - Timeline verticale simplifiée */}
                        {isMobile && (
                            <div className="relative">
                                {/* Ligne centrale */}
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                                
                                {levels.map((level, index) => (
                                    <div key={index} className="relative flex items-start mb-8">
                                        {/* Point sur la timeline */}
                                        <div className="absolute left-4 w-4 h-4 rounded-full bg-white border-4 border-green-500 z-10"></div>
                                        
                                        {/* Carte de contenu */}
                                        <div className="ml-12 bg-white rounded-xl p-4 shadow-md border border-gray-200 w-full">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl font-bold text-green-600">{level.number}</span>
                                                <h3 className="text-lg font-semibold text-gray-900">{level.title}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-2 text-sm">{level.description}</p>
                                            <p className="text-xs text-gray-500">{level.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Final - Responsive */}
                <div className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">Prêt à Commencer Votre Ascension ?</h2>
                            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-green-50 px-4">
                                Rejoignez le réseau JAD Fibonacci™ et transformez votre avenir agricole
                            </p>
                            <button 
                                onClick={() => router.visit('/become-member')} 
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 rounded-full font-bold text-base sm:text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
                            >
                                Commencer Maintenant
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AppShell>
    );
}