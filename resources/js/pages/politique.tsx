import React from "react";
import AppShell from "@/layouts/AppShell";
import { Head } from "@inertiajs/react";
import Breadcrumb from "@/components/common/Breadcrumb";

// Données de la politique de confidentialité
// Cela te permet de modifier le texte facilement sans casser le layout
const privacySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <p>
        Chez <strong>JAD Aviculture</strong>, nous nous engageons à protéger et à respecter votre vie privée. 
        Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles 
        lorsque vous utilisez notre site web et nos services. En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
      </p>
    ),
  },
  {
    id: "collecte",
    title: "2. Collecte des données",
    content: (
      <div className="space-y-4">
        <p>
          Nous collectons plusieurs types d'informations pour vous fournir, améliorer et personnaliser nos services :
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
          <li><strong>Données d'identification :</strong> Nom, prénom, adresse e-mail et numéro de téléphone.</li>
          <li><strong>Données techniques :</strong> Adresse IP, type de navigateur, fournisseur d'accès à Internet (FAI).</li>
          <li><strong>Données de navigation :</strong> Pages consultées, temps passé sur le site et clics effectués.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "utilisation",
    title: "3. Utilisation des données",
    content: (
      <div className="space-y-4">
        <p>Nous utilisons vos données pour les finalités suivantes :</p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
          <li>Traiter vos demandes et transactions.</li>
          <li>Vous envoyer des notifications techniques et mises à jour de service.</li>
          <li>Améliorer l'expérience utilisateur et nos produits.</li>
          <li>Se conformer aux obligations légales et réglementaires.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "partage",
    title: "4. Partage des données",
    content: (
      <p>
        Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos données uniquement avec 
        nos partenaires de confiance (services d'hébergement, outils d'analyse) qui nous aident à exploiter notre site, 
        sous réserve qu'ils s'engagent à garder vos informations confidentielles.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies et Traceurs",
    content: (
      <div className="space-y-4">
        <p>
          Nous utilisons des cookies pour collecter des informations sur vos préférences et votre historique de navigation.
          Vous pouvez configurer votre navigateur pour refuser tous les cookies, mais cela peut empêcher certaines parties 
          du site de fonctionner correctement.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700 text-sm">
            <strong>Note :</strong> Nous utilisons Google Analytics pour analyser le trafic du site.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "droits",
    title: "6. Vos droits (RGPD)",
    content: (
      <div className="space-y-4">
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
          <li>Droit d'accès à vos données.</li>
          <li>Droit de rectification.</li>
          <li>Droit à l'effacement (« droit à l'oubli »).</li>
          <li>Droit à la portabilité des données.</li>
        </ul>
        <p className="mt-4">
          Pour exercer ces droits, veuillez nous contacter à l'adresse : 
          <a href="mailto:contact@jadaviculture.com" className="text-blue-600 hover:underline ml-1">contact@jadaviculture.com</a>.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    title: "7. Contact",
    content: (
      <p>
        Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques de traitement des données, 
        n'hésitez pas à nous contacter.
      </p>
    ),
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <AppShell>
      <Head title="Politique de Confidentialité" />
      <Breadcrumb
        title={`Politique de Confidentialité`}
        desc="Gestion des membres"
      />
      
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header de la page */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-slate-600">
              Dernière mise à jour : <span className="font-medium text-slate-900">30 Décembre 2025</span>
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            
            {/* Sidebar Navigation (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4">
              <nav className="sticky top-24 space-y-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Sur cette page
                </div>
                <ul className="space-y-1 border-l-2 border-slate-200">
                  {privacySections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block pl-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:border-blue-600 border-l-2 border-transparent -ml-px transition-colors duration-200"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Contenu Principal */}
            <main className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
              <article className="prose prose-slate prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="mb-10">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Chez <strong className="text-slate-900">JAD Aviculture</strong>, 
                    la confidentialité de vos données est une priorité absolue. 
                    Ce document détaille comment nous gérons vos informations personnelles.
                  </p>
                </div>

                <hr className="my-8 border-slate-100" />

                {/* Rendu dynamique des sections */}
                {privacySections.map((section) => (
                  <section 
                    key={section.id} 
                    id={section.id} 
                    className="scroll-mt-24 mb-10"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                      {section.title}
                    </h2>
                    <div className="text-slate-600">
                      {section.content}
                    </div>
                  </section>
                ))}

                {/* Pied de page du document */}
                <div className="mt-16 pt-8 border-t border-slate-200 text-center">
                  <p className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} JAD Aviculture. Tous droits réservés.
                  </p>
                </div>

              </article>
            </main>
          </div>
        </div>
      </div>
    </AppShell>
  );
}