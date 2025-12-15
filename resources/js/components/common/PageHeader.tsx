import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  backUrl?: string;
}

export function PageHeader({
  title,
  description,
  children,
  className,
  backUrl,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {backUrl && (
          <Link href={backUrl}>
            <Button variant="ghost" size="icon" className="-ml-2 mt-1">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
        )}
        <div>
          <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
            {title}
          </h1>
          {description && (
            <p className="mt-1 text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      {children && <div className="flex items-center gap-3">{children}</div>}
    </div>
  );
}
