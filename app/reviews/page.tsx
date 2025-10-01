import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Filter } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
  const products = [
    {
      id: 1,
      name: "Premium Yoga Mat",
      rating: 4.8,
      reviews: 234,
      image: "/premium-yoga-mat.png",
      category: "Fitness Mats",
      description: "Extra thick, non-slip surface perfect for all yoga styles",
    },
    {
      id: 2,
      name: "Professional Swim Goggles",
      rating: 4.9,
      reviews: 189,
      image: "/swimming-goggles-professional.jpg",
      category: "Swimming",
      description: "Anti-fog, UV protection, comfortable fit for competitive swimming",
    },
    {
      id: 3,
      name: "Resistance Bands Set",
      rating: 4.7,
      reviews: 312,
      image: "/resistance-bands-colorful.jpg",
      category: "Training",
      description: "5-piece set with varying resistance levels for full-body workouts",
    },
    {
      id: 4,
      name: "Foam Roller Pro",
      rating: 4.6,
      reviews: 156,
      image: "/foam-roller-fitness.jpg",
      category: "Recovery",
      description: "High-density foam for deep tissue massage and muscle recovery",
    },
    {
      id: 5,
      name: "Ultra-Grip Yoga Mat",
      rating: 5.0,
      reviews: 421,
      image: "/premium-yoga-mat-texture.jpg",
      category: "Fitness Mats",
      description: "Premium non-slip surface with superior cushioning",
    },
    {
      id: 6,
      name: "Adjustable Dumbbells",
      rating: 4.9,
      reviews: 298,
      image: "/adjustable-dumbbells-set.jpg",
      category: "Training",
      description: "Space-saving design with quick weight adjustment system",
    },
    {
      id: 7,
      name: "Swimming Cap & Goggles",
      rating: 4.8,
      reviews: 267,
      image: "/swimming-cap-goggles-set.jpg",
      category: "Swimming",
      description: "Complete swimming set with silicone cap and anti-fog goggles",
    },
    {
      id: 8,
      name: "Yoga Block Set",
      rating: 4.7,
      reviews: 178,
      image: "/yoga-accessories-blocks-straps.jpg",
      category: "Yoga",
      description: "Lightweight foam blocks for improved flexibility and balance",
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
                    <Link href={`/reviews/${product.id}`}>Read Review</Link>
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
