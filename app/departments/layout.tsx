import { QuickLinksMenu } from "@/components/QuickLinksMenu";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";
import Link from "next/link";
import { DepartmentBreadcrumb } from "@/components/DepartmentBreadcrumb";
interface DepartmentLayoutProps {
  children: ReactNode;
}

export default function DepartmentLayout({ children }: DepartmentLayoutProps) {
  return (
    <div className="min-h-screen ">
      <div className="flex  py-4 px-2 lg:px-32 md:py-8">
        <div className="flex flex-1 gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-80 shrink-0 sticky top-8 self-start space-y-11">
          <DepartmentBreadcrumb />

            <Sidebar />
            <QuickLinksMenu />
          </aside>
          {/* Main Content */}
          <main className="flex-1 overflow-auto px-1 md:px-0">
            {children}
      
          </main>
        </div>
      </div>
    </div>
  );
}
