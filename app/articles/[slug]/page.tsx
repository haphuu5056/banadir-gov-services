'use client'
import Link from "next/link";
import { CalendarDays, Clock, User } from "lucide-react";
import Image from "next/image";
import { articles } from "@/data/articles";
import img from "@/public/amiir.png";
import { useParams } from "next/navigation";


export default function ArticlePage() {
  const params = useParams();
  const id = params.slug;
  const article = articles.find((art) => art.slug === id);

  if (!article) {
    return <p className="text-center text-gray-600 py-20">Article not found.</p>;
  }
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[75vh] min-h-[400px] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
{article.title}            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By Mohamed Hassan</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime="2024-02-19">February 19, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="prose prose-lg max-w-3xl space-y-4">
          <p className="lead text-xl">
            The Benadir Regional Administration has unveiled its comprehensive
            strategy for sustainable development, marking a significant step
            forward in its commitment to the region&apos;s progress and
            prosperity.
          </p>

          <h2 className="font-semibold text-2xl">
            Strategic Vision for Development
          </h2>
          <p className="text-lg ">
            Under the leadership of Governor Omar Mohamud Finnish, the
            administration has outlined a multi-faceted approach to address key
            challenges facing the region. This initiative encompasses
            infrastructure development, public service enhancement, and economic
            growth strategies, all designed to create lasting positive impact
            for residents.
          </p>

          <h2 className="font-semibold text-2xl">
            Infrastructure and Public Services
          </h2>
          <p className="text-lg">
            The administration&apos;s focus on infrastructure development
            includes major road rehabilitation projects, improvements to water
            supply systems, and the modernization of waste management
            facilities. These projects are designed to enhance the quality of
            life for residents while creating a foundation for sustainable urban
            growth.
          </p>

          <blockquote className="text-lg italic">
            &quot;Our commitment to delivering durable solutions is unwavering.
            We are focused on creating lasting positive change that will benefit
            generations to come.&quot; - Omar Mohamud Finnish, Governor of
            Benadir Region
          </blockquote>

          <h2 className="font-semibold text-2xl">
            Community Engagement and Participation
          </h2>
          <p className="text-lg">
            A key aspect of the administration&apos;s approach is its emphasis
            on community engagement. Through regular town halls and community
            consultations, residents are actively involved in the planning and
            implementation of development projects, ensuring that initiatives
            align with community needs and priorities.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
          >
            Development
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
          >
            Infrastructure
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
          >
            Community
          </Link>
        </div>

        {/* Author Bio */}
        <div className="mt-12 rounded-xl border bg-gray-50 p-6">
          <div className="flex flex-row items-center  gap-4">
            <Image
              src={img}
              alt="Mohamed Hassan"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Mohamed Hassan</h3>
              <p className="text-gray-600">
                Senior Correspondent covering local government and urban
                development. Specialized in municipal affairs and community
                development initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((i) => (
              <Link key={i.title} href={`/articles/${i.slug}`} className="group block">
                <article className="rounded-xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[16/9]">
                    <Image src={i.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {i.title}{" "}
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                      Latest updates on the ongoing infrastructure projects
                      across the city...
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
