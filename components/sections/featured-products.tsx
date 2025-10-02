import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      slug: "premium-yoga-mat",
      name: "Premium Yoga Mat",
      rating: 4.8,
      reviews: 234,
      image: "/premium-yoga-mat.png",
      category: "Fitness Mats",
    },
    {
      id: 2,
      slug: "professional-swim-goggles",
      name: "Professional Swim Goggles",
      rating: 4.9,
      reviews: 189,
      image: "/swimming-goggles-professional.jpg",
      category: "Swimming",
    },
    {
      id: 3,
      slug: "resistance-bands-set",
      name: "Resistance Bands Set",
      rating: 4.7,
      reviews: 312,
      image: "/resistance-bands-colorful.jpg",
      category: "Training",
    },
    {
      id: 4,
      slug: "foam-roller-pro",
      name: "Foam Roller Pro",
      rating: 4.6,
      reviews: 156,
      image: "/foam-roller-fitness.jpg",
      category: "Recovery",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Products</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Hand-picked selection of the best sports equipment to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/reviews/${product.slug}`} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
