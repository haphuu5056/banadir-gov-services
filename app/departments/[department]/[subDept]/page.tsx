import { notFound } from "next/navigation";
import { navigationData } from "@/data/navigation";
import Canshuurta from "@/components/sections/Canshuurta";

interface PageProps {
  params: {
    department: string;
    subDept: string;
  };
}

export default function SubDepartmentPage({ params }: PageProps) {
  const department = navigationData.find(
    (dept) => dept.id === decodeURIComponent(params.department)
  );
  const subDepartment = department?.items?.find(
    (subDept) => subDept.id === decodeURIComponent(params.subDept)
  );

  if (!department || !subDepartment) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      {subDepartment.title === "Canshuuraha" ? (
        <Canshuurta />
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-[#d7d8e7] mb-4">
            {department.title}
          </h1>
          <h2 className="text-xl text-[#3F479E] mb-6">{subDepartment.title}</h2>
          <h2 className="text-center text-4xl sm:text-4xl md:text-6xl mt-20 font-extrabold text-gray-800 animate-pulse">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Coming Soon
            </span>
            <span className="ml-2 animate-bounce">💫⚡✨</span>
          </h2>
        </div>
      )}
      {/* Add your sub-department specific content here */}
    </div>
  );
}

// export default SubDepartmentPage;