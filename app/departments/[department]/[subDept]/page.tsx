import { notFound } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  FileText,
  Calculator,
  Percent,
  Receipt,
  Building2,
} from "lucide-react";

const gradientClasses = [
  "bg-gradient-to-br from-[#C5C8FF] to-[#D8DAFF] hover:from-[#B0B4FF] hover:to-[#C5C8FF] text-[#3F479E]",
  "bg-gradient-to-br from-[#C5D8F0] to-[#D6E4F0] hover:from-[#A8C4E0] hover:to-[#C5D8F0] text-[#2C3E50]",
  "bg-gradient-to-br from-[#C5E8C5] to-[#D8ECD8] hover:from-[#A8D8A8] hover:to-[#C5E8C5] text-[#2F4F4F]",
  "bg-gradient-to-br from-[#E0D8C5] to-[#E6DFD1] hover:from-[#D0C0A8] hover:to-[#E0D8C5] text-[#5D4037]",
  "bg-gradient-to-br from-[#C5E8E8] to-[#D1EDED] hover:from-[#A8D8D8] hover:to-[#C5E8E8] text-[#006064]",
];
interface PageProps {
  params: {
    department: string;
    subDept: string;
  };
}

// Custom service cards for Canshuuraha section
const taxServices = [
  {
    id: "diiwaan-geli",
    title: "Diiwaan geli Canshuurta",
    description: "Is diiwaan geli si aad u hesho adeegyada canshuurta",
    icon: FileText,
    href: "diiwaan-geli",
  },
  {
    id: "bixi",
    title: "Bixi Canshuurta",
    description: "Siyaabaha loo bixiyo canshuurta",
    icon: CreditCard,
    href: "bixi",
  },
  {
    id: "dhimista",
    title: "Codso Dhimista Canshuurta",
    description: "Codsiga dhimista ama ka dhaafida canshuurta",
    icon: Percent,
    href: "dhimista",
  },
  {
    id: "macluumaad",
    title: "Macluumaadka Canshuur bixiyaha",
    description: "Cusbooneysii macluumaadkaaga",
    icon: Receipt,
    href: "macluumaad",
  },
  {
    id: "elektaroonik",
    title: "Canshuur bixinta Elektaroonigga",
    description: "Iska diiwaan geli adeega elektaroonigga",
    icon: Calculator,
    href: "elektaroonik",
  },
  {
    id: "qiimaha",
    title: "Qiimaha Canshuuraha",
    description: "Eeg qiimaha iyo qaybaha kala duwan",
    icon: Building2,
    href: "qiimaha",
  },
];

