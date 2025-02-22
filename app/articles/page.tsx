import { ArticleCard } from "@/components/ArticleCard";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1660518926158-1d47372a56bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "Xafiiska GGB ahna Duqa Magaaladda",
    title: "Benadir Regional Administration Committed to Delivering Durable",
    slug: "/articles/xogheynta-guud",
    date: "February 19, 2024",
    excerpt:
      "The Benadir Regional Administration has unveiled its comprehensive strategy for sustainable development...",
  },
  // ... more articles
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Latest Articles</h1>
            <p className="mt-4 text-lg text-gray-600">
              Stay informed about the latest developments, initiatives, and news from the Banadir Regional
              Administration.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  )
}

