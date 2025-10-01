import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function BlogSection() {
  const articles = [
    {
      title: "Top 10 Yoga Mats for Beginners in 2024",
      excerpt:
        "Discover the best yoga mats that provide comfort, grip, and durability for those starting their yoga journey.",
      date: "March 15, 2024",
      image: "/yoga-mat-guide.jpg",
      category: "Guides",
    },
    {
      title: "Swimming Gear Essentials: What You Really Need",
      excerpt: "A comprehensive guide to must-have swimming equipment for both recreational and competitive swimmers.",
      date: "March 12, 2024",
      image: "/swimming-gear-essentials.jpg",
      category: "Tips",
    },
    {
      title: "How to Choose the Right Resistance Bands",
      excerpt: "Learn about different resistance levels and which bands are best suited for your fitness goals.",
      date: "March 10, 2024",
      image: "/resistance-bands-workout.jpg",
      category: "Reviews",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Latest Articles & Guides</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert tips and insights to help you make the best choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{article.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
