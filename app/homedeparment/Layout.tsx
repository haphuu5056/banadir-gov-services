import Sidebar from "@/components/HomeSidepar";

export default function DepartmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-6">
      {/* Sidebar Section */}
      <aside className="w-full md:w-1/4">
        <Sidebar />
      </aside>

      {/* Main Content Section */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
