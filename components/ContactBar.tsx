import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function ContactBar() {
  return (
    <div className="bg-primary text-white py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email: info@bra.gov.so</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>576 KM4 Street, Banadir Somalia</span>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <Link href="/fiscal-report" className="hover:underline">
            Fiscal Report
          </Link>
          <Link href="/vacancies" className="hover:underline">
            Vacancies
          </Link>
          <Link href="/tenders" className="hover:underline">
            Tenders
          </Link>
        </div>
      </div>
    </div>
  )
}

