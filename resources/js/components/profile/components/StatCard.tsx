// components/profile/components/StatCard.tsx

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-slate-50 overflow-hidden relative">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="p-3 rounded-full bg-gradient-to-br from-green-50 to-emerald-100 text-green-600">
            {icon}
          </div>
        </div>
        {trend && (
          <div className="flex items-center mt-4 text-xs">
            {trend === "up" && (
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
            )}
            {trend === "down" && (
              <TrendingUp className="w-3 h-3 mr-1 text-red-500 rotate-180" />
            )}
            <span
              className={
                trend === "up"
                  ? "text-green-500"
                  : trend === "down"
                    ? "text-red-500"
                    : "text-slate-500"
              }
            >
              {trend === "up" ? "+12%" : trend === "down" ? "-5%" : "0%"} par
              rapport au mois dernier
            </span>
          </div>
        )}
      </CardContent>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-500/5 to-transparent rounded-tl-full"></div>
    </Card>
  );
}