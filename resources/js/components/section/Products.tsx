import { ShoppingBag, Clock, MapPin, Phone, Star, Truck } from "lucide-react";
import { useState, useEffect } from "react";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("products");
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

  const products = [
    {
      name: "Œufs de poule locale",
      description:
        "Œufs frais de poules élevées en liberté, riches en nutriments et saveurs authentiques",
      image:
        "https://images.unsplash.com/photo-1583258216-7b0d4740804b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Populaire",
      details: "Boîte de 30 œufs",
      rating: 4.7,
      price: "5,000 CDF",
    },
    {
      name: "Poulets de chair",
      description:
        "Poulets élevés en plein air, nourris aux céréales locales pour une chair savoureuse",
      image:
        "https://images.unsplash.com/photo-1562967916-3dcbe9b9a2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Meilleure vente",
      details: "Poids: 1,8-2,2 kg",
      rating: 4.9,
      price: "25,000 CDF",
    },
    {
      name: "Légumes frais",
      description: "Sélection de légumes locaux cultivés sans produits chimiques",
      image:
        "https://images.unsplash.com/photo-1541696432-82d48c8268a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Bio",
      details: "Au kilo (tomates, oignons, aubergines, etc.)",
      rating: 4.8,
      price: "À partir de 1,500 CDF",
    },
    {
      name: "Fruits de saison",
      description: "Frais cueillis, une explosion de saveurs tropicales",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tag: "Saisonnier",
      details: "Mangues, ananas, papayes, etc.",
      rating: 4.9,
      price: "À partir de 2,000 CDF",
    },
  ];

  return (
    <section
      id="products"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-amber-50 to-slate-50 overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 font-medium text-sm">
              Nos produits
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
            Saveurs locales, <span className="text-green-600">qualité supérieure</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Produits agricoles frais et locaux, cultivés avec passion et respect de l'environnement pour une alimentation saine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative h-full transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br from-green-300 to-amber-300 rounded-3xl opacity-0 transition-opacity duration-300 blur ${hoveredProduct === index ? "opacity-70" : ""}`}
              />

              <div className="relative bg-white rounded-3xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform:
                        hoveredProduct === index
                          ? "scale(110%)"
                          : "scale(100%)",
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${hoveredProduct === index ? "opacity-100" : "opacity-0"}`}
                  />

                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {product.tag}
                  </div>

                  <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md transition-all duration-300">
                    <ShoppingBag
                      className={`w-5 h-5 transition-colors ${hoveredProduct === index ? "text-green-600" : "text-slate-600"}`}
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-opacity duration-300">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium text-slate-700">
                        {product.rating}
                      </span>
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-slate-800 mb-3 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>

                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-sm text-green-700 font-medium">
                      {product.details}
                    </p>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative">
            <h3 className="text-4xl lg:text-5xl font-serif mb-6">
              Prêt à commander ?
            </h3>
            <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Nos produits sont disponibles au marché local chaque samedi matin
              de 7h à 13h, ou sur commande pour les restaurants partenaires et
              livraisons à domicile
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">Marché local</h4>
                <p className="text-white/80">
                  Place du Marché, tous les samedis de 7h à 13h
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Truck className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  Livraison à domicile
                </h4>
                <p className="text-white/80">
                  Commande minimale de 30€, livrée sous 48h
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  Restaurants partenaires
                </h4>
                <p className="text-white/80">
                  Livraison quotidienne pour nos partenaires
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Nous contacter
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/50 rounded-full font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Voir les horaires
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
