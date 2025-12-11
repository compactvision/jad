import { Plus, FileText, Calendar, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const actions = [
  {
    label: "Nouvelle vente",
    icon: Plus,
    variant: "default" as const,
  },
  {
    label: "Ajouter produit",
    icon: Plus,
    variant: "secondary" as const,
  },
  {
    label: "Générer rapport",
    icon: FileText,
    variant: "secondary" as const,
  },
  {
    label: "Planifier activité",
    icon: Calendar,
    variant: "secondary" as const,
  },
];

export function QuickActions() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Actions rapides
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className="h-auto flex-col gap-2 py-4 px-3 hover:scale-105 transition-transform duration-200"
          >
            <action.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}