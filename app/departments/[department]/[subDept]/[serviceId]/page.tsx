"use client";

import { notFound } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
import { SidaLooBixiyo } from "@/components/taxt-payment/SidaLooBixiyo";
import { KaBixiKoontada } from "@/components/taxt-payment/KaBixiKoontada";
import { DirectDebit } from "@/components/taxt-payment/DirectDebit";
import { HababKale } from "@/components/taxt-payment/HababKale";


// Navigation sections
const sections = [
  { id: "1", title: "Sida loo bixiyo Canshuurta", component: SidaLooBixiyo },
  { id: "2", title: "Ka bixi koontadaada BRUM", component: KaBixiKoontada },
  { id: "3", title: "Direct Debit", component: DirectDebit },
  { id: "4", title: "Habab kale oo lacag bixin ah", component: HababKale },
]

interface PageProps {
  params: {
    department: string;
    subDept: string;
    serviceId: string;
  };
}

export default function ServicePage({ params }: PageProps) {
  const [activeSection, setActiveSection] = useState("1")

  const department = navigationData.find(
    (dept) => dept.id === decodeURIComponent(params.department)
  );
  const subdepartment = department?.items?.find(
    (subDept) => subDept.id === decodeURIComponent(params.subDept)
  );

  // Check if we're in the Canshuuraha section
  if (subdepartment?.id === "canshuuraha") {
    // For Canshuuraha, we use custom services defined in the subdepartment page
    const taxService = [
      { id: "diiwaan-geli", title: "Diiwaan geli Canshuurta" },
      { id: "bixi", title: "Bixi Canshuurta" },
      { id: "dhimista", title: "Codso Dhimista Canshuurta" },
      { id: "macluumaad", title: "Macluumaadka Canshuur bixiyaha" },
      { id: "elektaroonik", title: "Canshuur bixinta Elektaroonigga" },
      { id: "qiimaha", title: "Qiimaha Canshuuraha" },
    ].find((service) => service.id === params.serviceId);

    if (!taxService) {
      notFound();
    }

    // Special layout for payment service
    if (params.serviceId === "bixi") {
      const ActiveComponent = sections.find((section) => section.id === activeSection)?.component || SidaLooBixiyo
  
      return (
        <div className="lg:flex  lg:flex-col gap-8 max-w-4xl mx-auto px-6">
          {/* Navigation Section */}
          <Card className=" border rounded shadow-none bg-gray-50 mb-6 max-w-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-sans font-semibold text-gray-900 border-b pb-4">Qeybtaan Gudaheeda</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center   p-2 rounded-md transition-colors text-left ${
                      activeSection === section.id ? " text-gray-900" : " text-primary "
                    } `}
                  >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full text-primary text-lg ${activeSection === section.id ? "bg-black text-white" : "bg-gray-200 "}`}>
                      {section.id}
                    </span>
                    <span className={`text-xl ml-2 ${activeSection === section.id ? "" : "hover:underline"}`}>{section.title}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
  
          {/* Content Section */}
          <div className="lg:max-w-3xl w-full">
            <ActiveComponent />
          </div>
        </div>
      )
    }

    // For other tax services, we'll show a placeholder content
    return (
      <div>
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">
          {taxService.title}
        </h1>
        <p className="text-[#5A6A7E]">
          Macluumaad dheeraad ah oo ku saabsan adeegan ayaa la soo bandhigi
          doonaa.
        </p>
      </div>
    );
  }

  // For non-Canshuuraha services, we use the original structure
  const service = subdepartment?.services?.find(
    (serv) => serv.id === decodeURIComponent(params.serviceId)
  );

  if (!department || !subdepartment || !service) {
    notFound();
  }

  // Default layout for other services
  return (
    <div className="px-6 mb-12 max-w-4xl  mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">{service.title}</h1>
        <p className="text-[#5A6A7E] mt-2">{service.description}</p>
      </div>

      <div className="">
        <Card className="border-none rounded-none shadow-none">
          <CardContent>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
                <p className="text-[#4B5563]">{service.howToApply}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                <ul className="list-disc pl-5 text-[#4B5563]">
                  {service.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Processing Time</h2>
                <p className="text-[#4B5563]">{service.processingTime}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Fees</h2>
                <p className="text-[#4B5563]">{service.fees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
