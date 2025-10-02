import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export function BestSellers() {
  const bestSellers = [
    {
      id: 5,
      slug: "ultra-grip-yoga-mat",
      name: "Ultra-Grip Yoga Mat",
      rating: 5.0,
      reviews: 421,
      image: "/premium-yoga-mat-texture.jpg",
      badge: "Best Seller",
    },
    {
      id: 6,
      slug: "adjustable-dumbbells",
      name: "Adjustable Dumbbells",
      rating: 4.9,
      reviews: 298,
      image: "/adjustable-dumbbells-set.jpg",
      badge: "Top Rated",
    },
    {
      id: 7,
      slug: "swimming-cap-goggles",
      name: "Swimming Cap & Goggles",
      rating: 4.8,
      reviews: 267,
      image: "/swimming-cap-goggles-set.jpg",
      badge: "Popular",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <Link key={product.id} href={`/reviews/${product.slug}`} className="block">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View Product
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
