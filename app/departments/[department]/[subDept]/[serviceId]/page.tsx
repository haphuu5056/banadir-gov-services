"use client";

import { notFound } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
import { SidaLooBixiyo } from "@/components/taxt-payment/SidaLooBixiyo";
import { KaBixiKoontada } from "@/components/taxt-payment/KaBixiKoontada";
import { DirectDebit } from "@/components/taxt-payment/DirectDebit";
import { HababKale } from "@/components/taxt-payment/HababKale";


// Payment methods data
const paymentMethods = [
  {
    id: "1",
    title: "Sida loo bixiyo Canshuurta",
    content: {
      title: "Sida loo bixiyo Canshuurta",
      description: "Waxaa jira siyaabo kala duwan oo aad canshuurta ku bixin karto:",
      details: [
        "Online-ka - Habka ugu fudud ee aad ku bixin karto canshuurta",
        "Direct Debit - Si toos ah ayaa lacagta laguuga jaraya bil walba",
        "Xafiiska Bangiga - Booqo xafiiska bangiga si aad u bixiso canshuurta",
        "Mobile Money - Isticmaal adeegyada lacag bixinta moobilka",
      ],
      note: "Dooro habka kuu fudud ee aad ku bixin karto canshuurta. Haddii aad u baahan tahay caawimaad, fadlan nala soo xiriir.",
    },
  },
  {
    id: "2",
    title: "Ka bixi koontadaada BRUM",
    content: {
      title: "Ka bixi koontadaada BRUM",
      description: "BRUM waa nidaamka cusub ee canshuur bixinta elektaroonigga ah:",
      steps: [
        "1. Gal websaydka BRUM",
        "2. Isticmaal lambarka canshuur bixiyahaaga",
        "3. Dooro nooca canshuurta aad bixineyso",
        "4. Xaqiiji macluumaadkaaga",
        "5. Bixi canshuurta",
      ],
      requirements: ["Lambarka canshuur bixiyaha", "Email-ka shaqeynaya", "Telefoon lambar", "Dokumentiyo muhiim ah"],
    },
  },
  {
    id: "3",
    title: "Direct Debit",
    content: {
      title: "Direct Debit",
      description: "Direct Debit waa hab fudud oo toos ah oo bil walba lacagta lagaaga jari doono:",
      benefits: [
        "Wax lacag ah lagaama jari doono ilaa taariikhda la isku raacay",
        "Waxaad dooran kartaa taariikhda bixinta",
        "Si toos ah ayaa lacagta laguuga jaraya bil walba",
        "Ma ilowdid inaad bixiso canshuurta",
      ],
      setup: [
        "1. Buuxi foomka Direct Debit-ka",
        "2. Soo gudbi caddeynta koontada bangiga",
        "3. Dooro taariikhda bixinta",
        "4. Saxiix heshiiska",
      ],
    },
  },
  {
    id: "4",
    title: "Habab kale oo lacag bixin ah",
    content: {
      title: "Habab kale oo lacag bixin ah",
      description: "Waxaa jira habab kale oo aad ku bixin karto canshuurta:",
      methods: [
        {
          name: "Mobile Money",
          details: "Isticmaal EVC Plus, Zaad, ama adeegyada kale ee moobilka",
        },
        {
          name: "Wakiilada",
          details: "Booqo wakiilada canshuur ururinta ee xaafadaada",
        },
        {
          name: "Bangiyada",
          details: "Tag xarumaha bangiyada la oggol yahay",
        },
      ],
      note: "Dooro habka kuu fudud. Xaqiiji inaad hesho rasiidka lacag bixinta.",
    },
  },
  {
    id: "5",
    title: "Nala soo xiriir",
    content: {
      title: "Nala soo xiriir",
      description: "Waxaan diyaar u nahay inaan kaa caawino su'aalahaaga ku saabsan canshuur bixinta:",
      contactInfo: {
        phone: "+252 61 XXX XXXX",
        email: "canshuur@banadir.gov.so",
        hours: "8:00 - 4:00",
        address: "Xarunta Maamulka Gobolka Banaadir, Mogadishu",
      },
      support: ["Su'aalaha Guud", "Caawimaada Canshuur bixinta", "Cabashooyin", "Codsiyada Dhimista"],
    },
  },
]

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
        <div className="flex flex-row lg:flex-col gap-8 max-w-4xl mx-auto px-6">
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
