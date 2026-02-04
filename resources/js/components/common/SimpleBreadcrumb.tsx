import { Link } from "@inertiajs/react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface SimpleBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function SimpleBreadcrumb({ items }: SimpleBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      <Link
        href="/"
        className="text-gray-500 hover:text-gray-700 transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
