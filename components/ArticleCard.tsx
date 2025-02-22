import Image from "next/legacy/image"
import Link from "next/link"

interface ArticleCardProps {
  image: string
  department: string
  title: string
  slug: string
}

export function ArticleCard({ image, department, title, slug }: ArticleCardProps) {
  return (
    (<Link href={`/articles/${slug}`} className="group block" aria-labelledby={`article-${slug}`}>
      <article className=" overflow-hidden transition-transform duration-200 md:hover:scale-[1.02]">
        <div className="relative rounded-xl aspect-[16/10] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt=""
            layout="fill"
            className="object-cover rounded-xl"
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="pt-4">
          <p className="text-primary-textLightBlue text-sm font-medium mb-2">{department}</p>
          <h3
            id={`article-${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors"
          >
            {title}
          </h3>
        </div>
      </article>
    </Link>)
  );
}

