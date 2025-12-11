import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "growth" | "harvest" | "sky";
  className?: string;
}

const variantStyles = {
  default: {
    card: "bg-white border border-gray-200",
    icon: "bg-gray-100 text-gray-700",
  },
  primary: {
    card: "bg-gradient-to-r from-green-600 to-emerald-500 text-white",
    icon: "bg-white/20 text-white",
  },
  growth: {
    card: "bg-emerald-50 border border-emerald-200",
    icon: "bg-emerald-500 text-white",
  },
  harvest: {
    card: "bg-orange-50 border border-orange-200",
    icon: "bg-orange-500 text-white",
  },
  sky: {
    card: "bg-sky-50 border border-sky-200",
    icon: "bg-sky-500 text-white",
  },
};

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  variant = "default",
  className 
}: StatCardProps) {
  const styles = variantStyles[variant];
  const isPrimary = variant === "primary";

  return (
    <div 
      className={cn(
        "rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        styles.card,
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className={cn(
            "text-sm font-medium",
            isPrimary ? "text-white/80" : "text-gray-600"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-3xl font-bold tracking-tight",
            isPrimary ? "text-white" : "text-gray-900"
          )}>
            {value}
          </p>
          {subtitle && (
            <p className={cn(
              "text-xs",
              isPrimary ? "text-white/70" : "text-gray-500"
            )}>
              {subtitle}
            </p>
          )}
          {trend && (
            <div className="flex items-center gap-1 pt-1">
              <span className={cn(
                "text-xs font-medium",
                trend.isPositive 
                  ? isPrimary ? "text-white" : "text-emerald-600" 
                  : "text-red-600"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className={cn(
                "text-xs",
                isPrimary ? "text-white/70" : "text-gray-500"
              )}>
                vs mois dernier
              </span>
            </div>
          )}
        </div>
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl",
          styles.icon
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}