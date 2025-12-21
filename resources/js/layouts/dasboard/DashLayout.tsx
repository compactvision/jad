import { ReactNode } from "react";
import { DashSidebar } from "./DashSidebar";
import { usePage } from "@inertiajs/react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DashLayoutProps {
  children: ReactNode;
}

export function DashLayout({ children }: DashLayoutProps) {
  const { props } = usePage();
  const user = props.auth.user as any;
  const isPending = user?.status !== "approved";

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashSidebar />
      <main className="flex-1 overflow-auto h-screen pt-16 lg:pt-0">
        <div className="container py-6 px-4 lg:px-8">
          {isPending && (
            <Alert
              variant="destructive"
              className="mb-6 border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-900/10 dark:text-amber-400 dark:border-amber-900"
            >
              <AlertCircle className="h-4 w-4 stroke-amber-600 dark:stroke-amber-400" />
              <AlertTitle>Dossier en cours de vérification</AlertTitle>
              <AlertDescription>
                Vous ne pouvez pas encore utiliser toutes les fonctionnalités.
                Votre dossier est en cours de vérification par notre équipe
                administrative.
              </AlertDescription>
            </Alert>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
