import { useState, useEffect } from "react";
import AppShell from "@/layouts/AppShell";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { SimpleBreadcrumb } from "@/components/common/SimpleBreadcrumb";
import Breadcrumb from "@/components/common/Breadcrumb";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Training {
  id: number;
  title: string;
  description: string;
  pdf_path: string;
  allowed_pages: number;
}

export default function FormationRead({ training }: { training: Training }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      const el = document.getElementById("pdf-container");
      if (el) setContainerWidth(el.clientWidth - 32); // Subtract padding
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isBookOpen]);

  useEffect(() => {
    // Trigger book opening animation after mount
    const timer = setTimeout(() => setIsBookOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const handlePrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    if (pageNumber < training.allowed_pages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  return (
    <AppShell>
      <Head title={`Lecture - ${training.title}`} />
      <Breadcrumb
        title={`Formations : ${training.title}`}
        desc="Gestion des formations"
      />

      {/* Book Opening Animation Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-1500 ease-out ${
          isBookOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ backgroundColor: training.color || "#064e3b" }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            className={`relative w-full max-w-[600px] aspect-[3/4] transition-all duration-1500 ease-out ${
              isBookOpen ? "scale-150 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* Book Cover Opening Animation */}
            <div className="absolute inset-0 flex">
              {/* Left Page */}
              <div
                className={`w-1/2 h-full border-r-2 flex items-center justify-center transition-transform duration-1500 ease-out origin-right ${
                  isBookOpen ? "-rotate-y-90" : "rotate-y-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  backgroundColor: training.color || "#064e3b",
                  borderColor: `${training.color}88` || "#065f46",
                }}
              >
                <div className="text-white text-4xl font-bold">JAD</div>
              </div>

              {/* Right Page */}
              <div
                className={`w-1/2 h-full border-l-2 flex items-center justify-center transition-transform duration-1500 ease-out origin-left ${
                  isBookOpen ? "rotate-y-90" : "rotate-y-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  backgroundColor: training.color || "#064e3b",
                  borderColor: `${training.color}88` || "#065f46",
                }}
              >
                <div className="text-white text-2xl font-display">
                  {training.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleBreadcrumb
            items={[
              { label: "Formations", href: "/" },
              {
                label: training.title,
                href: route("formations.show", training.id),
              },
              { label: "Lecture", href: "#" },
            ]}
          />

          <div className="flex items-center justify-between mb-6">
            <Link href={route("formations.show", training.id)}>
              <Button variant="ghost">
                <X className="w-4 h-4 mr-2" />
                Fermer le lecteur
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Lecture limitée à {training.allowed_pages} pages
              </span>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-8 min-h-[400px] sm:min-h-[600px]">
            <div className="flex flex-col items-center">
              <div
                id="pdf-container"
                className="w-full bg-gray-100 shadow-inner rounded-lg p-1 sm:p-4 overflow-hidden flex justify-center"
              >
                <Document
                  file={`/storage/${training.pdf_path}`}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="p-20 text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Chargement du document...</p>
                    </div>
                  }
                  error={
                    <div className="p-20 text-center text-red-500">
                      <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                      <p>Erreur lors du chargement du PDF</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    width={containerWidth || undefined}
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                    className="shadow-lg max-w-full"
                  />
                </Document>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center gap-3 sm:gap-6 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg border border-gray-200">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevPage}
                  disabled={pageNumber <= 1}
                  className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-gray-900">
                    Page {pageNumber} / {training.allowed_pages}
                  </span>
                  {numPages && (
                    <span className="text-xs text-gray-500">
                      (Document complet: {numPages} pages)
                    </span>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextPage}
                  disabled={pageNumber >= training.allowed_pages}
                  className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              {/* Page Limit Warning */}
              {pageNumber >= training.allowed_pages && (
                <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg max-w-2xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1">
                        Limite de lecture atteinte
                      </h4>
                      <p className="text-sm text-amber-800">
                        Vous avez atteint la limite de {training.allowed_pages}{" "}
                        pages autorisées pour cette formation. Pour accéder au
                        document complet, veuillez contacter l'administrateur.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Download Blocked Message */}
              {showDownloadMessage && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-8 max-w-md shadow-2xl">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Téléchargement non autorisé
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Le téléchargement de ce document n'est pas autorisé.
                        Pour obtenir une copie complète, veuillez contacter
                        l'administrateur.
                      </p>
                      <Button onClick={() => setShowDownloadMessage(false)}>
                        Compris
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
