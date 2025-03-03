import Link from "next/link";
import Image from "next/legacy/image";
import bgImg from "@/public/bg.png";

// Define the department data
export const homeDepartments = [
  {
    title: "Xafiiska GGB ahna Duqa Magaalada",
    link: "/homedeparment/ggb",
    background: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
    subLinks: [
      { name: "Isgaarsiinta iyo Tiknolojiyada", link: "/homedeparment/ggb/isgaarsiinta-tiknolojiyada" },
    ],
    image: bgImg,
    cols: "lg:col-span-1 lg:row-span-4",
  },
  {
    title: "Waaxda Arimaha Bulshada iyo wacyigelinta",
    link: "/homedeparment/arimaha-bulshada",
    background: "bg-gradient-to-br from-[#3F479E] to-[#5758a9]",
    textColor: "text-white",
    subLinks: [
      { name: "Dabdemiska iyo Gargaarka degdega", link: "/homedeparment/arimaha-bulshada/dabdemiska-gargaarka" },
      { name: "Biyaha iyo Degaanka", link: "/homedeparment/arimaha-bulshada/biyaha-deegaanka" },
      { name: "Caafimaadka", link: "/homedeparment/arimaha-bulshada/caafimaadka" },
      { name: "Daddhigista", link: "/homedeparment/arimaha-bulshada/daddhigista" },
    ],
    cols: "lg:col-span-1 lg:row-span-3 lg:row-start-5",
  },
  {
    title: "Waaxda Maamulka Iyo Maaliyada",
    link: "/homedeparment/maamulka-maaliyada",
    background: "bg-gradient-to-br from-[#3F479E] to-[#5758a9]",
    textColor: "text-white",
    subLinks: [
      { name: "Daqliyadda iyo Ganaaxyadda", link: "/homedeparment/maamulka-maaliyada/daqliyadda-ganaaxyadda" },
      { name: "Canshuuraha", link: "/homedeparment/maamulka-maaliyada/canshuuraha" },
      { name: "Adeegyada", link: "/homedeparment/maamulka-maaliyada/adeegyada" },
    ],
    cols: "lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1",
  },
  {
    title: "Wararka",
    link: "/homedeparment/wararka",
    background: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
    subLinks: [
      { name: "TV-ga", link: "/homedeparment/wararka/tv-ga" },
      { name: "Idaacada", link: "/homedeparment/wararka/idaacada" },
      { name: "Wararka Kale", link: "/homedeparment/wararka/wararka-kale" },
    ],
    cols: "lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Cabashooyinka",
    link: "/homedeparment/cabashooyinka",
    background: "bg-gradient-to-br from-[#3F479E] to-[#5758a9]",
    textColor: "text-white",
    cols: "lg:col-span-1 lg:col-start-2 lg:row-start-3",
  },
  {
    title: "Ogeysiis Dadweyne",
    link: "/homedeparment/ogeysiis-dadweyne",
    background: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
    subLinks: [
      { name: "Gudoomiyaha dagmada Shangaani", link: "/homedeparment/ogeysiis-dadweyne/gudoomiyaha-shangaani" },
      { name: "Guddoomiyaha Degmada Wadajir", link: "/homedeparment/ogeysiis-dadweyne/gudoomiyaha-wadajir" },
      { name: "Amarka Guddoomiyaha Gobolka", link: "/homedeparment/ogeysiis-dadweyne/amar-gobolka" },
      { name: "Duqa Muqdisho ayaa warbixin", link: "/homedeparment/ogeysiis-dadweyne/warbixin-duqa" },
    ],
    cols: "lg:col-span-1 lg:row-span-4 lg:col-start-2 lg:row-start-4 h-fit",
  },
  {
    title: "Xogheynta Guud",
    link: "/homedeparment/xogheynta-guud",
    background: "bg-gradient-to-br from-[#3F479E] to-[#5758a9]",
    textColor: "text-white",
    subLinks: [
      { name: "Keyda xogta", link: "/homedeparment/xogheynta-guud/keyda-xogta" },
      { name: "Qorsheynta iyo kormeerka", link: "/homedeparment/xogheynta-guud/qorsheynta-kormeerka" },
    ],
    cols: "lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-3",
  },
  {
    title: "Waaxda Howlaha guud",
    link: "/homedeparment/howlaha-guud",
    background: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
    subLinks: [
      { name: "Maamulka Dhulka", link: "/homedeparment/howlaha-guud/maamulka-dhulka" },
      { name: "Farsamada", link: "/homedeparment/howlaha-guud/farsamada" },
      { name: "Korontada iyo Solarka", link: "/homedeparment/howlaha-guud/korontada-solarka" },
      { name: "Dhisma Wadaaga", link: "/homedeparment/howlaha-guud/dhisma-wadaaga" },
    ],
    cols: "lg:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-5 h-fit",
  },
];


const DepartmentList = () => {
  return (
    <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-max gap-6 container mx-auto px-4 lg:px-12">
      {homeDepartments.map((department, index) => (
        <div
          key={index}
          className={`${department.background} border-none shadow-none transition-all duration-500 cursor-pointer group rounded-lg h-full flex flex-col relative ${department.cols}`}
        >
          <div className="py-4 px-8">
            <Link href={department.link}>
              <h2 className={`text-2xl mb-0 md:mb-5 font-bold mt-5 ${department.textColor} group-hover:underline`}>
                {department.title}
              </h2>
            </Link>

            {department.subLinks && (
              <div className="hidden lg:flex flex-col space-y-3 font-light text-[1.3rem]">
                {department.subLinks.map((sub, subIndex) => (
                  <Link key={subIndex} href={sub.link} className={`hover:underline ${department.textColor}`}>
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {department.image && (
            <div className="relative flex-grow rounded-lg overflow-hidden flex items-end">
              <Image src={department.image} alt="Building with palm trees" className="object-contain h-full w-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
