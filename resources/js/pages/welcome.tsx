import Hero from "@/components/section/home/Hero";
import AppShell from "@/layouts/AppShell";
import About from "@/components/section/home/About";
import Products from "@/components/section/home/Products";
import Values from "@/components/section/home/Values";
import Testimonials from "@/components/section/home/Testimonials";
import Contact from "@/components/section/home/Contact";
import { Head } from "@inertiajs/react";
import { BookCard } from "@/components/formations/BookCard";

interface Training {
  id: number;
  title: string;
  description: string;
  pdf_path: string;
  color?: string;
}

export default function Welcome({ trainings }: { trainings: Training[] }) {
  return (
    <AppShell>
      <Head title="Accueil" />
      <Hero />
      <About />

      {/* Formations Section */}
      {trainings && trainings.length > 0 && (
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-4">
                Nos Formations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Explorez nos ressources pédagogiques pour approfondir vos
                connaissances en agriculture durable.
              </p>
              <div className="w-20 h-1.5 bg-green-600 rounded-full mt-6" />
            </div>

            <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
              {trainings.map((training) => (
                <BookCard
                  key={training.id}
                  id={training.id}
                  title={training.title}
                  description={training.description}
                  pdfPath={training.pdf_path}
                  color={training.color}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Products />
      <Values />
      <Testimonials />
      <Contact />
    </AppShell>
  );
}
