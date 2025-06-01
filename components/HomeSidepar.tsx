"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex justify-between items-center px-4 py-3 rounded-lg transition-all",
          "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300",
          "text-blue-700 font-semibold shadow"
        )}
      >
        Related Information
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Collapsible Content */}
      <div
        className={cn(
          "mt-2 overflow-hidden transition-all",
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white shadow rounded-lg p-4 border border-gray-200">
          <ul className="space-y-2 text-blue-700 font-medium">
            <li>
              <Link href="/news" className="block hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="/downloads" className="block hover:underline">
                Downloads
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="block hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/events" className="block hover:underline">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
