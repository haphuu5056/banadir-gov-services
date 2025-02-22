"use client";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { events } from "../../../data/events";
import Link from "next/link";

const EventDetail = () => {
  const params = useParams();
  const id = Number(params.id); 
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <p className="text-center text-gray-600">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Event Banner */}
      <div className="relative w-full h-80">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Event Info */}
      <div className="mt-6">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900">{event.title}</h1>
        <div className="block  sm:flex sm:items-center gap-4 text-gray-600 mt-2">
          <span className="flex items-center gap-1 mb-3">
            <Calendar size={20} className="text-blue-600" /> {event.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={20} className="text-red-600" /> {event.location}
          </span>
        </div>
      </div>

      {/* Event Description */}
      <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Join us for an exciting event with valuable discussions, networking opportunities, and meaningful experiences.
      </p>

      {/* Social Share */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:flex items-center gap-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg">
          Share
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
          Tweet
        </button>
        <Link href="/" className="bg-secondary text-primary  font-semibold rounded-lg px-4 py-2 hover:underline">
          Back to Articles
        </Link>
      </div>
    </div>
  );
};

export default EventDetail;
