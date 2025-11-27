import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { CircleFadingArrowUp } from 'lucide-react';

export default function AppShell({ children }: { children: React.ReactNode }) {
    // État pour suivre si la page a été scrollée (pour le header)
    const [scrolled, setScrolled] = useState(false);
    // État pour gérer l'affichage du bouton "retour en haut"
    const [showScrollTop, setShowScrollTop] = useState(false);

    // useEffect unique pour gérer tous les effets liés au scroll
    useEffect(() => {
        const handleScroll = () => {
            // 1. Logique pour le header : change l'état si on scroll de plus de 50px
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // 2. Logique pour le bouton "retour en haut" : s'affiche après 300px de scroll
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        // Ajoute l'écouteur d'événement de scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Nettoie l'écouteur quand le composant est démonté pour éviter les fuites de mémoire
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]); // La dépendance `scrolled` assure que l'état est bien comparé à chaque scroll

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // useEffect pour les attributs data-* (gardé si nécessaire)
    useEffect(() => {
        document.querySelectorAll('[data-background]').forEach((element) => {
            const url = element.getAttribute('data-background');
            if (url) {
                (element as HTMLElement).style.backgroundImage = `url(${url})`;
            }
        });

        document.querySelectorAll('[data-bg-color]').forEach((element) => {
            const color = element.getAttribute('data-bg-color');
            if (color) {
                (element as HTMLElement).style.backgroundColor = color;
            }
        });
    }, []);

    return (
        <div className={`flex min-h-screen flex-col`}>
            {/* Le header reçoit maintenant l'état 'scrolled' dynamique */}
            <Header scrolled={scrolled} />

            {/* Contenu principal avec padding pour éviter le header fixe */}
            <main className="flex-grow transition-colors duration-300">
                <div className="animate-fadeIn">{children}</div>
            </main>

            <Footer />

            {/* Bouton pour remonter en haut de la page */}
            <button
                onClick={scrollToTop}
                className={`fixed right-8 bottom-8 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
                    showScrollTop ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
                }`}
                aria-label="Retour en haut de la page"
            >
                <CircleFadingArrowUp />
            </button>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
}