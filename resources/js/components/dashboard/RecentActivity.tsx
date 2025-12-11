import { Package, MapPin, ShoppingCart, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "sale",
    title: "Nouvelle vente enregistrée",
    description: "50kg de tomates - Ferme du Soleil",
    time: "Il y a 2 heures",
    icon: ShoppingCart,
    color: "bg-growth text-primary-foreground",
  },
  {
    id: 2,
    type: "harvest",
    title: "Récolte terminée",
    description: "Parcelle A3 - Maïs",
    time: "Il y a 5 heures",
    icon: Package,
    color: "bg-harvest text-accent-foreground",
  },
  {
    id: 3,
    type: "member",
    title: "Nouveau membre ajouté",
    description: "Jean Dupont - Agriculteur",
    time: "Il y a 1 jour",
    icon: Users,
    color: "bg-sky text-primary-foreground",
  },
  {
    id: 4,
    type: "field",
    title: "Parcelle mise à jour",
    description: "Parcelle B1 - Irrigation planifiée",
    time: "Il y a 2 jours",
    icon: MapPin,
    color: "bg-earth text-primary-foreground",
  },
  {
    id: 5,
    type: "farm",
    title: "Ferme partenaire ajoutée",
    description: "Ferme des Collines",
    time: "Il y a 3 jours",
    icon: Building2,
    color: "bg-primary text-primary-foreground",
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-md">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Activité récente
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className={cn(
              "flex items-start gap-4 animate-fade-in",
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
              activity.color
            )}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {activity.title}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {activity.description}
              </p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}