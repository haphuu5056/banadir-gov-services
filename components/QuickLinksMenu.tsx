import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { label: "News", href: "/news" },
  { label: "Downloads", href: "/downloads" },

]

export function QuickLinksMenu() {
  return (
    <div className="p-6 bg-gradient-to-b from-[#ddddf0] to-[#F8F9FF] rounded-md border border-[#E4E7EC] shadow-sm">
      <h3 className="text-xl font-semibold text-[#4B5563] mb-4">Related Information</h3>
      <Separator className="mb-4" />
      <ul className="space-y-2">
        {quickLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-lg text-[#3F479E] hover:text-[#6366F1] hover:underline transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

