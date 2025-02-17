import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface DepartmentLayoutProps {
  children: ReactNode;
}

export default function DepartmentLayout({ children }: DepartmentLayoutProps) {
  return (
    <div className="bg-white font-poppins">
      <div className="flex min-h-screen flex-col py-4 px-8 lg:px-24 md:py-8">
        <div className="flex flex-1 gap-8">
          {/* Sidebar */}
          <div className="sticky top-0 flex-none lg:w-[32%]">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
