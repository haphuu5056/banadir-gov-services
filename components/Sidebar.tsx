"use client";

import { navigationData } from "@/data/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation"; 
import { useState } from "react";

const Sidebar = () => {
  const { department } = useParams<{ department: string; subdept: string }>(); 
  const currentDep = navigationData.filter((dep) => dep.id === department);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [openDepartment, setOpenDepartment] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDepartment = () => {
    setOpenDepartment((prev) => !prev);
  };

  const handleSubserviceClick = () => {
    closeSidebar();
  };

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed left-1 mr-2 p-2 bg-[#3F479E]/90 text-white rounded-full shadow-md z-50"
        onClick={toggleSidebar}
      >
        {!isSidebarOpen ? <Menu size={30} /> : <X size={30} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gradient-to-b from-[#F1F1FB] to-[#F8F9FF] rounded-xl my-4 shadow-sm border border-[#E4E7EC] mt-24 pt-10 lg:mt-0 lg:pt-0 lg:sticky lg:top-32 lg:block fixed inset-y-0 left-0 lg:w-auto w-full transition-all duration-300 z-0 ${
          isSidebarOpen ? "translate-x-0 h-full" : "-translate-x-full"
        } lg:translate-x-0 lg:h-auto`}
      >
        <nav className="h-full overflow-y-auto">
          <div>
            {currentDep.map((department, index) => (
              <div className="px-8 py-8" key={index}>
                <div className="flex justify-between items-center gap-4 py-1 mb-6 rounded-md border-b">
                  <Link
                    href={`/departments/${department.id}/`}
                    onClick={handleSubserviceClick}
                    className="text-[#3F479E] max-w-lg text-2xl font-semibold"
                  >
                    {department.title}
                  </Link>
                  <ChevronDown
                    size={30}
                    className={`text-[#3F479E] transition-transform duration-300 cursor-pointer ${
                      openDepartment ? "rotate-0" : "rotate-180"
                    }`}
                    onClick={toggleDepartment}
                  />
                </div>
                <div className="flex flex-col">
                  {openDepartment &&
                    department.items?.map((item) => (
                      <Link
                        href={`/departments/${department.id}/${item.id}`}
                        onClick={handleSubserviceClick}
                        key={item.title}
                        className="text-[#13174b] text-lg hover:bg-[#13174b]/20 hover:rounded-lg p-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
