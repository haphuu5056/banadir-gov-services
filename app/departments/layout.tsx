import type React from "react";

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white ">
      <div className="container mx-auto py-10">
        <div className="flex gap-8">
          <aside className="w-72 shrink-0 sticky top-8 self-start bg-gradient-to-b from-[#F1F1FB] to-[#F8F9FF] rounded-xl border border-[#E4E7EC] shadow-sm">
            {/* Add department-specific UI elements here */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Departments
              </h2>
              <ul className="divide-y divide-gray-200">
                {/* Add department links */}
                <li className="py-4">
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-primary hover:underline"
                  >
                    Department 1
                  </a>
                </li>
                <li className="py-4">
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-primary hover:underline"
                  >
                    Department 2
                  </a>
                </li>
                <li className="py-4">
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-primary hover:underline"
                  >
                    Department 3
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* Add shared department UI elements here */}
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}
