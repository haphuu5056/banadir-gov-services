import { notFound } from "next/navigation"
import { navigationData } from "@/data/navigation"

interface PageProps {
  params: {
    department: string
    subDept: string
  }
}

export default function SubDepartmentPage({ params }: PageProps) {
  const department = navigationData.find((dept) => dept.id === decodeURIComponent(params.department))
  const subDepartment = department?.items?.find((subDept) => subDept.id === decodeURIComponent(params.subDept))

  if (!department || !subDepartment) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-[#3F479E] mb-4">{department.title}</h1>
      <h2 className="text-xl text-[#3F479E] mb-6">{subDepartment.title}</h2>
      {/* Add your sub-department specific content here */}
    </div>
  )
}

