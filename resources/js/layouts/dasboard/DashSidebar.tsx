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
  FileText,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";

const allNavigation = [
  {
    name: "Tableau de bord",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["administrateur_jad"],
  },
  {
    name: "Fermes",
    href: "/dashboard/farms",
    icon: Building2,
    roles: ["administrateur_jad"],
  },
  {
    name: "Parcelles",
    href: "/dashboard/fields",
    icon: MapPin,
    roles: ["administrateur_jad"],
  },
  {
    name: "Produits",
    href: "/dashboard/products",
    icon: Package,
    roles: ["administrateur_jad"],
  },
  {
    name: "Membres",
    href: "/dashboard/members",
    icon: Users,
    roles: ["administrateur_jad"],
  },
  {
    name: "Formations",
    href: "/dashboard/formations",
    icon: FileText,
    roles: ["administrateur_jad"],
  },
  {
    name: "Ventes",
    href: "/dashboard/sales",
    icon: ShoppingCart,
    roles: ["administrateur_jad"],
  },
  {
    name: "Rapports",
    href: "/dashboard/reports",
    icon: BarChart3,
    roles: ["administrateur_jad"],
  },
  {
    name: "Utilisateurs",
    href: "/dashboard/users",
    icon: Users,
    roles: ["super_admin"],
  },
  {
    name: "Rôles & Permissions",
    href: "/dashboard/roles",
    icon: Shield,
    roles: ["super_admin"],
  },
  {
    name: "Audit Logs",
    href: "/dashboard/audit",
    icon: FileText,
    roles: ["super_admin"],
  },
  {
    name: "Paramètres Site",
    href: "/dashboard/site-settings",
    icon: Settings,
    roles: ["super_admin"],
  },
  // Adding Profile for everyone
  {
    name: "Mon Profil",
    href: "/dashboard/profile",
    icon: Users,
    roles: ["*"],
  },
];

const allBottomNavigation = [
  {
    name: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["*"],
  },
];

export function DashSidebar() {
  const { url, props } = usePage();
  const user = props.auth.user as any;
  // Separate states for mobile and desktop
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard" && url === "/dashboard") return true;
    return href !== "/dashboard" && url.startsWith(href);
  };

  const visibleNavigation = allNavigation.filter((item) => {
    if (
      user?.status !== "approved" &&
      item.href !== "/dashboard/profile" &&
      item.href !== "/dashboard"
    ) {
      return false;
    }
    if (item.roles.includes("*")) return true;
    return item.roles.includes(user?.role);
  });

  const visibleBottomNavigation = allBottomNavigation.filter((item) => {
    if (item.roles.includes("*")) return true;
    return item.roles.includes(user?.role);
  });

  return (
    <>
      {/* Mobile Header Bar - Fixed at top */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-green-900 border-b border-green-800 flex items-center px-4 z-50 shadow-md">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-green-800"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="ml-4 flex items-center gap-2">
          <Sprout className="h-6 w-6 text-white" />
          <span className="font-display text-lg font-semibold text-white">
            AgroGest
          </span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-[60] h-screen bg-green-900 transition-all duration-300 ease-in-out shadow-xl lg:shadow-none",
          "lg:relative lg:z-0",
          // Mobile: transform based on mobileOpen
          mobileOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full lg:translate-x-0",
          // Desktop: width based on desktopCollapsed
          desktopCollapsed ? "lg:w-20" : "lg:w-64",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo (Desktop only, or inside sidebar on mobile) */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-green-800 bg-green-900">
            {/* On mobile, show logo inside too? Yes. */}
            <div
              className={cn(
                "flex items-center gap-3",
                desktopCollapsed && "lg:justify-center",
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 flex-shrink-0">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span
                className={cn(
                  "font-display text-lg font-semibold text-white transition-opacity duration-200",
                  desktopCollapsed ? "lg:hidden" : "block",
                )}
              >
                AgroGest
              </span>
            </div>
            {/* Desktop Collapse Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:bg-green-800"
              onClick={() => setDesktopCollapsed(!desktopCollapsed)}
            >
              <ChevronLeft
                className={cn(
                  "h-5 w-5 transition-transform",
                  desktopCollapsed && "rotate-180",
                )}
              />
            </Button>
            {/* Mobile Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-green-800"
              onClick={() => setMobileOpen(false)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-transparent">
            {visibleNavigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-100/80 hover:bg-green-800 hover:text-white",
                    desktopCollapsed && "lg:justify-center lg:px-2",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      active && "text-white",
                    )}
                  />
                  <span
                    className={cn(desktopCollapsed ? "lg:hidden" : "block")}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom navigation */}
          <div className="border-t border-green-800 px-3 py-4 space-y-1 bg-green-900/50">
            {visibleBottomNavigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-green-600 text-white"
                      : "text-green-100/80 hover:bg-green-800 hover:text-white",
                    desktopCollapsed && "lg:justify-center lg:px-2",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span
                    className={cn(desktopCollapsed ? "lg:hidden" : "block")}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <button
              onClick={() => router.post(route("logout"))}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                "text-green-100/80 hover:bg-red-900/30 hover:text-red-300",
                desktopCollapsed && "lg:justify-center lg:px-2",
              )}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              <span className={cn(desktopCollapsed ? "lg:hidden" : "block")}>
                Déconnexion
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
