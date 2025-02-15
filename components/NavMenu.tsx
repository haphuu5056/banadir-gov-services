"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { navigationData } from "@/data/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <Button
        variant="ghost"
        className="text-[#3F479E] hover:bg-[#3F479E] hover:text-white transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-10 w-10" />
        <span className="ml-1 hidden md:inline text-lg">Adeegyada Golaha</span>
      </Button>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 max-w-[1200px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 w-full bg-white border-b px-12 py-4 flex justify-end items-center">
          {/* <span className="text-[#3F479E] text-lg font-medium">Menu</span> */}
          <Button
            variant="ghost"
            // size="sm"
            className=" text-[#3F479E] hover:bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xl">Iska xir</span>
            <X  size={40} />

          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-73px)] overflow-y-auto">
          <div className="px-6 py-4">
            {/* Logo and Profile Section */}

            {/* Navigation Sections */}
            <div className="grid grid-cols-3 auto-rows-max gap-10 px-6 py-4">
              {navigationData.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-[#3F479E] text-2xl font-bold">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.items?.map((item) => (
                      <li key={item.title}>
                        <Link
                         href={`/departments/${encodeURIComponent(section.id)}`}
                          className="text-[#3F479E]/90 hover:text-[#3F479E] hover:underline block py-1 transition-colors text-xl"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

