import { useEffect, useState, useRef } from "react";
import { ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Suivre la position de défilement pour un effet parallaxe
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-natural-brown"
    >
      {/* Overlay de chargement avec animation */}
      <div
        className={`absolute inset-0 z-10 bg-natural-brown transition-opacity duration-1000 ${videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-natural-brown to-soft-green/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-warm-white/30 border-t-warm-white rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      {/* Vidéo avec effet parallaxe et filtre pour améliorer le contraste */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: "contrast(1.1) brightness(0.7)",
        }}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        poster="https://images.pexels.com/photos/2317907/pexels-photo-2317907.jpeg?auto=compress&cs=tinysrgb&w=1920"
        aria-label="Vidéo cinématique montrant des poulets fermiers en liberté dans la nature"
        onLoadedData={handleVideoLoaded}
        onError={() => setVideoLoaded(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Contrôles de la vidéo */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleMute}
          className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-warm-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-warm-white/50"
          aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={toggleVideoPlayback}
          className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-warm-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-warm-white/50"
          aria-label={
            isVideoPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"
          }
        >
          {isVideoPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Overlays renforcés pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Effet de texture subtil pour améliorer la lisibilité */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      </div>

      {/* Contenu avec animations améliorées et meilleure lisibilité */}
      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center pt-16">
        <div
          className={`max-w-2xl transform transition-all duration-1200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-8 overflow-hidden">
            <h1
              className={`text-7xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-2 transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                WebkitTextStroke: "1px rgba(0, 0, 0, 0.3)",
              }}
            >
              JAD
            </h1>
            <div
              className={`h-1 w-24 bg-gold-accent rounded-full transform transition-all duration-1000 delay-500 origin-left ${
                isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
              style={{ boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)" }}
            />
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6 transform transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)" }}
          >
            L'excellence agricole
            <br />
            au cœur de la RDC
          </h2>

          <p
            className={`text-lg sm:text-xl text-white/95 mb-10 max-w-xl leading-relaxed transform transition-all duration-1000 delay-900 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              textShadow: "0 1px 5px rgba(0, 0, 0, 0.8)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "8px 12px",
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
            }}
          >
            Agriculture biologique locale, éthique et respectueuse de l'environnement
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1100 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="group relative px-8 py-4 bg-soft-green hover:bg-soft-green/90 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-soft-green/50 flex items-center justify-center gap-2 overflow-hidden"
              aria-label="Découvrir notre ferme"
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Découvrir JAD
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="group px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 hover:border-white/70 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="Voir nos produits"
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              Nos produits
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement amélioré */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
        aria-label="Défiler vers le bas"
      >
        <div className="flex flex-col items-center gap-2">
              <span className="text-white/80 text-sm animate-pulse font-medium">
            En savoir plus
          </span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 animate-bounce"></div>
          </div>
        </div>
      </button>
    </section>
  );
}
