import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function Categories() {
  const categories = [
    {
      name: "Fitness Mats",
      count: "45+ Products",
      image: "/fitness-yoga-mats-colorful.jpg",
      color: "from-primary/20 to-primary/5",
    },
    {
      name: "Swimming Gear",
      count: "32+ Products",
      image: "/swimming-equipment-pool.jpg",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      name: "Training Equipment",
      count: "58+ Products",
      image: "/training-equipment-dumbbells.jpg",
      color: "from-primary/20 to-primary/5",
    },
    {
      name: "Yoga Accessories",
      count: "28+ Products",
      image: "/yoga-accessories-blocks-straps.jpg",
      color: "from-secondary/20 to-secondary/5",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Shop by Category</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Find exactly what you need for your workout routine
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href="/reviews">
              <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color}`} />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
