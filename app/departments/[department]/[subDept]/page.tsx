import { notFound } from "next/navigation";
import { navigationData } from "@/data/navigation";
import Canshuurta from "@/components/sections/Canshuurta";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";

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
    <div className="container mx-auto  ">
        <div className="mb-3 ">
                <Breadcrumb items={[  { label: department.title,href: `/departments/${encodeURIComponent(params.department)}`  }, { label: subDepartment.title }]} />
              </div>
      {subDepartment.title === "Canshuuraha" ? (
        <Canshuurta />
      ) : (
        <div className="py-5">
          <h1 className="text-2xl font-bold text-primary mb-4">
            {subDepartment.title}
          </h1>
          <div className="prose prose-lg max-w-2xl space-y-3">
          <p className="lead">
            The Benadir Regional Administration has unveiled its comprehensive strategy for sustainable development,
            marking a significant step forward in its commitment to the region&apos;s progress and prosperity.
          </p>

          <h2 className="font-semibold text-2xl">Strategic Vision for Development</h2>
          <p>
            Under the leadership of Governor Omar Mohamud Finnish, the administration has outlined a multi-faceted
            approach to address key challenges facing the region. This initiative encompasses infrastructure
            development, public service enhancement, and economic growth strategies, all designed to create lasting
            positive impact for residents.
          </p>

          <h2 className="font-semibold text-2xl">Infrastructure and Public Services</h2>
          <p>
            The administration&apos;s focus on infrastructure development includes major road rehabilitation projects,
            improvements to water supply systems, and the modernization of waste management facilities. These projects
            are designed to enhance the quality of life for residents while creating a foundation for sustainable urban
            growth.
          </p>

          <blockquote>
            &quot;Our commitment to delivering durable solutions is unwavering. We are focused on creating lasting positive
            change that will benefit generations to come.&quot; - Omar Mohamud Finnish, Governor of Benadir Region
          </blockquote>

          <h2 className="font-semibold text-2xl">Community Engagement and Participation</h2>
          <p>
            A key aspect of the administration&apos;s approach is its emphasis on community engagement. Through regular town
            halls and community consultations, residents are actively involved in the planning and implementation of
            development projects, ensuring that initiatives align with community needs and priorities.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
          >
            Development
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
          >
            Infrastructure
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
          >
            Community
          </Link>
        </div>
        </div>
      )}
      {/* Add your sub-department specific content here */}
    </div>
  );
}

// export default SubDepartmentPage;