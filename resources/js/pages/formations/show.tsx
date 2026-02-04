import AppShell from "@/layouts/AppShell";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, CheckCircle2 } from "lucide-react";
import { SimpleBreadcrumb } from "@/components/common/SimpleBreadcrumb";
import Breadcrumb from "@/components/common/Breadcrumb";

interface Training {
  id: number;
  title: string;
  description: string;
  pdf_path: string;
  allowed_pages: number;
}

export default function FormationShow({ training }: { training: Training }) {
  return (
    <AppShell>
      <Head title={training.title} />
      <Breadcrumb
        title={`Formations : ${training.title}`}
        desc="Gestion des formations"
      />

      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleBreadcrumb
            items={[
              { label: "Formations", href: "/" },
              { label: training.title, href: "#" },
            ]}
          />

          <Link href="/">
            <Button variant="ghost" className="mb-8 hover:bg-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux formations
            </Button>
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Book Representation */}
              <div className="bg-green-900 p-12 flex items-center justify-center">
                <div className="w-[300px] h-[400px] bg-green-950 rounded-r-2xl shadow-2xl relative overflow-hidden border-l-8 border-green-800 flex flex-col justify-end p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 blur-3xl rounded-full" />
                  <FileText className="w-16 h-16 text-green-500 mb-6" />
                  <h1 className="text-3xl font-display font-bold text-white mb-2 leading-tight">
                    {training.title}
                  </h1>
                  <div className="w-12 h-1 bg-green-400 rounded-full mb-8" />
                  <p className="text-green-200 text-sm font-medium uppercase tracking-widest">
                    JAD Aviculture Academy
                  </p>
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                  Nouveau Programme
                </div>

                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Résumé de la formation
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {training.description ||
                    "Aucune description détaillée disponible pour le moment."}
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      Accès immédiat au support de cours (PDF)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      Lecture en ligne ({training.allowed_pages} premières
                      pages)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      Ressources téléchargeables incluses
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* For now, reading redirects to the admin view or a public viewer if we had one. 
                        Let's use the same view for public if possible or a dedicated one.
                    */}
                  <Link
                    href={route("formations.read", training.id)}
                    className="flex-1"
                  >
                    <Button className="w-full h-14 bg-green-900 hover:bg-green-800 text-lg rounded-2xl">
                      Accéder au lecteur
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="flex-1 h-14 border-2 border-gray-200 hover:border-red-600 hover:text-red-700 text-lg rounded-2xl cursor-not-allowed opacity-60"
                    onClick={() =>
                      alert(
                        "Téléchargement non autorisé. Veuillez contacter l'administrateur pour obtenir une copie complète du document.",
                      )
                    }
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger (Bloqué)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
