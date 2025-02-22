// export interface Department {
//   id: string,
//   title: string
//   items?: string[]
//   className?: string
//   textColor?: string
//   isCompact?: boolean

import { LucideIcon } from "lucide-react"


// }
export interface Department {
  id: string
  title: string
  items?: SubDepartment[]
  className?: string
  textColor?: string
  isCompact?: boolean
}


export interface SubDepartment {
  id: string
  title: string
  icon?: LucideIcon
}

export interface DepartmentParams {
  department: string
  subDept?: string
}

export interface DepartmentData {
  office: Department
  social: Department
  management: Department
  news: Department
  complaints: Department
  notices: Department
  secretary: Department
  publicWorks: Department
  districts: string[]
}
export interface SubDepartment {
  id: string
  title: string
}

export interface DepartmentParams {
  department: string
  subDept?: string
}

