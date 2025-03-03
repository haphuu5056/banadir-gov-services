"use client";

import { AlertCircle, Megaphone, Calendar } from "lucide-react";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import img from "@/public/amiir.png";

const announcements = [
  {
    icon: AlertCircle,
    text: "Shaqaale: Fursado shaqo oo cusub ayaa la shaaciyey",
  },
  {
    icon: Megaphone,
    text: "Cashuuraha: Waxaa la xasuusinayaa ganacsatada inay cashuuraha bixiyaan",
  },
  {
    icon: Calendar,
    text: "Nadaafad: Barnaamijka nadaafadda magaalada wuxuu bilaabmayaa 8-da subaxnimo",
  },
];

export function SloganBar() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-4 border-b bg-[#F5F3FF]">
      <div className="container mx-auto px-4 py-5 md:py-2 sm:px-6 lg:px-12 flex flex-col-reverse md:flex-row justify-between items-start lg:items-center gap-6">
        {/* Left side - Announcement */}
        <div className="w-full md:w-2/3">
          <div className=" flex items-center space-x-4 p-3 ">
            <div className="flex-shrink-0 w-10 h-10 bg-violet-50 rounded-full flex items-center justify-center">
              {React.createElement(announcements[currentAnnouncement].icon, {
                className: "w-6 h-6 text-primary",
              })}
            </div>
            <p className="text-gray-700 font-medium text-base sm:text-xl">
              {announcements[currentAnnouncement].text}
            </p>
          </div>
        </div>

        {/* Right side - Slogan */}
        <div className="flex flex-row items-center px-4 gap-3 text-center sm:text-left">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
            <Image
              src={img}
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full bg-primary"
            />
          </div>
          <div>
            <h1 className="text-primary text-lg sm:text-xl font-semibold leading-4">
              HORMAR IYO HIIGSI
            </h1>
            <h1 className="-ml-3 md:ml-0 text-primary text-lg sm:text-xl font-semibold">
              LOO SIMANYAHAY
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
