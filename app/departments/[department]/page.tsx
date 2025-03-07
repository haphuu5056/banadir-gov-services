import { notFound } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { YourCouncil } from "@/components/YourCouncil";
import { Cabashooyinka } from "@/components/Cabashooyinka";

const gradientClasses = [
  "bg-gradient-to-br from-[#C5C8FF] to-[#D8DAFF] hover:from-[#B0B4FF] hover:to-[#C5C8FF] text-[#3F479E]",
  "bg-gradient-to-br from-[#C5D8F0] to-[#D6E4F0] hover:from-[#A8C4E0] hover:to-[#C5D8F0] text-[#2C3E50]",
  "bg-gradient-to-br from-[#C5E8C5] to-[#D8ECD8] hover:from-[#A8D8A8] hover:to-[#C5E8C5] text-[#2F4F4F]",
  "bg-gradient-to-br from-[#E0D8C5] to-[#E6DFD1] hover:from-[#D0C0A8] hover:to-[#E0D8C5] text-[#5D4037]",
  "bg-gradient-to-br from-[#C5E8E8] to-[#D1EDED] hover:from-[#A8D8D8] hover:to-[#C5E8E8] text-[#006064]",
];

interface PageProps {
  params: {
    department: string;
  };
}

export default function DepartmentPage({ params }: PageProps) {
  const department = navigationData.find(
    (dept) => dept.id === decodeURIComponent(params.department)
  );

  if (!department) {
    notFound();
  }

  return (
    <div className="px-2 md:px-10  mb-12">
      {/* <div className="mb-6">
        <Breadcrumb items={[{ label: department.title }]} />
      </div> */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3F479E] to-[#6366F1] bg-clip-text text-transparent">
          {department.title}
        </h1>
      </div>
      {params.department === 'council' && <YourCouncil />}
      {params.department === 'cabashooyinka' && <Cabashooyinka />}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {department.items?.slice(0,6).map((subDept, index) => (
          <a
            key={subDept.id}
            href={`/departments/${encodeURIComponent(
              params.department
            )}/${encodeURIComponent(subDept.id)}`}
            className={cn(
              "group relative block py-4 px-6 rounded-lg transition-all duration-300 ",
              "transform hover:-translate-y-1",
              "border border-gray-100",
              "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
              "hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
              gradientClasses[index % gradientClasses.length]
            )}
          >
            {/* Glare Effect */}
            <div className="absolute inset-0 rounded bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative flex justify-between gap-5 items-center">
              <div>
                <h2 className="text-2xl font-semibold group-hover:opacity-90 transition-opacity">
                  {subDept.title}
                </h2>
              </div>
              {subDept.icon && (
                <subDept.icon
                  size={60}
                  className="font-extralight opacity-75"
                />
              )}
            </div>

            {/* Bottom Shine */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        ))}
      </div>
    </div>
  );
}
