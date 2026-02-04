import { useState } from "react";
import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Training {
  id: number;
  title: string;
  description: string;
  pdf_path: string;
  allowed_pages: number;
}

export default function FormationView({ training }: { training: Training }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

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
    <DashLayout>
      <PageHeader
        title={training.title}
        description={`Lecture limitée à ${training.allowed_pages} pages.`}
      >
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setScale((s) => Math.max(s - 0.1, 0.5))}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setScale((s) => Math.min(s + 0.1, 2.0))}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <a
            href={`/storage/${training.pdf_path}`}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Télécharger (Complet)
            </Button>
          </a>
        </div>
      </PageHeader>

      <div className="mt-8 flex flex-col items-center bg-gray-100 p-8 rounded-xl overflow-auto min-h-[600px]">
        <div className="bg-white shadow-2xl rounded-sm">
          <Document
            file={`/storage/${training.pdf_path}`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="p-20">Chargement du PDF...</div>}
            error={
              <div className="p-20 text-red-500">
                Erreur lors du chargement du PDF
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>

        <div className="mt-6 flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-md">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <span className="text-sm font-medium">
            Page {pageNumber} sur {training.allowed_pages}
            <span className="text-gray-400 ml-1">
              (Total: {numPages || "?"})
            </span>
          </span>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={pageNumber >= training.allowed_pages}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {pageNumber >= training.allowed_pages && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg flex items-center gap-2">
            Vous avez atteint la limite de lecture autorisée (
            {training.allowed_pages} pages).
          </div>
        )}
      </div>
    </DashLayout>
  );
}
