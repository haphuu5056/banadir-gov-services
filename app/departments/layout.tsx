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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2 md:px-12 py-3">
              {/* Help Section */}
              <div>
                <h2 className="text-2xl border-b font-semibold text-[#3F479E] mb-4 py-2">
                  Help with Payments
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Difficulty paying your taxes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Apply for payment support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Extra help with your bill
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Request a refund
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Request a bill review
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Information Section */}
              <div>
                <h2 className="text-2xl font-semibold text-[#3F479E] mb-4 border-b py-2">
                  More Information
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Understanding your tax bill
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      How your tax is used
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Tax regulations for businesses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#3F479E] hover:text-[#6366F1] hover:underline text-xl"
                    >
                      Current tax rates and bands
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
