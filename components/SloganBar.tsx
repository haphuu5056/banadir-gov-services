"use client";

import { AlertCircle, Megaphone, Calendar } from "lucide-react";
import Image from "next/image";
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
    <section className=" py-4  border-b">
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Announcement */}
        <div className="w-full md:w-2/3">
          <div className="bg-white   flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-violet-50 rounded-full flex items-center justify-center">
              {announcements[currentAnnouncement].icon &&
                React.createElement(announcements[currentAnnouncement].icon, {
                  className: "w-6 h-6 text-primary",
                })}
            </div>
            <p className="text-gray-700 font-medium">
              {announcements[currentAnnouncement].text}
            </p>
          </div>
        </div>

        {/* Right side - Slogan */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center">
            <Image
              src={img}
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full bg-primary"
            />
          </div>
          <div className="">
            <h1 className="text-primary text-xl font-semibold leading-6">
              HORMAR IYO HIIGSI
            </h1>
            <h1 className="text-primary text-xl font-semibold">
              LOO SIMANYAHAY
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
