import { EventsSection } from "@/components/sections/EventsSection";
import { Articles } from "@/components/sections/Articles";
import { AboutMayor } from "@/components/sections/AboutMayor";
import DepartmentList from "@/components/DepartmentList";

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
