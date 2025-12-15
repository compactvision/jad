import { ReactNode } from "react";
import { DashSidebar } from "./DashSidebar";

interface DashLayoutProps {
  children: ReactNode;
}

export function DashLayout({ children }: DashLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashSidebar />
      <main className="flex-1 overflow-auto h-screen pt-16 lg:pt-0">
        <div className="container py-6 px-4 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
