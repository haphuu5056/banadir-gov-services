import { QuickLinksMenu } from "@/components/QuickLinksMenu";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";
import Link from "next/link";
interface DepartmentLayoutProps {
  children: ReactNode;
}

export default function DepartmentLayout({ children }: DepartmentLayoutProps) {
  return (
    <div className="min-h-screen ">
      <div className="flex   py-4 px-2 lg:px-24 md:py-8">
        <div className="flex flex-1 gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-80 shrink-0 sticky top-8 self-start space-y-11">
            <Sidebar />
            <QuickLinksMenu />
          </aside>
          {/* Main Content */}
          <main className="flex-1 overflow-auto px-1 md:px-0">
            {children}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2 md:px-20 py-3">
              {[
              {
                title: "Help with Payments",
                links: [
                "Difficulty paying your taxes",
                "Apply for payment support",
                "Extra help with your bill",
                "Request a refund",
                "Request a bill review",
                ],
              },
              {
                title: "More Information",
                links: [
                "Understanding your tax bill",
                "How your tax is used",
                "Tax regulations for businesses",
                "Privacy policy",
                "Current tax rates and bands",
                ],
              },
              ].map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl border-b font-semibold text-[#3F479E] mb-4 py-2">
                {section.title}
                </h2>
                <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                  <Link
                    href="#"
                    className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                  >
                    {link}
                  </Link>
                  </li>
                ))}
                </ul>
              </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
