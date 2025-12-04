import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Link, router } from "@inertiajs/react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  const toggleVideoPlayback = useCallback(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  }, [isVideoPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
    >
      {/* Overlay de chargement avec animation améliorée */}
      <div
        className={`absolute inset-0 z-10 bg-neutral-900 transition-opacity duration-1000 ease-out ${
          videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-emerald-900/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-300 rounded-full animate-spin animation-delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vidéo avec effet parallaxe et filtre amélioré */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0001})`,
          filter: "contrast(1.1) brightness(0.7) saturate(1.1)",
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

      {/* Contrôles de la vidéo avec design amélioré */}
      {/* <div className="absolute top-6 right-6 z-20 flex gap-3">
        <button
          onClick={toggleMute}
          className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:scale-105"
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
          className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:scale-105"
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
      </div> */}

      {/* Overlays améliorés pour une meilleure lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      
      {/* Effet de texture subtil pour améliorer la lisibilité */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent" />
      </div>

      {/* Contenu avec animations améliorées et meilleure lisibilité */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center pt-16">
        <div
          className={`max-w-3xl transform transition-all duration-1200 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-6 overflow-hidden">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 transform transition-all duration-1000 ease-out delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
                lineHeight: "1.1",
              }}
            >
              JAD Aviculture
            </h1>
            <div
              className={`h-1 w-24 md:w-32 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transform transition-all duration-1000 delay-500 origin-left ${
                isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
              style={{ boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)" }}
            />
          </div>

          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight mb-8 transform transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ 
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
              lineHeight: "1.3",
            }}
          >
            Construire une agriculture moderne, durable et collaborative en RDC grâce à la méthode JAD Fibonacci
          </h2>

          <p
            className={`text-sm sm:text-base md:text-lg text-white/95 mb-10 max-w-2xl leading-relaxed transform transition-all duration-1000 delay-900 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "12px 16px",
              borderRadius: "12px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Nous sommes une entreprise avicole et agro-pastorale basée à Kindele, Kinshasa. 
            Notre mission : produire localement, autonomiser les jeunes, structurer les producteurs et créer un réseau agricole puissant 
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1100 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/50 flex items-center justify-center gap-2 overflow-hidden"
              aria-label="Découvrir notre ferme"
              style={{ 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Découvrir JAD
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

              <Link
                href="/jad-fibonacci"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-500/50 flex items-center justify-center gap-2 overflow-hidden"
                style={{ 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                }}
              >
                Méthode Fibonacci
              </Link>

              <Link
                href='/become-member'
                className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 hover:border-white/50 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
                style={{ 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                Devenir collaborateur
              </Link>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement amélioré */}
      <button
        onClick={() => scrollToSection("about")}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full transition-all duration-300 hover:scale-110"
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

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  );
}