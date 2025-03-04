'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { NavMenu } from "./NavMenu";
import logo from "@/public/logo.png";
import { navigationData } from "@/data/navigation"; 

// Define types
interface NavItem {
  id: string;
  title: string;
}

interface Department {
  id: string;
  title: string;
  items?: NavItem[];
}

export function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<Department[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredResults([]);
      setIsDropdownOpen(false);
      return;
    }

    // Filter departments and subdepartments based on search query
    const results = navigationData
      .map((department) => ({
        ...department,
        items: department.items?.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((department) => department.items && department.items.length > 0);

    setFilteredResults(results);
    setIsDropdownOpen(results.length > 0);
  };

  // Handle clicking on a search result
  const handleSelect = () => {
    setSearchQuery(""); // Clear input field
    setFilteredResults([]); // Clear results
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <header className="bg-secondary sticky top-0 z-50 py-0 sm:py-4 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Banadir Logo"
            width={64}
            height={64}
            className="h-4 w-auto sm:h-12"
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8 relative">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search departments, services..."
              className="w-full pl-10 pr-4 py-6 rounded-lg border bg-white border-gray-200"
            />
          </div>

          {/* Search Results Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredResults.map((department) => (
                <div key={department.id} className="p-2 border-b">
                  <p className="font-semibold text-primary">{department.title}</p>
                  {department.items?.map((item) => (
                    <Link
                      key={item.id}
                      href={`/departments/${department.id}/${item.id}`}
                      className="block p-2 hover:bg-gray-100 rounded-md"
                      onClick={handleSelect} // Close dropdown when clicked
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Icon */}
          <button className="md:hidden text-primary">
            <Search className="h-5 w-5" />
          </button>

          {/* Sign-in Link */}
          <div className="hidden md:flex items-center gap-1">
            <User size={25} className="text-primary" />
            <Link href="/sign-in" className="flex text-primary hover:underline">
              <span className="text-lg">Sign in</span>
            </Link>
            /
            <Link href="/sign-up" className="flex text-primary hover:underline">
              <span className="text-lg">Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavMenu />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
