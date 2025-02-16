import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  location: string;
  href: string;
}

export function EventCard({
  image,
  date,
  title,
  location,
  href,
}: EventCardProps) {
  return (
    (<Link
      href={href}
      className="group block"
      aria-labelledby={`event-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <article className=" overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
        <div className="relative  aspect-[16/10] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt=""
            layout="fill"
            className="object-cover rounded-xl"
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={date} className="text-sm font-medium">
                {date}
              </time>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <h3
            id={`event-${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
          >
            {title}
          </h3>

          {/* <p className="text-gray-600 line-clamp-2">{description}</p> */}
        </div>
      </article>
    </Link>)
  );
}
