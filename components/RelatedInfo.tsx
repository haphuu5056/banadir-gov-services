import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedInfoMenuProps {
  department: string;
  subDept: string | null;
}

const departmentInfo: Record<string, string[]> = {
  "xafiiska-ggb": ["Mayor's Office", "City Council", "Press Releases"],
  "maamulka-maaliyada": [
    "Financial Reports",
    "Tax Information",
    "Economic Development",
  ],
  "arimaha-bulshada": [
    "Community Programs",
    "Education Initiatives",
    "Social Services",
  ],
  "amniga-siyaasada": [
    "Amniga iyo deriseynta",
    "Education and Training",
  ],
  "xogheynta-guud": [
    "Public Records",
    "Data Management",
    "Information Requests",
  ],
  "howlaha-guud": ["Public Transportation", "Environmental Initiatives"],
};

const subdepartmentInfo: Record<string, string[]> = {
  shaqada: [
    "Job Openings",
    "Employee Benefits",
    "HR Policies",
  ],
  daqliyada: [
    "Payment Deadlines",
    "Revenue Reports",
    "Fine Appeals",
  ],
  "maamulka-maaliyada": [
    "Budget Reports",
    "Financial Statements",
    "Audit Information",
  ],
  canshuuraha: [
    "Tax Rates",
    "Filing Deadlines",
    "Business Tax Guide",
  ],
  qasnadda: [
    "Investment Opportunities",
    "Debt Management",
    "Financial Forecasts",
  ],
  adeegyada: [
    "Service Catalog",
    "Customer Feedback",
    "Service Improvements",
  ],
};

export function RelatedInfoMenu({ department, subDept }: RelatedInfoMenuProps) {
  const links = subDept
    ? subdepartmentInfo[subDept]
    : departmentInfo[department] || [];

  if (links?.length === 0) return null;

  return (
    <Card className="mt-6 bg-gradient-to-b from-[#f8f8fc] to-[#F8F9FF rounded-none shadow-none ">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-[#3F479E]">
          Related Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="flex flex-col space-y-2">
          <Link
            href="#"
            className=" text-gray-600 text-lg hover:text-[#3F479E] hover:underline"
          >
            News
          </Link>

          <Link
            href="#"
            className=" text-gray-600 text-lg hover:text-[#3F479E] hover:underline"
          >
            Downloads
          </Link>
          {links?.map((link, index) => (
            <Link
              key={index}
              href="#"
              className=" text-gray-600 text-lg hover:text-[#3F479E] hover:underline"
            >
              {link}
            </Link>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
