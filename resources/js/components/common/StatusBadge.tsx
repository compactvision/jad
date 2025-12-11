import { cn } from "@/lib/utils";

type StatusType = "active" | "inactive" | "pending" | "warning" | "success" | "error";

interface StatusBadgeProps {
  status: StatusType;
  label: string;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  inactive: "bg-gray-50 text-gray-600 border-gray-200",
  pending: "bg-orange-50 text-orange-700 border-orange-200",
  warning: "bg-orange-50 text-orange-700 border-orange-200",
  error: "bg-red-50 text-red-700 border-red-200",
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className
      )}
    >
      <span className={cn(
        "mr-1.5 h-1.5 w-1.5 rounded-full",
        status === "active" || status === "success" ? "bg-emerald-500" :
        status === "pending" || status === "warning" ? "bg-orange-500" :
        status === "error" ? "bg-red-500" : "bg-gray-400"
      )} />
      {label}
    </span>
  );
}