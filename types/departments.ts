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
  quickLinks?: QuickLink[]

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
  description?: string
  services?: Service[]
}
export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  howToApply: string;
  requirements: string[];
  processingTime: string;
  fees: string;
}
export interface QuickLink {
  label: string;
  href: string;
}
export interface DepartmentParams {
  department: string
  subDept?: string
}