export default function SubdepartmentPage({ params }: PageProps) {
  const department = navigationData.find(
    (dept) => dept.id === decodeURIComponent(params.department)
  );
  const subdepartment = department?.items?.find(
    (subDept) => subDept.id === decodeURIComponent(params.subDept)
  );

  if (!department || !subdepartment) {
    notFound();
  }

  // Special layout for Canshuuraha section
  if (subdepartment.id === "canshuuraha") {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">
            {subdepartment.title}
          </h1>
          <p className="text-[#5A6A7E] mt-2">{subdepartment.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {taxServices.map((service, index) => (
            <Link
              key={service.id}
              href={`/departments/${encodeURIComponent(
                params.department
              )}/${encodeURIComponent(params.subDept)}/${service.id}`}
            >
              <Card
                className={cn(
                  "group relative block py-6 px-6 rounded transition-all duration-300 ",
                  "transform hover:-translate-y-1",
                  "border border-gray-100",
                  "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
                  "hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
                  gradientClasses[index % gradientClasses.length]
                )}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex justify-between gap-5 items-center">
                  <div>
                    <h2 className="text-2xl font-semibold  group-hover:opacity-90 transition-opacity">
                      {service.title}
                    </h2>
                  </div>
                  {service.icon && (
                    <service.icon
                      size={60}
                      className="font-extralight opacity-85"
                    />
                  )}
                </div>

                {/* Bottom Shine */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default layout for other subdepartments
  return (
    <div className="px-2 md:px-10  ">
      <div className="mb-10">
        <h1 className="text-3xl mb-1 font-bold text-primary">
          {subdepartment.title}
        </h1>
        <p>{subdepartment.description}</p>
      </div>

      {subdepartment.services ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subdepartment.services.map((service, index) => (
              <Link
                key={service.id}
                href={`/departments/${encodeURIComponent(
                  params.department
                )}/${encodeURIComponent(params.subDept)}/${encodeURIComponent(
                  service.id
                )}`}
              >
                <Card
                  className={cn(
                    "group relative block py-6 px-6 rounded transition-all duration-300 ",
                    "transform hover:-translate-y-1",
                    "border border-gray-100",
                    "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
                    "hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
                    gradientClasses[index % gradientClasses.length]
                  )}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative flex justify-between gap-5 items-center">
                    <div>
                      <h2 className="text-3xl font-semibold  group-hover:opacity-90 transition-opacity">
                        {service.title}
                      </h2>
                    </div>
                    {service.icon && (
                      <service.icon
                        size={60}
                        className="font-extralight opacity-85"
                      />
                    )}
                  </div>

                  {/* Bottom Shine */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : <div className="space-y-5">
      <p className="text-gray-700 leading-relaxed">
        Waaxda Maamulka iyo Maaliyadda ee Maamulka Gobolka Banaadir waa
        xudunta nidaamka maaraynta iyo dhaqaalaha ee gobolka. Waaxdan waxay ka
        shaqeysaa dejinta, hirgelinta, iyo kormeerka siyaasadaha iyo
        hab-raacyada lagu maareeyo maamulka iyo maaliyadda gobolka, iyada oo
        xooga saareysa hufnaanta, isla xisaabtanka, iyo daah-furnaanta.
      </p>
      <h2 className="text-2xl font-semibold text-primary">Hadafka Waaxda</h2>
      <p className="text-gray-700 leading-relaxed">
        Hadafka ugu weyn ee Waaxda Maamulka iyo Maaliyadda waa in la hubiyo in
        kheyraadka maaliyadeed ee Gobolka Banaadir si hufan, mas’uuliyad leh,
        iyo waafaqsan xeerarka dowladda loo adeegsado, looguna adeegayo
        bulshada gobolka.
      </p>
      <h2 className="text-2xl font-semibold text-primary">
        Waajibaadka iyo Shaqooyinka Waaxda
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Diyaarinta miisaaniyadda sanadlaha ah ee Gobolka Banaadir.</li>
        <li>La socodka iyo xakamaynta kharashaadka iyo dakhliga maamulka.</li>
        <li>
          Hubinta in dhammaan waaxyaha kala duwan ay u hoggaansamaan shuruucda
          maaliyadeed iyo xeerarka dowladda.
        </li>
        <li>
          Hirgelinta nidaamyo casri ah oo lagu maareeyo xisaabaadka iyo
          warbixinaha maaliyadeed.
        </li>
        <li>
          Xoojinta isla xisaabtanka gudaha ee hay’adaha kala duwan ee Gobolka
          Banaadir.
        </li>
        <li>
          Ka qayb qaadashada horumarinta hababka maaraynta shaqaalaha iyo
          kheyraadka aadanaha.
        </li>
        <li>
          Kormeerka iyo xaqiijinta in adeegyada bulshada loo maareeyo si
          waafaqsan miisaaniyadda la ansixiyay.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary">
        Muhiimadda Waaxda
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Waaxda Maamulka iyo Maaliyadda waa laf-dhabarta hubisa in maamulka
        Gobolka Banaadir uu ku shaqeeyo nidaam maamul-wanaag leh, isla
        markaana la hubiyo in dhammaan kheyraadka iyo hantida dowladdu si
        waafaqsan sharciga loo maamulo. Waa waaxda mas’uulka ka ah dhismaha
        nidaam daah-furan oo bulshada la wadaagto warbixinaha ku saabsan
        isticmaalka hantida guud.
      </p>
      <h2 className="text-2xl font-semibold text-primary">
        La Xiriir Waaxda
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Haddii aad u baahato warbixin dheeraad ah ama aad qabto su’aalo ku
        saabsan adeegyada Waaxda Maamulka iyo Maaliyadda, fadlan la xiriir
        xafiiska gobolka ama booqo xarunta Aqalka Dowladda Hoose ee
        Xamarweyne, Muqdisho.
      </p>{" "}
      </div>}
    </div>
  );
}
