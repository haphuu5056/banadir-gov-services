import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  DollarSign,
  Megaphone,
  Rss,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";
import bgImg from "@/public/bg.png";
export default function DepartmentList() {
  return (
    <div className="container mx-auto px-4 lg:px-12 py-12">
      <div className="grid grid-cols-12 gap-6 ">
        {/* Xafiiska GGB - Tall Card */}
        <div className="col-span-12 lg:col-span-4 row-span-4 bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] rounded-lg overflow-hidden  cursor-pointer group flex flex-col relative">
          <div className="p-6 px-8">
            <Link href="/departments/xafiiska-ggb">
              <h2 className="text-2xl font-bold text-primary hover:underline mb-4">
                Xafiiska GGB ahna Duqa Magaalada
              </h2>
            </Link>
            <Link
              href="/departments/xafiiska-ggb/isgaarsiinta"
              className="text-lg text-primary hover:underline block mb-4"
            >
              Isgaarsiinta iyo Tiknolojiyada
            </Link>
          </div>
          <div className="relative flex-grow rounded-lg overflow-hidden flex items-end">
            <Image
              src={bgImg}
              alt="Department building"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Maamulka Iyo Maaliyada - Medium Card */}
        <div className="col-span-12 lg:col-span-4 row-span-2 bg-gradient-to-br from-[#3F479E] to-[#5758a9] rounded-lg p-6 text-white">
          <div className="flex justify-between items-start">
            <Link href="/departments/maamulka-maaliyada">
              <h2 className="text-2xl font-bold hover:underline">
                {" "}
                Maamulka Iyo Maaliyada
              </h2>
            </Link>
            <DollarSign className=" opacity-80 lg:hidden block " size={35} />
          </div>
          <div className="mt-4 hidden lg:block space-y-2">
            <Link
              href="/departments/maamulka-maaliyada/daqliyada"
              className="block text-lg hover:underline"
            >
              Daqliyadda iyo Ganaaxyadda
            </Link>
            <Link
              href="/departments/maamulka-maaliyada/canshuuraha"
              className="block text-lg hover:underline"
            >
              Canshuuraha
            </Link>
            <Link
              href="/departments/maamulka-maaliyada/adeegyada"
              className="block text-lg hover:underline"
            >
              Adeegyada
            </Link>
          </div>
        </div>

        {/* Wararka - Medium Card */}
        <div className="col-span-12 lg:col-span-4 row-span-2 bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] rounded-lg p-6">
          <div className="flex justify-between items-start">
            <Link href="/departments/wararka">
              <h2 className="text-2xl font-bold text-primary hover:underline">
                Wararka
              </h2>
            </Link>
            <Rss className=" opacity-80 lg:hidden block  text-primary" size={35}/>
          </div>
          <div className="mt-4 hidden lg:block space-y-2">
            <Link
              href="/departments/wararka/tv-ga"
              className="block text-lg text-primary hover:underline"
            >
              TV-ga
            </Link>
            <Link
              href="/departments/wararka/idaacada"
              className="block text-lg text-primary hover:underline"
            >
              Idaacada
            </Link>
            <Link
              href="/departments/wararka/wararka-kale"
              className="block text-lg text-primary hover:underline"
            >
              wararka kale
            </Link>
          </div>
        </div>

        {/* Cabashooyinka - Small Card */}
        <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-[#3F479E] to-[#5758a9] rounded-lg p-6 text-white">
          <div className="flex justify-between items-center">
            <Link href="/departments/cabashooyinka">
              <h2 className="text-2xl font-bold hover:underline">
                Cabashooyinka
              </h2>
            </Link>
            <UserCheck className=" opacity-80 lg:hidden block" size={35} />
          </div>
        </div>

        {/* Ogeysiis Dadweyne - Medium Card */}
        <div className="col-span-12 lg:col-span-4 row-span-2 bg-gradient-to-br from-[#3F479E] to-[#5758a9] text-white rounded-lg p-6">
          <div className="flex justify-between items-start">
            <Link href="">
              <h2 className="text-2xl font-bold hover:underline">
                Ogeysiis Dadweyne
              </h2>
            </Link>
            <Megaphone className=" opacity-80 lg:hidden block   text-white" size={35}/>
          </div>
          <div className="mt-4 hidden lg:block space-y-2">
            {[
              "Bixinta Adeegyada Dowladda",
              "Isdiiwaangelinta Dadweynaha",
              "Xilliyada Bandowga",
              "Ogeysiisyada Caafimaadka",
              "Maalmaha Fasaxa & Ciidaha",
              "Digniinta Cimilada",
            ].map((item, index) => (
              <Link
                key={index}
                href=""
                className="block text-lg text-white hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Arimaha Bulshada - Tall Card */}
        <div className="col-span-12 lg:col-span-4 row-span-4 bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] rounded-lg p-6 px-8 text-primary">
          <div className="flex justify-between items-start">
            <Link href="/departments/arimaha-bulshada/">
              <h2 className="text-2xl font-bold hover:underline">
                {" "}
                Arimaha Bulshada iyo wacyigelinta
              </h2>
            </Link>
            <Users className=" opacity-80 lg:hidden block" size={35} />
          </div>
          <div className="mt-5 hidden lg:block space-y-2">
            {[
              {
                text: "Dabdemiska iyo Gargaarka degdega",
                href: "/departments/arimaha-bulshada/dabdemiska",
              },
              {
                text: "Biyaha iyo Degaanka",
                href: "/departments/arimaha-bulshada/biyaha",
              },
              {
                text: "Caafimaadka",
                href: "/departments/arimaha-bulshada/caafimaadka",
              },
              {
                text: "Diinta iyo Awqaafta",
                href: "/departments/arimaha-bulshada/diinta",
              },
              {
                text: "Beeraha iyo jardiinooyinka",
                href: "/departments/arimaha-bulshada/Beeraha",
              },
              {
                text: "Baahiyaha gaarka",
                href: "/departments/arimaha-bulshada/Baahiyaha",
              },
              {
                text: "Xiriirka Dadweynaha",
                href: "/departments/arimaha-bulshada/Xiriirka",
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-[1.3rem] hover:underline"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Amniga iyo Siyasadda - Tall Card */}
        <div className="col-span-12 lg:col-span-4 row-span-3 bg-gradient-to-br from-[#3F479E] to-[#5758a9] text-white rounded-lg p-6 px-8">
          <div className="flex justify-between items-start">
            <Link href="/departments/amniga-siyaasada">
              <h2 className="text-2xl font-bold  hover:underline">
                Amniga iyo Siyasadda
              </h2>
            </Link>
            <Building2 className=" opacity-80 lg:hidden block  text-white" size={35}/>
          </div>
          <div className="mt-4 hidden lg:block space-y-2">
            {[
              { text: "Amniga iyo deriseynta", href: "amniga" },
              { text: "Siyaasada iyo Dimoqraadiyada", href: "siyaasada" },
              { text: "Warfaafinta", href: "warfaafinta" },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/departments/amniga-siyaasada/${item.href}`}
                className="block text-lg text-white hover:underline"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Howlaha guud - Tall Card */}
        <div className="col-span-12 lg:col-span-4 row-span-3 bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] rounded-lg p-6 px-8">
          <div className="flex justify-between items-start">
            <Link href="/departments/howlaha-guud/">
              <h2 className="text-2xl font-bold text-primary hover:underline">
                {" "}
                Howlaha guud
              </h2>
            </Link>
            <Wrench className=" opacity-80 lg:hidden block  text-primary" size={35} />
          </div>
          <div className="mt-4 hidden lg:block space-y-2">
            {[
              "Maamulka Dhulka",
              "Farsamada",
              "Korontada iyo Solarka",
              "Dhisma Wadaaga",
            ].map((item, index) => (
              <Link
                key={index}
                href=""
                className="block text-lg text-primary hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Districts Section */}
        <div className="col-span-12 bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] rounded-lg p-6 px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Dagmooyinka Gobolka Banaadir
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Boondheere",
              "Cabdicasiis",
              "Deyniile",
              "Dharkeenley",
              "Darusalam",
              "Hodan",
              "Yaqshiid",
              "warnabada",
              "Xamarjajab",
              "Wadajir",
              "Howlwadaag",
              "Huriwaa",
              "Kaxda",
              "Kaaraan",
              "Shibis",
              "Xamarweyne",
              "Shangaani",
              "Gubadley",
              "Garasbaley",
            ].map((district) => (
              <Link
                key={district}
                href="#"
                className="text-[1.3rem] text-primary hover:underline"
              >
                {district}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
