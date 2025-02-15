import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";


export  function DepartmentList() {
  return (
    <div className="py-12 grid grid-cols-3 auto-rows-max gap-6 container mx-auto px-12">
      {departments.map((department, index) => (
        <DepartmentCard key={index} {...department} />
      ))}
    </div>
  );
}
