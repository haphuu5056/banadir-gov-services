import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  items: {
    label: string
    href?: string
  }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:text-primary">
        {/* <Home className="h-4 w-4" /> */}
       Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link href={item.href} className="ml-2 hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="ml-2 text-gray-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

