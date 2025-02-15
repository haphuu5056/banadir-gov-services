import { departments, districts } from "@/data/departments";
import Image from "next/image";
import Link from "next/link";

export default function DepartmentCard() {
  return (
    <div className="py-12 grid grid-cols-3 auto-rows-max gap-6 container mx-auto px-12">
      {departments.map(({ title, sublinks, image, span, bg,textColor,isCompact }, index) => (
        <div key={index} className={`${bg} border-none shadow-none transition-all duration-500 group rounded-lg ${span} ${image  ? " h-full flex flex-col relative":'' } p-8 ${isCompact? 'py-2 flex justify-center flex-col h-full': ''}`}>
          <Link href={`/departments/${title}`} className="block">
            <h2 className={`text-2xl font-bold mb-5 group-hover:underline ${textColor? textColor: 'text-white'}`}>
              {title}
            </h2>
          </Link>
          {sublinks.length > 0 && (
            <div className={`space-y-3 flex flex-col font-light text-[1.3rem] ${textColor? textColor: 'text-white'}`}>
              {sublinks.map((sublink, subIndex) => (
                <Link key={subIndex} href={`/departments/${title}/${sublink}`} className={`hover:underline  ${textColor? textColor: 'text-white'}`}>
                  {sublink}
                </Link>
              ))}
            </div>
          )}
          {image && (
            <div className="relative flex-grow rounded-lg overflow-hidden flex items-end">
              <Image src={image} alt={title} width={500} height={300} className="object-contain w-full" />
            </div>
          )}
        </div>
      ))}

      <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] border-none shadow-none transition-all duration-500 group text-white py-5 px-8 rounded-lg col-span-3 row-start-8 text-center self-start">
        <h2 className="text-primary text-2xl font-bold text-left mb-5">
          Dagmooyinka Gobolka Banaadir
        </h2>
        <div className="grid grid-cols-10 gap-y-2">
          {districts.map((district, index) => (
            <Link key={index} href="#" className="text-primary text-[1.3rem] hover:underline">
              {district}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
