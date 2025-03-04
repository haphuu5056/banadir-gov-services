"use client"

import { usePathname } from "next/navigation"
import { navigationData } from "@/data/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"

export function DepartmentBreadcrumb() {
  const pathname = usePathname()
  const paths = pathname.split("/").filter(Boolean)

  // Extract IDs from the path
  const departmentId = paths[1] ? decodeURIComponent(paths[1]) : null
  const subdepartmentId = paths[2] ? decodeURIComponent(paths[2]) : null
  const serviceId = paths[3] ? decodeURIComponent(paths[3]) : null

  // Find the corresponding data
  const department = departmentId ? navigationData.find((dept) => dept.id === departmentId) : null
  const subdepartment =
    department && subdepartmentId ? department.items?.find((subDept) => subDept.id === subdepartmentId) : null
  const service =
    subdepartment && serviceId && subdepartment.services
      ? subdepartment.services.find((serv) => serv.id === serviceId)
      : null

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      {/* <BreadcrumbItem>
        <BreadcrumbLink href="" className="">Departments</BreadcrumbLink>
      </BreadcrumbItem> */}

      {department && (
        <BreadcrumbItem>
          {subdepartmentId ? (
            <BreadcrumbLink href={`/departments/${paths[1]}`}>{department.title}</BreadcrumbLink>
          ) : (
            <span className="text-foreground">{department.title}</span>
          )}
        </BreadcrumbItem>
      )}

      {subdepartment && (
        <BreadcrumbItem>
          {serviceId ? (
            <BreadcrumbLink href={`/departments/${paths[1]}/${paths[2]}`}>{subdepartment.title}</BreadcrumbLink>
          ) : (
            <span className="text-foreground">{subdepartment.title}</span>
          )}
        </BreadcrumbItem>
      )}

      {service && (
        <BreadcrumbItem>
          <span className="text-foreground">{service.title}</span>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  )
}

