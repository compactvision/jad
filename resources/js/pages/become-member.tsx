import AppShell from "@/layouts/AppShell";
import { Head, router, useForm } from "@inertiajs/react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { JSX, useEffect, useState } from "react";
import { MultiSelectPopup } from "@/components/common/MultiSelectPopup";
import {
  Users,
  Camera,
  Package,
  Store,
  Handshake,
  Laptop,
  Wrench,
  MapPin,
  CheckCircle,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import Alert from "@/utils/sweetAlert";

// Types
interface SelectOption {
  value: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  roles: SelectOption[];
  sectors: SelectOption[];
  province: string;
  city: string;
  description: string;
  avatar: File | null;
  terms: boolean;
}

interface Category {
  name: string;
  icon: JSX.Element;
  description: string;
  color: string;
  value: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Constants
const ROLE_OPTIONS: SelectOption[] = [
  { value: "producteur", label: "Producteur (Éleveur / Agriculteur)" },
  { value: "association_cooperative", label: "Association / Coopérative" },
  { value: "fournisseur_intrants", label: "Fournisseur d'Intrants" },
  { value: "fournisseur_materiel", label: "Fournisseur de Matériel" },
  { value: "transformateur", label: "Transformateur" },
  { value: "transporteur", label: "Transporteur" },
  { value: "acheteur_negociant", label: "Acheteur / Négociant" },
  { value: "distributeur_detail", label: "Distributeur au Détail" },
  { value: "expert_conseil", label: "Expert / Conseiller" },
  { value: "formateur", label: "Formateur" },
  { value: "technicien_semence", label: "Technicien / Relais" },
  { value: "partenaire_financier", label: "Partenaire Financier" },
  { value: "partenaire_developpement", label: "Partenaire de Développement" },
  { value: "gros_consommateur", label: "Gros Consommateur" },
];

const SECTOR_OPTIONS: SelectOption[] = [
  { value: "volaille", label: "Volaille" },
  { value: "elevage_ruminant", label: "Élevage de Ruminants" },
  { value: "cultures_vivrieres", label: "Cultures Vivrières" },
  { value: "cultures_maraicheres", label: "Cultures Maraîchères" },
  { value: "cultures_permanentes", label: "Cultures Pérennes (Arboriculture)" },
  { value: "peche_aquaculture", label: "Pêche & Aquaculture" },
  {
    value: "transformation_agroalimentaire",
    label: "Transformation Agroalimentaire",
  },
  { value: "intrants_agricoles", label: "Intrants Agricoles" },
  { value: "materiel_agricole", label: "Matériel Agricole" },
  { value: "services_veterinaires", label: "Services Vétérinaires" },
  { value: "transport_logistique", label: "Transport & Logistique" },
  { value: "restauration_hotellerie", label: "Restauration & Hôtellerie" },
  { value: "alimentation_detail", label: "Alimentation au Détail" },
  { value: "institutions", label: "Institutions (Écoles, Hôpitaux)" },
  { value: "export_import", label: "Export & Import" },
  { value: "finance_assurance", label: "Finance & Assurance" },
  { value: "formation_recherche", label: "Formation & Recherche" },
  { value: "autre", label: "Autre" },
];

const PROVINCE_OPTIONS: SelectOption[] = [
  { value: "Kinshasa", label: "Kinshasa" },
  { value: "Kongo Central", label: "Kongo Central" },
  { value: "Kwango", label: "Kwango" },
  { value: "Kwilu", label: "Kwilu" },
  { value: "Kasai", label: "Kasai" },
  { value: "Kasai Central", label: "Kasai Central" },
  { value: "Kasai Oriental", label: "Kasai Oriental" },
  { value: "Lomami", label: "Lomami" },
  { value: "Sankuru", label: "Sankuru" },
  { value: "Maniema", label: "Maniema" },
  { value: "Sud-Kivu", label: "Sud-Kivu" },
  { value: "Nord-Kivu", label: "Nord-Kivu" },
  { value: "Ituri", label: "Ituri" },
  { value: "Haut-Uele", label: "Haut-Uele" },
  { value: "Tshopo", label: "Tshopo" },
  { value: "Bas-Uele", label: "Bas-Uele" },
  { value: "Nord-Ubangi", label: "Nord-Ubangi" },
  { value: "Sud-Ubangi", label: "Sud-Ubangi" },
  { value: "Équateur", label: "Équateur" },
  { value: "Mongala", label: "Mongala" },
  { value: "Tanganyika", label: "Tanganyika" },
  { value: "Haut-Lomami", label: "Haut-Lomami" },
  { value: "Lualaba", label: "Lualaba" },
  { value: "Haut-Katanga", label: "Haut-Katanga" },
];

const CATEGORIES: Category[] = [
  {
    name: "Producteur",
    icon: <Users className="w-8 h-8" />,
    description: "Producteur de biens agricoles ou d'élevage",
    color: "bg-green-100 text-green-600 border-green-200",
    value: "producteur",
  },
  {
    name: "Association/Coopérative",
    icon: <Handshake className="w-8 h-8" />,
    description: "Représentant d'un groupe de producteurs",
    color: "bg-green-100 text-green-600 border-green-200",
    value: "association_cooperative",
  },
  {
    name: "Fournisseur d'Intrants",
    icon: <Package className="w-8 h-8" />,
    description: "Vente de semences, engrais et produits phytosanitaires",
    color: "bg-amber-100 text-amber-600 border-amber-200",
    value: "fournisseur_intrants",
  },
  {
    name: "Fournisseur de Matériel",
    icon: <Wrench className="w-8 h-8" />,
    description: "Vente et location de matériel agricole",
    color: "bg-amber-100 text-amber-600 border-amber-200",
    value: "fournisseur_materiel",
  },
  {
    name: "Transformateur",
    icon: <Wrench className="w-8 h-8" />,
    description: "Transformation des produits agricoles",
    color: "bg-red-100 text-red-600 border-red-200",
    value: "transformateur",
  },
  {
    name: "Transporteur",
    icon: <MapPin className="w-8 h-8" />,
    description: "Transport des produits agricoles",
    color: "bg-blue-100 text-blue-600 border-blue-200",
    value: "transporteur",
  },
  {
    name: "Acheteur/Négociant",
    icon: <Store className="w-8 h-8" />,
    description: "Achat et revente de produits agricoles",
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
    value: "acheteur_negociant",
  },
  {
    name: "Distributeur au Détail",
    icon: <Store className="w-8 h-8" />,
    description: "Vente au détail aux consommateurs finaux",
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
    value: "distributeur_detail",
  },
  {
    name: "Expert/Conseiller",
    icon: <Users className="w-8 h-8" />,
    description: "Conseil technique de haut niveau",
    color: "bg-purple-100 text-purple-600 border-purple-200",
    value: "expert_conseil",
  },
  {
    name: "Formateur",
    icon: <Laptop className="w-8 h-8" />,
    description: "Formation et renforcement des capacités",
    color: "bg-purple-100 text-purple-600 border-purple-200",
    value: "formateur",
  },
  {
    name: "Technicien/Relais",
    icon: <MapPin className="w-8 h-8" />,
    description: "Suivi terrain et appui technique",
    color: "bg-teal-100 text-teal-600 border-teal-200",
    value: "technicien_semence",
  },
  {
    name: "Partenaire Financier",
    icon: <Handshake className="w-8 h-8" />,
    description: "Solutions de financement et d'assurance",
    color: "bg-cyan-100 text-cyan-600 border-cyan-200",
    value: "partenaire_financier",
  },
];

const STEPS: Step[] = [
  {
    number: 1,
    title: "Informations personnelles",
    description:
      "Commencez par nous communiquer votre identité complète et vos coordonnées",
  },
  {
    number: 2,
    title: "Rôle et secteur",
    description:
      "Sélectionnez votre rôle principal et votre secteur d'activité",
  },
  {
    number: 3,
    title: "Localisation",
    description: "Indiquez votre province et votre ville",
  },
  {
    number: 4,
    title: "Description",
    description: "Décrivez votre activité et vos compétences",
  },
  {
    number: 5,
    title: "Photo de profil",
    description:
      "Ajoutez une photo professionnelle pour compléter votre profil",
  },
  {
    number: 6,
    title: "Validation",
    description: "Après validation, devenez membre JAD Fibonacci Niveau 1",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Quels sont les avantages à rejoindre le Réseau JAD ?",
    answer:
      "En rejoignant notre réseau, vous accédez à une communauté collaborative, des formations exclusives, des opportunités de partenariat et la possibilité de progresser grâce à la Méthode JAD Fibonacci™.",
  },
  {
    question: "Combien de temps prend le processus de validation ?",
    answer:
      "Le processus de validation prend généralement entre 5 et 10 jours ouvrables, selon la complétude de votre dossier et le volume de demandes reçues.",
  },
  {
    question: "Puis-je rejoindre le réseau si je suis débutant ?",
    answer:
      "Absolument ! Le Réseau JAD accueille des profils à tous les niveaux d'expérience. Notre méthode est conçue pour accompagner chaque membre dans son développement.",
  },
  {
    question: "Y a-t-il des frais pour rejoindre le réseau ?",
    answer:
      "L'inscription au Réseau JAD est gratuite. Seules certaines formations avancées ou services spécifiques peuvent être payants.",
  },
];

export default function Member() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [errorsForm, setErrorsForm] = useState({});

  const { data, setData, post, processing, errors, reset } = useForm<FormData>({
    name: "",
    email: "",
    phone: "",
    roles: [],
    sectors: [],
    province: "",
    city: "",
    description: "",
    avatar: null,
    terms: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const finalValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setData(name as keyof FormData, finalValue as never);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData("avatar", file as never);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Préparer les données pour le log
    const formDataForLog = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      roles: data.roles.map((r) => r.value),
      sectors: data.sectors.map((s) => s.value),
      province: data.province,
      city: data.city,
      description: data.description,
      avatar: data.avatar
        ? {
            name: data.avatar.name,
            size: data.avatar.size,
            type: data.avatar.type,
          }
        : null,
      terms: data.terms,
    };

    console.log("=== Données du formulaire ===");
    console.log(formDataForLog);
    console.log("===========================");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("city", data.city);
    formData.append("description", data.description);
    formData.append("province", data.province);

    // Append roles as array
    data.roles.forEach((role, index) => {
      formData.append(`roles[${index}]`, role.value);
    });

    // Append sectors as array
    data.sectors.forEach((sector, index) => {
      formData.append(`sectors[${index}]`, sector.value);
    });

    if (data.avatar) formData.append("avatar", data.avatar);

    formData.append("terms", data.terms ? "1" : "0");

    router.post("/become-member", formData, {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        reset();
        Alert.success("Membre crée avec succès !", "Succès!");
        console.log("Membre créé avec succès !");
      },
      onError: (errors) => {
        Alert.error("Erreur de validation", "Erreur!");
        setErrorsForm(errors);
        console.error("Erreurs de validation:", errors);
      },
    });
  };

  // Fonction pour extraire les erreurs de manière robuste
  // Fonction simplifiée pour extraire les erreurs
  const getError = (fieldName: string) => {
    if (!errorsForm) return null;

    // Accès direct à la propriété avec conversion any
    const errorsObj = errorsForm as any;
    return errorsObj[fieldName] || null;
  };

  return (
    <AppShell>
      <Head title="Rejoindre le Réseau JAD" />
      <Breadcrumb
        title="Rejoindre le Réseau JAD"
        desc="Devenez membre de notre communauté collaborative"
      />

      {/* Hero Section */}
      <div className="relative px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-8 border border-green-200">
            <UserPlus className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Rejoignez notre communauté
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900">
            Rejoindre le <span className="text-green-600">Réseau JAD</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Devenez acteur de la transformation agricole en rejoignant notre
            réseau collaboratif
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 max-w-5xl mx-auto">
            <p className="text-2xl font-light leading-relaxed text-gray-700">
              Ensemble, nous construisons un écosystème agricole innovant et
              durable
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
            <p className="text-gray-500 text-lg">
              Découvrez où vous vous situez dans notre écosystème
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CATEGORIES.map((category, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 border-2 ${category.color} shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  activeCategory === index ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div
                  className={`inline-flex p-3 rounded-full ${
                    category.color.split(" ")[0]
                  } mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
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
            <p className="text-gray-500 text-lg">
              Un processus simple en 6 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {STEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Formulaire d'inscription */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <h3 className="text-2xl font-bold">Formulaire d'inscription</h3>
                <p className="text-green-100">
                  Commencez votre parcours dans le Réseau JAD
                </p>
              </div>

              <form onSubmit={submit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        getError("name") ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Votre nom et prénom"
                    />
                    {getError("name") && (
                      <p className="text-red-500 text-xs mt-1">
                        {Array.isArray(getError("name"))
                          ? getError("name")?.join(", ")
                          : getError("name")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        getError("email") ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="votre@email.com"
                    />
                    {getError("email") && (
                      <p className="text-red-500 text-xs mt-1">
                        {Array.isArray(getError("email"))
                          ? getError("email")?.join(", ")
                          : getError("email")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={data.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        getError("phone") ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+243 XXX XXX XXX"
                    />
                    {getError("phone") && (
                      <p className="text-red-500 text-xs mt-1">
                        {Array.isArray(getError("phone"))
                          ? getError("phone")?.join(", ")
                          : getError("phone")}
                      </p>
                    )}
                  </div>

                  <div>
                    <MultiSelectPopup
                      options={ROLE_OPTIONS}
                      selectedValues={data.roles}
                      onChange={(selected) =>
                        setData("roles", selected as never)
                      }
                      label="Rôle(s)"
                      placeholder="Sélectionnez un ou plusieurs rôles"
                      error={
                        getError("roles")
                          ? Array.isArray(getError("roles"))
                            ? getError("roles")?.join(", ")
                            : getError("roles")
                          : undefined
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <MultiSelectPopup
                      options={SECTOR_OPTIONS}
                      selectedValues={data.sectors}
                      onChange={(selected) =>
                        setData("sectors", selected as never)
                      }
                      label="Secteur(s) d'activité"
                      placeholder="Sélectionnez un ou plusieurs secteurs"
                      error={
                        getError("sectors")
                          ? Array.isArray(getError("sectors"))
                            ? getError("sectors")?.join(", ")
                            : getError("sectors")
                          : undefined
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="province"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Province / Région
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={data.province}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        getError("province")
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Ex: Kinshasa, Paris, New York..."
                    />
                    {getError("province") && (
                      <p className="text-red-500 text-xs mt-1">
                        {Array.isArray(getError("province"))
                          ? getError("province")?.join(", ")
                          : getError("province")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ville
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={data.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      getError("city") ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Votre ville"
                  />
                  {getError("city") && (
                    <p className="text-red-500 text-xs mt-1">
                      {Array.isArray(getError("city"))
                        ? getError("city")?.join(", ")
                        : getError("city")}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Description de votre activité
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      getError("description")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Décrivez votre expérience, vos compétences et votre projet..."
                  />
                  {getError("description") && (
                    <p className="text-red-500 text-xs mt-1">
                      {Array.isArray(getError("description"))
                        ? getError("description")?.join(", ")
                        : getError("description")}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo de profil (Avatar)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <label htmlFor="avatar" className="cursor-pointer">
                      {data.avatar ? (
                        <div className="flex flex-col items-center">
                          <img
                            src={URL.createObjectURL(data.avatar)}
                            alt="Aperçu"
                            className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                          />
                          <p className="text-green-600 font-medium">
                            {data.avatar.name}
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 mb-2">
                            Cliquez pour télécharger une photo
                          </p>
                          <p className="text-sm text-gray-500">
                            JPG, PNG (max. 2MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  {getError("avatar") && (
                    <p className="text-red-500 text-xs mt-1">
                      {Array.isArray(getError("avatar"))
                        ? getError("avatar")?.join(", ")
                        : getError("avatar")}
                    </p>
                  )}
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={data.terms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    J'accepte les conditions d'utilisation et la politique de
                    confidentialité
                  </label>
                </div>
                {getError("terms") && (
                  <p className="text-red-500 text-xs mb-6">
                    {Array.isArray(getError("terms"))
                      ? getError("terms")?.join(", ")
                      : getError("terms")}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <UserPlus className="w-5 h-5" />
                  {processing
                    ? "Soumission en cours..."
                    : "Soumettre ma demande"}
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
            <p className="text-gray-500 text-lg">
              Tout ce que vous devez savoir sur le Réseau JAD
            </p>
          </div>

          <div className="space-y-6">
            {FAQS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Devenez membre du Réseau JAD et participez à la transformation de
              l'agriculture congolaise
            </p>
            <button className="px-8 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
              <UserPlus className="w-5 h-5" />
              Rejoindre maintenant
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
