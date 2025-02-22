import { events } from "@/data/events";
import { EventCard } from "../EventCard";

export function EventsSection() {
  return (
    <section className="py-16  bg-white" aria-labelledby="events-heading">
      <div className="container mx-auto px-4 lg:px-12">
        <h2
          id="events-heading"
          className="text-3xl font-semibold text-primary mb-8"
        >
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
