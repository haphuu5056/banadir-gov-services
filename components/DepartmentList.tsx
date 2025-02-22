import Link from "next/link";
import Image from "next/legacy/image";
import bgImg from "@/public/bg.png";

const DepartmentList = () => {
  return (
    <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-max gap-6 container mx-auto px-4 lg:px-12">
      <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500 cursor-pointer group rounded-lg lg:col-span-1 lg:row-span-4 h-full flex flex-col relative">
        <div className="py-4 px-8">
          <Link href="/departments/xafiiska-ggb">
            <h2 className="text-2xl mb-0 md:mb-5 font-bold mt-5 text-primary group-hover:underline">
              Xafiiska GGB ahna Duqa Magaalada
            </h2>
          </Link>

          <Link
            href="/departments/"
            className="text-xl text-primary hidden lg:block"
          >
            Isgaarsiinta iyo Tiknolojiyada
          </Link>
        </div>

        <div className="relative flex-grow rounded-lg overflow-hidden flex items-end">
          <Image
            src={bgImg}
            alt="Building with palm trees"
            // width={500}
            // height={300}

            className="object-contain h-full w-full"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#3F479E] to-[#5758a9] block group text-white border-none shadow-none transition-all duration-300 px-8 py-5 lg:py-10 rounded-lg lg:col-span-1 lg:row-span-3 lg:row-start-5">
        <Link href="/departments/arimaha-bulshada/">
          <h2 className="text-2xl font-semibold sm:font-bold mb-0 md:mb-5 hover:underline">
            Waaxda Arimaha Bulshada iyo wacyigelinta
          </h2>
        </Link>
        <div className="hidden lg:flex flex-col space-y-3 font-light text-[1.3rem]">
          <Link
            href="/departments/dabdemiska-iyo-gargaarka-degdega"
            className="hover:underline"
          >
            Dabdemiska iyo Gargaarka degdega
          </Link>
          <Link
            href="/departments/Biyaha_iyo_Degaanka"
            className="hover:underline"
          >
            Biyaha iyo Degaanka
          </Link>
          <Link href="/departments/Caafimaadka" className="hover:underline">
            Caafimaadka
          </Link>
          <Link href="/departments/Daddhigista" className="hover:underline">
            Daddhigista
          </Link>
        </div>
      </div>

      <div className="py-7 px-8 rounded-lg lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1 bg-gradient-to-br from-[#3F479E] to-[#5758a9] block group text-white border-none shadow-none transition-all duration-300">
        <Link href="/departments/maamulka-maaliyada">
          <h2 className="text-2xl font-medium sm:font-bold  tracking-wide mb-0 md:mb-5 text-wrap hover:underline">
            Waaxda Maamulka Iyo Maaliyada
          </h2>
        </Link>
        <div className="space-y-3 hidden lg:flex flex-col font-light text-[1.3rem] tracking-wide">
          <Link href="" className="hover:underline">
            Daqliyadda iyo Ganaaxyadda
          </Link>
          <Link
            href="departments/maamulka-maaliyadda/canshuuraha"
            className="hover:underline"
          >
            Canshuuraha
          </Link>
          <Link href="" className="hover:underline">
            Adeegyada
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500 cursor-pointer hover:opacity-90 block group py-2 md:py-4 px-8 md:px-12 rounded-lg lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        <Link href="/departments/wararka" className="">
          <h2 className="text-2xl font-bold  tracking-wide mb-0 md:mb-5 md:mt-4 text-primary group-hover:underline">
            Wararka
          </h2>
        </Link>
        <div className="hidden lg:flex flex-col space-y-3 font-light text-primary text-[1.3rem] tracking-tight">
          <Link href="/departments/wararka/tv-ga" className=" ">
            TV-ga
          </Link>
          <Link href="">Idaacada</Link>
          <Link href="">wararka kale</Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#3F479E] to-[#5758a9] block group text-white border-none shadow-none transition-all duration-300 py-4 px-8 h-full rounded-lg lg:col-span-1 lg:col-start-2 lg:row-start-3">
        <Link href="">
          <h2 className="text-2xl tracking-wide hover:underline font-semibold">
            Cabashooyinka
          </h2>
        </Link>
      </div>

      <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500 cursor-pointer hover:opacity-90 block group py-5 lg:py-10 px-8 rounded-xl lg:col-span-1 lg:row-span-4 lg:col-start-2 lg:row-start-4 h-fit">
        <Link href="">
          <h2 className="text-2xl font-bold mb-0 md:mb-5 text-primary hover:underline">
            Ogeysiis Dadweyne
          </h2>
        </Link>

        <div className="space-y-3 hidden lg:flex flex-col font-light text-primary text-[1.3rem]">
          <Link href="" className="hover:underline">
            Gudoomiyaha dagmada shangaani
          </Link>
          <Link href="" className="hover:underline">
            Guddoomiyaha Degmada Wadajir
          </Link>
          <Link href="" className="hover:underline">
            Amarka Guddoomiyaha Gobolka
          </Link>
          <Link href="" className="hover:underline">
            Duqa Muqdisho ayaa warbixin
          </Link>
          <Link href="" className="hover:underline">
            Duqa Muqdisho ayaa warbixin
          </Link>
          <Link href="" className="hover:underline">
            Duqa Muqdisho ayaa warbixin
          </Link>
          <Link href="" className="hover:underline">
            Duqa Muqdisho ayaa warbixin
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#3F479E] to-[#5758a9] block group text-white border-none shadow-none transition-all duration-300 py-6 px-10 rounded-lg lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-3">
        <Link href="/departments/xogheynta-guud/">
          <h2 className="text-2xl font-bold mb-0 md:mb-5 hover:underline">
            Xogheynta Guud
          </h2>
        </Link>
        <div className="space-y-3 hidden lg:flex flex-col font-light text-[1.3rem]">
          <Link href="" className="hover:underline">
            Keyda xogta
          </Link>
          <Link href="" className="hover:underline">
            Qorsheynta iyo kormeerka
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500 cursor-pointer hover:opacity-90 block group px-10 py-9 rounded-lg lg:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-5 h-fit">
        <Link href="/departments/howlaha-guud/">
          <h2 className="text-primary text-2xl font-bold mb-0 md:mb-5 hover:underline">
            Waaxda Howlaha guud
          </h2>
        </Link>
        <div className="space-y-3 hidden lg:flex flex-col font-light text-primary text-[1.3rem]">
          <Link href="" className="hover:underline">
            Maamulka Dhulka
          </Link>
          <Link href="" className="hover:underline">
            Farsamada
          </Link>
          <Link href="" className="hover:underline">
            Korontada iyo Solarka
          </Link>
          <Link href="" className="hover:underline">
            Dhisma Wadaaga
          </Link>
        </div>
      </div>

      <div className="hidden md:block bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer hover:opacity-90  group text-white py-5 px-8 rounded-lg  col-span-3 row-start-8 text-center self-start ">
        <h2 className="text-primary text-2xl font-bold text-left mb-0 md:mb-5">
          Dagmooyinka Gobolka Banaadir
        </h2>
        <div className="flex gap-5 flex-wrap  ">
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
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-primary text-[1.3rem] hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;
};

export default DepartmentList;
