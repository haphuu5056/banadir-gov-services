import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export function Articles() {
  return (
    <section className="py-16 " aria-labelledby="articles-heading">
      <div className="container mx-auto">
        <h2 id="articles-heading" className="text-3xl font-semibold text-primary mb-8">
          Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}