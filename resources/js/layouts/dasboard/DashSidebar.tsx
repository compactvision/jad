import {
  LayoutDashboard,
  Building2,
  Users,
  Package,
  MapPin,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  Sprout,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

const navigation = [
  { name: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
  { name: "Fermes", href: "/dashboard/farms", icon: Building2 },
  { name: "Parcelles", href: "/dashboard/fields", icon: MapPin },
  { name: "Produits", href: "/dashboard/products", icon: Package },
  { name: "Membres", href: "/dashboard/members", icon: Users },
  { name: "Ventes", href: "/dashboard/sales", icon: ShoppingCart },
  { name: "Rapports", href: "/dashboard/reports", icon: BarChart3 },
];

const bottomNavigation = [
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

export function DashSidebar() {
  const { url } = usePage();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard" && url === "/dashboard") return true;
    return href !== "/dashboard" && url.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-green-900 text-white shadow-md"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay for mobile */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen bg-green-900 transition-all duration-300 ease-in-out",
          "lg:relative lg:translate-x-0",
          collapsed ? "-translate-x-full lg:w-20" : "translate-x-0 w-64"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-green-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              {!collapsed && (
                <span className="font-display text-lg font-semibold text-white">
                  AgroGest
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:bg-green-800"
              onClick={() => setCollapsed(!collapsed)}
            >
              <ChevronLeft
                className={cn(
                  "h-5 w-5 transition-transform",
                  collapsed && "rotate-180"
                )}
              />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-100/80 hover:bg-green-800 hover:text-white"
                  )}
                  onClick={() => window.innerWidth < 1024 && setCollapsed(true)}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      active && "text-white"
                    )}
                  />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Bottom navigation */}
          <div className="border-t border-green-800 px-3 py-4 space-y-1">
            {bottomNavigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-green-600 text-white"
                      : "text-green-100/80 hover:bg-green-800 hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}

            <button
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                "text-green-100/80 hover:bg-red-900/30 hover:text-red-300"
              )}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>Déconnexion</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}