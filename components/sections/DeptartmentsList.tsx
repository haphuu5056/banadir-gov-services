import { departments, districts } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";
import Link from "next/link";

export function DepartmentLists() {
  return (
    <div className="py-12 grid grid-cols-3 auto-rows-max gap-6 container mx-auto px-12 overflow-hidden">
      {departments.map((department, index) => (
        <DepartmentCard key={index} {...department} />
      ))}
      <div
        className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer hover:opacity-90 block group text-white py-5 px-8 rounded-lg  col-span-3 row-start-8 text-center self-start 
      "
      >
        <h2 className="text-primary text-2xl font-bold text-left mb-5">
          Dagmooyinka Gobolka Banaadir
        </h2>
        <div className="grid grid-cols-10 gap-y-2">
          {districts.map((district, index) => (
            <Link
              key={index}
              href="#"
              className="text-primary text-[1.3rem] hover:underline"
            >
              {district}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
