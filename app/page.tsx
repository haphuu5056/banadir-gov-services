import { EventsSection } from "@/components/sections/EventsSection";
import { Articles } from "@/components/sections/Articles";
import { AboutMayor } from "@/components/sections/AboutMayor";
import { DepartmentList } from "@/components/DeptartmentsList";
// import Link from "next/link";
// import Image from "next/legacy/image";
// import bgImg from "@/public/bg.png";
export default function Home() {
  return (
    <div>
      <DepartmentList />
      <AboutMayor />
      <Articles />
      <EventsSection />
    </div>
  );
}
