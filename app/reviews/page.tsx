import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Filter } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
  const products = [
    {
      id: 1,
      slug: "retrospec-solana-yoga-mat",
      name: "Retrospec Solana Yoga Mat",
      rating: 4.8,
      reviews: 234,
      image: "https://m.media-amazon.com/images/I/71j-NTcp5ML._AC_SL1500_.jpg",
      category: "Fitness Mats",
      description: "Thick, non-slip yoga mat with nylon strap, ideal for all yoga styles",
      link: "https://www.amazon.com/Retrospec-Solana-Thick-Nylon-Strap/dp/"
    },
    {
      id: 2,
      slug: "speedo-vanquisher-goggles",
      name: "Speedo Vanquisher Mirrored Goggles",
      rating: 4.9,
      reviews: 189,
      image: "https://m.media-amazon.com/images/I/71Y+spVpwuL._AC_SX679_.jpg",
      category: "Swimming",
      description: "Anti-fog, UV-protected mirrored goggles for competitive swimming",
      link: "https://www.amazon.com/Speedo-Vanquisher-Mirrored-Goggle-Silver/dp/"
    },
    {
      id: 3,
      slug: "wikday-resistance-bands",
      name: "WIKDAY Resistance Bands",
      rating: 4.7,
      reviews: 312,
      image: "https://m.media-amazon.com/images/I/71RoFBJpKlL._AC_SX679_.jpg",
      category: "Training",
      description: "5-piece resistance band set for stretching and full-body workouts",
      link: "https://www.amazon.com/WIKDAY-Resistance-Exercise-Stretching-Crossfit/dp/"
    },
    {
      id: 4,
      slug: "triggerpoint-foam-roller",
      name: "TriggerPoint Foam Roller",
      rating: 4.6,
      reviews: 156,
      image: "https://m.media-amazon.com/images/I/61-NGQxfxHL._AC_SX679_.jpg",
      category: "Recovery",
      description: "Multi-density foam roller made with recycled materials for muscle recovery",
      link: "https://www.amazon.com/TriggerPoint-Patented-Multi-Density-Recycled-Materials/dp/"
    },
    {
      id: 5,
      slug: "gaiam-dry-grip-yoga-mat",
      name: "Gaiam Dry-Grip Yoga Mat",
      rating: 5.0,
      reviews: 421,
      image: "https://m.media-amazon.com/images/I/71B7PtwGDGL._AC_SL1500_.jpg",
      category: "Fitness Mats",
      description: "Cushioned yoga mat with superior dry-grip for enhanced stability",
      link: "https://www.amazon.com/Gaiam-Dry-Grip-Yoga-Mat-Cushioned/dp/"
    },
    {
      id: 6,
      slug: "feierdun-adjustable-dumbbells",
      name: "FEIERDUN Adjustable Dumbbells",
      rating: 4.9,
      reviews: 298,
      image: "https://m.media-amazon.com/images/I/71BE37ZZfLL._AC_SL1500_.jpg",
      category: "Training",
      description: "Adjustable dumbbells with connector for kettlebell conversion",
      link: "https://www.amazon.com/FEIERDUN-Adjustable-Dumbbells-Connector-Kettlebells/dp/"
    },
    {
      id: 7,
      slug: "polarized-swim-goggles",
      name: "Polarized Swimming Goggles",
      rating: 4.8,
      reviews: 267,
      image: "https://m.media-amazon.com/images/I/61i7TyM3olL._AC_SX679_.jpg",
      category: "Swimming",
      description: "Leak-proof polarized goggles for adults and teenagers with UV protection",
      link: "https://www.amazon.com/Polarized-Swimming-Goggles-Leakage-Teenagers/dp/"
    },
    {
      id: 8,
      slug: "volcano-cork-yoga-block",
      name: "Volcano Cork Yoga Block",
      rating: 4.7,
      reviews: 178,
      image: "https://m.media-amazon.com/images/I/71McJBMlKPL._AC_SX679_.jpg",
      category: "Yoga",
      description: "Odor-resistant cork yoga block for improved flexibility and balance",
      link: "https://www.amazon.com/Volcano-Cork-Yoga-Block-Odor-Resistant/dp/"
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Product Reviews</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Explore our comprehensive reviews of the best sports equipment. Each product has been thoroughly tested and
            evaluated by our team.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">{products.length} products found</p>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={`/reviews/${product.slug}`}>Read Review</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
