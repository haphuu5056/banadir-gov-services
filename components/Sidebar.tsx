"use client";

import { navigationData } from "@/data/navigation";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const { department } = useParams<{ department: string; subdept: string }>();
  const currentDep = navigationData.filter((dep) => dep.id === department);
  const [openDepartment, setOpenDepartment] = useState<boolean>(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev) => !prev);
  // };

  const toggleDepartment = () => {
    setOpenDepartment((prev) => !prev);
  };

  return (
    <>
      <nav className="h-full overflow-y-auto bg-gradient-to-b from-[#F1F1FB] to-[#ebedf5] rounded-md border border-[#E4E7EC] shadow-sm ">
        <div>
          {currentDep.map((department, index) => (
            <div className="px-6 " key={index}>
              <div className="flex justify-between items-center gap-4 py-1 rounded-md border-b">
                <Link
                  href={`/departments/${department.id}/`}
                  className=" text-[#3F479E] max-w-lg text-xl font-medium py-3 "
                >
                  {department.title}
                </Link>
                <ChevronDown
                  size={25}
                  className={`text-[#3F479E] transition-transform duration-300 cursor-pointer ${
                    openDepartment ? "rotate-180" : "rotate-0"
                  }`}
                  onClick={toggleDepartment}
                />
              </div>
              <div className={`flex flex-col  ${openDepartment ? "py-5" : "py-0"}`}>
                {openDepartment &&
                  department.items?.map((item) => (
                    <Link
                      href={`/departments/${department.id}/${item.id}`}
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
    </>
  );
};

export default Sidebar;
