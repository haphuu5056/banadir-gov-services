"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navigationData } from "@/data/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"; // Prevent scroll on <html>
      document.body.style.overflow = "hidden"; // Prevent scroll on <body>
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        className="text-[#3F479E] hover:bg-[#3F479E] hover:text-white transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-10 w-10" />
        <span className="ml-1 hidden md:inline text-lg">Adeegyada Golaha</span>
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-screen max-w-md lg:max-w-5xl h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 z-10 w-full bg-white border-b px-8 py-4 flex justify-between items-center">
          <span className="text-xl font-medium text-[#3F479E]">Menu</span>
          <Button
            variant="ghost"
            className="text-[#3F479E] hover:bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xl">Iska xir</span>
            <X size={32} />
          </Button>
        </div>

        {/* Sidebar Content */}
        <div className="h-[calc(100vh-73px)] overflow-y-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-6 px-4 md:px-8">
            {navigationData.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-[#3F479E] text-xl font-bold">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items?.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={`/departments/${encodeURIComponent(section.id)}`}
                        className="text-[#3F479E]/90 hover:text-[#3F479E] hover:underline block py-1 transition-colors text-lg"
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
    </>
  );
}
