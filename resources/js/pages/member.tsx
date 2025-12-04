import AppShell from "@/layouts/AppShell";
import { Head } from "@inertiajs/react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useEffect, useState } from "react";
import { Users, Camera, Palette, Package, Store, Handshake, Laptop, Wrench, MapPin, FileText, CheckCircle, ArrowRight, UserPlus } from "lucide-react";

export default function Member() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        activity: '',
        description: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            setIsVisible(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = [
        { 
            name: "Éleveurs", 
            icon: <Users className="w-8 h-8" />, 
            description: "Experts en élevage avicole et autres productions animales",
            color: "bg-green-100 text-green-600 border-green-200"
        },
        { 
            name: "Agriculteurs", 
            icon: <Package className="w-8 h-8" />, 
            description: "Producteurs de cultures et ressources alimentaires",
            color: "bg-amber-100 text-amber-600 border-amber-200"
        },
        { 
            name: "Designers", 
            icon: <Palette className="w-8 h-8" />, 
            description: "Créatifs pour l'identité visuelle et l'emballage",
            color: "bg-purple-100 text-purple-600 border-purple-200"
        },
        { 
            name: "Photographes", 
            icon: <Camera className="w-8 h-8" />, 
            description: "Capture visuelle de nos produits et activités",
            color: "bg-blue-100 text-blue-600 border-blue-200"
        },
        { 
            name: "Transformateurs", 
            icon: <Wrench className="w-8 h-8" />, 
            description: "Transformation des produits agricoles en valeur ajoutée",
            color: "bg-red-100 text-red-600 border-red-200"
        },
        { 
            name: "Vendeurs", 
            icon: <Store className="w-8 h-8" />, 
            description: "Distribution et commercialisation de nos produits",
            color: "bg-indigo-100 text-indigo-600 border-indigo-200"
        },
        { 
            name: "Agents de terrain", 
            icon: <MapPin className="w-8 h-8" />, 
            description: "Relais locaux et représentants sur le terrain",
            color: "bg-teal-100 text-teal-600 border-teal-200"
        },
        { 
            name: "Graphistes", 
            icon: <Palette className="w-8 h-8" />, 
            description: "Création de supports visuels et communication",
            color: "bg-pink-100 text-pink-600 border-pink-200"
        },
        { 
            name: "Développeurs", 
            icon: <Laptop className="w-8 h-8" />, 
            description: "Solutions numériques et plateformes techniques",
            color: "bg-gray-100 text-gray-600 border-gray-200"
        },
        { 
            name: "Points de vente", 
            icon: <Store className="w-8 h-8" />, 
            description: "Boutiques et lieux de vente physiques",
            color: "bg-orange-100 text-orange-600 border-orange-200"
        },
        { 
            name: "Partenaires institutionnels", 
            icon: <Handshake className="w-8 h-8" />, 
            description: "Organismes publics et privés partenaires",
            color: "bg-cyan-100 text-cyan-600 border-cyan-200"
        }
    ];

    const steps = [
        { 
            number: 1, 
            title: "Envoyer son nom", 
            description: "Commencez par nous communiquer votre identité complète" 
        },
        { 
            number: 2, 
            title: "Présenter ce qu'il fait", 
            description: "Décrivez votre activité et vos compétences" 
        },
        { 
            number: 3, 
            title: "Photo + description", 
            description: "Ajoutez une photo professionnelle et une description détaillée" 
        },
        { 
            number: 4, 
            title: "Preuve d'activité", 
            description: "Fournissez des documents justifiant votre expérience" 
        },
        { 
            number: 5, 
            title: "Validation", 
            description: "Après validation, devenez membre JAD Fibonacci Niveau 1" 
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique de soumission du formulaire
        console.log(formData);
    };

    return (
        <AppShell>
            <Head title="Rejoindre le Réseau JAD" />
            <Breadcrumb title="Rejoindre le Réseau JAD" desc="Devenez membre de notre communauté collaborative"/>
            
            <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
                {/* Hero Section */}
                <div className="relative px-6 sm:px-8 lg:px-12 pt-32 pb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-8 border border-green-200">
                            <UserPlus className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">Rejoignez notre communauté</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900">
                            Rejoindre le <span className="text-green-600">Réseau JAD</span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Devenez acteur de la transformation agricole en rejoignant notre réseau collaboratif
                        </p>
                        
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 max-w-5xl mx-auto">
                            <p className="text-2xl font-light leading-relaxed text-gray-700">
                                Ensemble, nous construisons un écosystème agricole innovant et durable
                            </p>
                        </div>
                    </div>
                </div>

                {/* Catégories de profils */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                                Catégories de profils acceptés
                            </h2>
                            <p className="text-gray-500 text-lg">Découvrez où vous vous situez dans notre écosystème</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`relative bg-white rounded-2xl p-6 border-2 ${category.color} shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${activeCategory === index ? 'scale-105' : ''}`}
                                    onMouseEnter={() => setActiveCategory(index)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <div className={`inline-flex p-3 rounded-full ${category.color.split(' ')[0]} mb-4`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                                    <p className="text-gray-600 text-sm">{category.description}</p>
                                    
                                    {activeCategory === index && (
                                        <div className="absolute top-4 right-4">
                                            <CheckCircle className="w-6 h-6 text-green-500" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Processus d'adhésion */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                                Comment rejoindre ?
                            </h2>
                            <p className="text-gray-500 text-lg">Un processus simple en 5 étapes</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
                            {steps.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 h-full">
                                        <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold text-xl mb-4">
                                            {step.number}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                    
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                                            <ArrowRight className="w-6 h-6 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Formulaire d'inscription */}
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                                    <h3 className="text-2xl font-bold">Formulaire d'inscription</h3>
                                    <p className="text-green-100">Commencez votre parcours dans le Réseau JAD</p>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="Votre nom et prénom"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-2">
                                                Activité principale
                                            </label>
                                            <input
                                                type="text"
                                                id="activity"
                                                name="activity"
                                                value={formData.activity}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="Votre domaine d'expertise"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                            Description de votre activité
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                            placeholder="Décrivez votre expérience, vos compétences et votre projet..."
                                            required
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Adresse e-mail
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="votre@email.com"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Numéro de téléphone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="+243 XXX XXX XXX"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preuve d'activité
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                                            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                            <p className="text-gray-600 mb-2">Cliquez pour télécharger ou glissez-déposez</p>
                                            <p className="text-sm text-gray-500">PDF, JPG, PNG (max. 10MB)</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center mb-6">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                            required
                                        />
                                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                            J'accepte les conditions d'utilisation et la politique de confidentialité
                                        </label>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <UserPlus className="w-5 h-5" />
                                        Soumettre ma demande
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section FAQ */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                                Questions fréquentes
                            </h2>
                            <p className="text-gray-500 text-lg">Tout ce que vous devez savoir sur le Réseau JAD</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "Quels sont les avantages à rejoindre le Réseau JAD ?",
                                    answer: "En rejoignant notre réseau, vous accédez à une communauté collaborative, des formations exclusives, des opportunités de partenariat et la possibilité de progresser grâce à la Méthode JAD Fibonacci™."
                                },
                                {
                                    question: "Combien de temps prend le processus de validation ?",
                                    answer: "Le processus de validation prend généralement entre 5 et 10 jours ouvrables, selon la complétude de votre dossier et le volume de demandes reçues."
                                },
                                {
                                    question: "Puis-je rejoindre le réseau si je suis débutant ?",
                                    answer: "Absolument ! Le Réseau JAD accueille des profils à tous les niveaux d'expérience. Notre méthode est conçue pour accompagner chaque membre dans son développement."
                                },
                                {
                                    question: "Y a-t-il des frais pour rejoindre le réseau ?",
                                    answer: "L'inscription au Réseau JAD est gratuite. Seules certaines formations avancées ou services spécifiques peuvent être payants."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 shadow-xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Prêt à nous rejoindre ?</h2>
                            <p className="text-xl mb-8 text-green-50">
                                Devenez membre du Réseau JAD et participez à la transformation de l'agriculture congolaise
                            </p>
                            <button className="px-8 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
                                <UserPlus className="w-5 h-5" />
                                Rejoindre maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AppShell>
    );
}