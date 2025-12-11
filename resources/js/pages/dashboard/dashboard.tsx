import { Building2, Package, MapPin, TrendingUp, Users, ShoppingCart, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ProductionChart } from "@/components/dashboard/ProductionChart";
import { Button } from "@/components/ui/button";
import { DashLayout } from "@/layouts/dasboard/DashLayout";

const stats = [
  {
    title: "Revenu total",
    value: "245,890 $",
    subtitle: "Ce mois",
    icon: TrendingUp,
    trend: { value: 12, isPositive: true },
    variant: "primary" as const,
  },
  {
    title: "Fermes actives",
    value: "8",
    subtitle: "3 partenaires",
    icon: Building2,
    trend: { value: 2, isPositive: true },
    variant: "growth" as const,
  },
  {
    title: "Produits en stock",
    value: "1,234",
    subtitle: "kg disponibles",
    icon: Package,
    variant: "harvest" as const,
  },
  {
    title: "Parcelles cultivées",
    value: "24",
    subtitle: "156 hectares",
    icon: MapPin,
    variant: "sky" as const,
  },
];

export default function Index() {
  return (
    <DashLayout>
      <PageHeader 
        title="Tableau de bord" 
        description="Vue d'ensemble de votre exploitation agricole"
      >
        <Button variant="accent">
          Nouvelle ferme
        </Button>
      </PageHeader>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={stat.title} 
            className="animate-slide-up" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart - Takes 2 columns */}
        <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <ProductionChart />
        </div>

        {/* Quick Actions */}
        <div className="animate-slide-up" style={{ animationDelay: "500ms" }}>
          <QuickActions />
        </div>

        {/* Recent Activity - Takes 2 columns */}
        <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "600ms" }}>
          <RecentActivity />
        </div>

        {/* Summary Card */}
        <div className="animate-slide-up" style={{ animationDelay: "700ms" }}>
          <div className="rounded-xl bg-card p-6 shadow-md h-full">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Résumé mensuel
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-growth/15 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-growth" />
                  </div>
                  <span className="text-sm text-muted-foreground">Ventes</span>
                </div>
                <span className="font-semibold">127</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-harvest/15 flex items-center justify-center">
                    <Package className="h-4 w-4 text-harvest" />
                  </div>
                  <span className="text-sm text-muted-foreground">Récoltes</span>
                </div>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-sky/15 flex items-center justify-center">
                    <Users className="h-4 w-4 text-sky" />
                  </div>
                  <span className="text-sm text-muted-foreground">Nouveaux membres</span>
                </div>
                <span className="font-semibold">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
}