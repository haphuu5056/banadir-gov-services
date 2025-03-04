"use client";
import { Calendar, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { events } from "../../../data/events";
import Link from "next/link";
import { Card, CardContent,  } from "@/components/ui/card";

const EventDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <p className="text-center text-gray-600">Event not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Event Banner */}
      <div className="relative w-full h-52 md:h-96">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Event Info */}
      <div className="mt-6">
        <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-3">
          {event.title}
        </h1>
        <div className="block sm:flex sm:items-center gap-5 text-gray-600 mb-8">
          <span className="flex items-center gap-1 ">
            <Calendar size={20} className="text-blue-600" /> {event.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={20} className="text-red-600" /> {event.location}
          </span>
        </div>
      </div>

      {/* Event Description */}
      <div className="space-y-6">
        <p className="text-gray-600 text-xl">
          The <strong>{event.title}</strong> is a high-level urban development
          conference focused on shaping the future of Mogadishu. Experts,
          policymakers, and community leaders will gather to discuss key topics
          like sustainable infrastructure, economic growth, and smart city
          innovations.
        </p>

        <h3 className="text-2xl font-semibold text-[#3F479E]">Key Topics:</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-lg">
          <li>Urban Planning & Infrastructure</li>
          <li>Economic Growth & Investment Opportunities</li>
          <li>Public Services & Community Engagement</li>
          <li>Smart City Innovations</li>
          <li>Environmental Sustainability</li>
        </ul>
        <div className="sapce-y-2">
          <h3 className="text-2xl font-semibold text-[#3F479E]">
            How to Register?
          </h3>
          <p className="text-gray-600 text-lg">
            Register online at{" "}
            <Link href="#" className="text-[#3F479E] underline">
              Banadir Service
            </Link>{" "}
            or visit our office at Mogadishu Banaadir.
          </p>
        </div>
      </div>

      {/* Social Share */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:flex items-center gap-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg">
          Share
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
          Tweet
        </button>
        <Link
          href="/"
          className="bg-secondary text-primary  font-semibold rounded-lg px-4 py-2 hover:underline"
        >
          Back to Articles
        </Link>
      </div>



      <div className="mt-12 border-t border-gray-200 pt-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Events</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {events.sort(() => 0.5 - Math.random()).slice(0, 2).map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`} className="block">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <time dateTime={event.date}>{event.date}</time>
                      </div>
                      <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                      </div>
                    </div>
                    </CardContent>
                  </Card>
                  </Link>
                ))}
              </div>
            </div>
    </div>
  );
};

export default EventDetail;
