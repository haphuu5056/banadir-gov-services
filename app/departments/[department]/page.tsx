import { notFound } from "next/navigation"
import { navigationData } from "@/data/navigation"
import { cn } from "@/lib/utils"


const gradientClasses = [
  "bg-gradient-to-br from-[#C5C8FF] to-[#D8DAFF] hover:from-[#B0B4FF] hover:to-[#C5C8FF] text-[#3F479E]",
  "bg-gradient-to-br from-[#C5D8F0] to-[#D6E4F0] hover:from-[#A8C4E0] hover:to-[#C5D8F0] text-[#2C3E50]",
  "bg-gradient-to-br from-[#C5E8C5] to-[#D8ECD8] hover:from-[#A8D8A8] hover:to-[#C5E8C5] text-[#2F4F4F]",
  "bg-gradient-to-br from-[#E0D8C5] to-[#E6DFD1] hover:from-[#D0C0A8] hover:to-[#E0D8C5] text-[#5D4037]",
  "bg-gradient-to-br from-[#C5E8E8] to-[#D1EDED] hover:from-[#A8D8D8] hover:to-[#C5E8E8] text-[#006064]",
];

interface PageProps {
  params: {
    department: string
  }
}

export default function DepartmentPage({ params }: PageProps) {
  const department = navigationData.find((dept) => dept.id === decodeURIComponent(params.department))

  if (!department) {
    notFound()
  }

  return (
    <div className="px-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F479E] to-[#6366F1] bg-clip-text text-transparent">
          {department.title}
        </h1>
        <p className="text-gray-600 mt-2">Select a sub-department to view more information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {department.items?.map((subDept, index) => (
          <a
            key={subDept.id}
            href={`/departments/${encodeURIComponent(params.department)}/${encodeURIComponent(subDept.id)}`}
            className={cn(
              "group relative block p-10 rounded-xl transition-all duration-300",
              "transform hover:-translate-y-1",
              "border border-gray-100",
              "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
              "hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
              gradientClasses[index % gradientClasses.length],
            )}
          >
            {/* Glare Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative">
              <h2 className="text-xl font-semibold mb-2 group-hover:opacity-90 transition-opacity">{subDept.title}</h2>
              <p className="opacity-75 text-sm">Click to explore more about {subDept.title}</p>
            </div>

            {/* Bottom Shine */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        ))}
      </div>
    </div>
  )
}

