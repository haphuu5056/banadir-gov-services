"use client"
import { type ReactNode, useState, useEffect } from "react"
import { DepartmentBreadcrumb } from "@/components/DepartmentBreadcrumb"
import DepartmentSidebar from "@/components/DepartmentSidebar"
import { RelatedInfoMenu } from "@/components/RelatedInfo"
import { usePathname } from "next/navigation"

interface DepartmentLayoutProps {
  children: ReactNode
}

export default function DepartmentLayout({ children }: DepartmentLayoutProps) {
  const pathname = usePathname()
  const [departmentId, setDepartmentId] = useState<string | null>(null)
  const [subdepartmentId, setSubdepartmentId] = useState<string | null>(null)

  useEffect(() => {
    const paths = pathname.split("/").filter(Boolean)
    if (paths.length >= 2) {
      setDepartmentId(paths[1])
      setSubdepartmentId(paths.length >= 3 ? paths[2] : null)
    }
  }, [pathname])

  return (
    <div className="min-h-screen">
      <div className="flex py-4 px-2 lg:px-32 md:py-8">
        <div className="flex flex-1 gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-80 shrink-0 sticky top-8 self-start space-y-11">
            <DepartmentBreadcrumb />
            <DepartmentSidebar />
            {departmentId && <RelatedInfoMenu department={departmentId} subDept={subdepartmentId} />}
          </aside>
          {/* Main Content */}
          <main className="flex-1 overflow-auto px-1 md:px-0">{children}</main>
        </div>
      </div>
    </div>
  )
}

