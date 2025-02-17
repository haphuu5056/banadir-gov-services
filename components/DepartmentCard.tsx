import Image, { StaticImageData } from "next/legacy/image";
import Link from "next/link";

interface DepartmentCardProps {
  title: string;
  sublinks?: string[];
  image?: string | StaticImageData; // Make it optional with "?"
  span: string;
  bg: string;
  textColor?: string;
  isCompact?: boolean;
}

export default function DepartmentCard({
  title,
  sublinks = [],
  image,
  span,
  bg,
  textColor,
  isCompact,
}: DepartmentCardProps) {
  const className = `border-none shadow-none transition-all duration-500  cursor-pointer  group rounded-xl`;
  return (
    <div
      className={`${bg} ${className}   ${span} ${
        bg?.includes("#3F479E") && bg.includes("#5f60bc")
          ? "hover:from-[#453c9e] hover:to-[#5557ac]"
          : "hover:from-[#FFE4E4] hover:to-[#FFF1F1]"
      } ${image ? " h-full flex flex-col relative" : ""} `}
    >
      {isCompact ? (
        <div
          className={`${bg} ${className}  ${span} text-white py-5 px-8   h-full  `}
        >
          <Link href={`/departments/${title}`} className="block">
            <h2
              className={`text-3xl font-medium tracking-wide group-hover:underline `}
            >
              {title}
            </h2>
          </Link>
        </div>
      ) : (
        <div className="py-8 px-10">
          <Link href={`/departments/${title}`} className="block">
            <h2
              className={`text-2xl font-bold mb-5  group-hover:underline ${
                textColor ? textColor : "text-white"
              }`}
            >
              {title}
            </h2>
          </Link>
          {sublinks.length > 0 && (
            <div
              className={`space-y-3 flex flex-col font-light text-[1.3rem] ${
                textColor ? textColor : "text-white"
              }`}
            >
              {sublinks.map((sublink, subIndex) => (
                <Link
                  key={subIndex}
                  href={`/departments/${title}/${sublink}`}
                  className={`hover:underline  ${
                    textColor ? textColor : "text-white"
                  }`}
                >
                  {sublink}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
      {image && (
        <div className="relative flex-grow rounded-lg overflow-hidden flex items-end">
          <Image
            src={image}
            alt="Building with palm trees"
            width={500} // Adjust width dynamically
            height={300} // Adjust height dynamically
            className="object-contain w-full"
          />
        </div>
      )}
    </div>
  );
}
