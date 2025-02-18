import Link from "next/link";
import Image from "next/legacy/image";
import bgImg from "@/public/bg.png";
const DepartmentList = () => {
  return (
<div className=" py-12 grid grid-cols-3 auto-rows-max gap-6 container mx-auto px-12">
        <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer   group rounded-lg col-span-1 row-span-4 h-full flex flex-col relative">
          <div className="py-4 px-8 ">
            <Link href="/departments/">
              <h2 className="text-2xl mb-5 font-bold mt-5  text-primary group-hover:underline">
                Xafiiska GGB ahna Duqa Magaalada
              </h2>
            </Link>

            <Link href='/departments/' className="text-xl text-primary">
              Isgaarsiinta iyo Tiknolojiyada
            </Link>
          </div>

          <div className="relative flex-grow rounded-lg overflow-hidden flex items-end">
            <Image
              src={bgImg}
              alt="Building with palm trees"
              width={500} // Adjust width dynamically
              height={300} // Adjust height dynamically
              className="object-contain w-full"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3F479E] to-[#5f60bc] block group text-white border-none shadow-none transition-all duration-300 px-8 py-10 rounded-lg  col-span-1 row-span-3 row-start-5  ">
          <Link href="/departments/arimaha-bulshada">
            <h2 className="text-2xl font-bold mb-5 hover:underline">
              Waaxda Arimaha Bulshada iyo wacyigelinta
            </h2>
          </Link>
          <div className="flex flex-col space-y-3 font-light text-[1.3rem]  ">
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
        <div className="bg-[#3F479E] py-7 px-8 rounded-lg  col-span-1 row-span-2 col-start-2 row-start-1 bg-gradient-to-br from-[#3F479E] to-[#5f60bc] block group text-white border-none shadow-none transition-all duration-300 ">
          <Link href="/departments/maamulka-maaliyadda">
            <h2 className="text-2xl font-bold mb-5  text-wrap hover:underline">
              Waaxda Maamulka Iyo <br /> Maaliyada
            </h2>
          </Link>
          <div className="space-y-3 flex flex-col font-light text-[1.3rem] tracking-wide">
            <Link href="" className="hover:underline">
              Daqliyadda iyo Ganaaxyadda
            </Link>
            <Link href="" className="hover:underline">
              Canshuuraha
            </Link>
            <Link href="" className="hover:underline">
              Adeegyada
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer hover:opacity-90 block group py-4 px-12 rounded-lg   col-span-1 row-span-2 col-start-3 row-start-1">
          <Link href="/departments/wararka" className="">
            <h2 className="text-2xl font-bold mb-5 mt-4 text-primary group-hover:underline">
              Wararka
            </h2>
          </Link>
          <div className="flex flex-col space-y-3 font-light text-primary text-[1.3rem] tracking-tight ">
            <Link href="/departments/wararka/tv-ga" className=" ">
              TV-ga
            </Link>
            <Link href="">Idaacada</Link>
            <Link href="">wararka kale</Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#3F479E] to-[#5f60bc] block group text-white border-none shadow-none transition-all duration-300 py-4 px-8   h-full rounded-lg col-span-1 col-start-2 row-start-3 ">
          <Link href="">
            <h2 className="text-2xl tracking-wide hover:underline">
              Cabashooyinka
            </h2>
          </Link>
        </div>
        <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer hover:opacity-90 block group py-10 px-8 rounded-xl  col-span-1 row-span-4 col-start-2 row-start-4 h-fit">
          <Link href="">
            <h2 className=" text-2xl font-bold mb-5  text-primary hover:underline ">
              Ogeysiis Dadweyne
            </h2>
          </Link>

          <div className="space-y-3 flex flex-col font-light text-primary text-[1.3rem]">
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
        <div className="bg-gradient-to-br from-[#3F479E] to-[#5f60bc] block group text-white border-none shadow-none transition-all duration-300 py-6 px-10 rounded-lg  col-span-1 row-span-2 col-start-3 row-start-3">
          <h2 className="text-2xl font-bold  mb-5">Xogheynta Guud</h2>
          <div className="space-y-3 flex flex-col font-light text-[1.3rem]">
            <Link href="" className="hover:underline">
              Keyda xogta
            </Link>
            <Link href="" className="hover:underline">
              Qorsheynta iyo kormeerka
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer hover:opacity-90 block group px-10 py-9 rounded-lg  col-span-1 row-span-3 col-start-3 row-start-5 h-fit">
          <h2 className="text-primary text-2xl font-bold  mb-5">
            Waaxda Howlaha guud
          </h2>
          <div className="space-y-3 flex flex-col font-light text-primary text-[1.3rem]">
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
        <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500  cursor-pointer hover:opacity-90 block group text-white py-5 px-8 rounded-lg  col-span-3 row-start-8 text-center self-start ">
          <h2 className="text-primary text-2xl font-bold text-left mb-5">
            Dagmooyinka Gobolka Banaadir
          </h2>
          <div className="grid grid-cols-10 gap-y-2 ">
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
      </div>  )
}

export default DepartmentList