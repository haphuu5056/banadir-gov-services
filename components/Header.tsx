// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  Search, User } from "lucide-react"
import Image from "next/legacy/image"
import logo from '@/public/logo.png'
import Link from "next/link"
import { NavMenu } from "./NavMenu"

export function Header() {
  return (
    <div className="bg-secondary sticky top-0 z-50 py-4  border-b ">
      <div className="container mx-auto px-12 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="Banadir Logo" width={80} height={80} className="h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="relative w-full ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search information, advice and more..."
              className="w-full pl-10 pr-4 py-6 rounded-lg border bg-white border-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="hidden md:flex items-center gap-2 text-primary hover:underline">
            <User className="h-4 w-4" />
            <span className="text-lg">Sign in / register</span>
          </Link>
        
          <NavMenu />
        </div>
      </div>
    </div>
  )
}

