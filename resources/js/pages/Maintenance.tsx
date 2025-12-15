import { Head } from "@inertiajs/react";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Maintenance() {
  return (
    <div className="min-h-screen grid place-items-center bg-background p-4">
      <Head title="Maintenance" />

      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
          <Wrench className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Maintenance en cours
        </h1>

        <p className="text-xl text-muted-foreground">
          Nous effectuons actuellement une maintenance planifiée. Le site sera
          de retour très bientôt. Merci de votre patience.
        </p>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JAD. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
