import Breadcrumb from "@/components/common/Breadcrumb";
import AppShell from "@/layouts/AppShell";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FileText, Download, Eye, Calendar, Shield, Users, Award, Target, Clock, CheckCircle, AlertCircle, Search, Filter } from "lucide-react";

export default function Documents() {
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showPreview, setShowPreview] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            setIsVisible(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const documents = [
        {
            id: "executive-summary",
            title: "Executive Summary",
            description: "Vue d'ensemble complète du projet JAD Aviculture SARL, incluant notre vision, mission et objectifs stratégiques.",
            category: "strategic",
            icon: <FileText className="w-8 h-8" />,
            color: "bg-green-100 text-green-600 border-green-200",
            size: "2.4 MB",
            date: "15 septembre 2025",
            pages: 12,
            featured: true
        },
        {
            id: "jad-fibonacci",
            title: "Méthode JAD Fibonacci™",
            description: "Présentation détaillée de notre méthode exclusive de progression collaborative pour les producteurs agricoles.",
            category: "method",
            icon: <Award className="w-8 h-8" />,
            color: "bg-amber-100 text-amber-600 border-amber-200",
            size: "3.1 MB",
            date: "10 septembre 2025",
            pages: 18,
            featured: true
        },
        {
            id: "business-plan",
            title: "Plan d'affaires",
            description: "Analyse complète du marché, projections financières et stratégie de croissance pour JAD Aviculture SARL.",
            category: "strategic",
            icon: <Target className="w-8 h-8" />,
            color: "bg-blue-100 text-blue-600 border-blue-200",
            size: "4.7 MB",
            date: "5 septembre 2025",
            pages: 24
        },
        {
            id: "association-contract",
            title: "Annexe du contrat d'association",
            description: "Document légal détaillant les termes et conditions pour devenir membre du réseau JAD.",
            category: "legal",
            icon: <Shield className="w-8 h-8" />,
            color: "bg-purple-100 text-purple-600 border-purple-200",
            size: "1.2 MB",
            date: "1 septembre 2025",
            pages: 8
        },
        {
            id: "official-presentation",
            title: "Présentation officielle (Ministère de la Jeunesse)",
            description: "Présentation formelle destinée aux partenaires institutionnels et au Ministère de la Jeunesse.",
            category: "institutional",
            icon: <Users className="w-8 h-8" />,
            color: "bg-red-100 text-red-600 border-red-200",
            size: "5.3 MB",
            date: "20 août 2025",
            pages: 16
        },
        {
            id: "10-days-report",
            title: "Rapport des 10 jours",
            description: "Compte-rendu détaillé des activités et réalisations lors de notre programme intensif de 10 jours.",
            category: "report",
            icon: <Calendar className="w-8 h-8" />,
            color: "bg-indigo-100 text-indigo-600 border-indigo-200",
            size: "2.8 MB",
            date: "25 août 2025",
            pages: 14
        },
        {
            id: "strategic-calendar",
            title: "Calendrier stratégique",
            description: "Planning détaillé des activités, formations et événements JAD pour l'année 2025-2026.",
            category: "planning",
            icon: <Clock className="w-8 h-8" />,
            color: "bg-teal-100 text-teal-600 border-teal-200",
            size: "1.5 MB",
            date: "30 août 2025",
            pages: 6
        }
    ];

    const categories = [
        { id: "all", label: "Tous les documents", icon: <FileText className="w-4 h-4" /> },
        { id: "strategic", label: "Stratégique", icon: <Target className="w-4 h-4" /> },
        { id: "method", label: "Méthode", icon: <Award className="w-4 h-4" /> },
        { id: "legal", label: "Légal", icon: <Shield className="w-4 h-4" /> },
        { id: "institutional", label: "Institutionnel", icon: <Users className="w-4 h-4" /> },
        { id: "report", label: "Rapports", icon: <Calendar className="w-4 h-4" /> },
        { id: "planning", label: "Planification", icon: <Clock className="w-4 h-4" /> }
    ];

    const filteredDocuments = documents.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            doc.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleDownload = (documentId: string) => {
        // Logique de téléchargement du document
        console.log(`Téléchargement du document: ${documentId}`);
        // Dans une application réelle, cela déclencherait le téléchargement du fichier PDF
    };

    const handlePreview = (documentId: string) => {
        setShowPreview(showPreview === documentId ? null : documentId);
    };

    return (
        <AppShell>
            <Head title="Documents Officiels" />
            <Breadcrumb title="Documents Officiels" desc="Ressources officielles de JAD Aviculture SARL"/>
            
            <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
                {/* Hero Section */}
                <div className="relative px-6 sm:px-8 lg:px-12 pt-32 pb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-8 border border-green-200">
                            <FileText className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">Centre de ressources</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900">
                            Documents <span className="text-green-600">Officiels</span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Accédez à l'ensemble de nos documents officiels pour mieux comprendre notre vision, 
                            notre méthode et nos stratégies de développement
                        </p>
                        
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 max-w-5xl mx-auto">
                            <p className="text-2xl font-light leading-relaxed text-gray-700">
                                Explorez notre collection de ressources stratégiques, légales et opérationnelles 
                                conçues pour soutenir la croissance de notre réseau collaboratif
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section de recherche et filtrage */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
                            <div className="relative w-full lg:w-1/2">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un document..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                                />
                            </div>
                            
                            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                                            selectedCategory === category.id
                                                ? "bg-green-600 text-white"
                                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                                        }`}
                                    >
                                        {category.icon}
                                        <span className="text-sm">{category.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="text-sm text-gray-600">
                            {filteredDocuments.length} document{filteredDocuments.length > 1 ? 's' : ''} trouvé{filteredDocuments.length > 1 ? 's' : ''}
                        </div>
                    </div>
                </div>

                {/* Grille de documents */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredDocuments.map((doc, index) => (
                                <div
                                    key={doc.id}
                                    className={`bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {doc.featured && (
                                        <div className="bg-gradient-to-r from-green-600 to-amber-600 text-white px-4 py-2 text-center text-sm font-medium">
                                            Document vedette
                                        </div>
                                    )}
                                    
                                    <div className="p-6">
                                        <div className={`inline-flex p-3 rounded-full ${doc.color} mb-4`}>
                                            {doc.icon}
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{doc.description}</p>
                                        
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                            <span>{doc.size}</span>
                                            <span>{doc.pages} pages</span>
                                            <span>{doc.date}</span>
                                        </div>
                                        
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleDownload(doc.id)}
                                                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Download className="w-4 h-4" />
                                                Télécharger
                                            </button>
                                            <button
                                                onClick={() => handlePreview(doc.id)}
                                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Section de prévision (affichée lors du clic sur l'icône d'œil) */}
                                    {showPreview === doc.id && (
                                        <div className="border-t border-gray-200 p-6 bg-gray-50">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-semibold text-gray-900">Aperçu du document</h4>
                                                <button
                                                    onClick={() => setShowPreview(null)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 h-64 flex items-center justify-center border border-gray-200">
                                                <div className="text-center">
                                                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                                    <p className="text-gray-600 mb-2">Aperçu non disponible</p>
                                                    <p className="text-sm text-gray-500">Téléchargez le document pour consulter son contenu</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        {filteredDocuments.length === 0 && (
                            <div className="text-center py-16">
                                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun document trouvé</h3>
                                <p className="text-gray-500">Essayez de modifier votre recherche ou vos filtres</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section d'informations supplémentaires */}
                <div className="relative px-6 sm:px-8 lg:px-12 py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                                Informations importantes
                            </h2>
                            <p className="text-gray-500 text-lg">Tout ce que vous devez savoir sur nos documents officiels</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                                <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidentialité</h3>
                                <p className="text-gray-600">
                                    Certains documents contiennent des informations sensibles et sont destinés à un usage interne uniquement.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                                <div className="inline-flex p-3 bg-amber-100 rounded-full mb-4">
                                    <AlertCircle className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mises à jour</h3>
                                <p className="text-gray-600">
                                    Nos documents sont régulièrement mis à jour pour refléter l'évolution de nos activités et stratégies.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                                <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authenticité</h3>
                                <p className="text-gray-600">
                                    Tous nos documents officiels sont validés par la direction de JAD Aviculture SARL.
                                </p>
                            </div>
                        </div>
                        
                        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 shadow-xl text-white text-center">
                            <h3 className="text-3xl font-bold mb-4">Besoin d'un document spécifique ?</h3>
                            <p className="text-xl mb-8 text-green-50">
                                Contactez-nous pour obtenir plus d'informations ou des documents personnalisés
                            </p>
                            <button className="px-8 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
                                <FileText className="w-5 h-5" />
                                Contacter le support
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AppShell>
    );
}