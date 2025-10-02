import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check, ExternalLink, ShoppingCart } from "lucide-react"
import Link from "next/link"

const productData: Record<
  string,
  {
    id: number
    name: string
    rating: number
    reviews: number
    image: string
    category: string
    description: string
    amazonLink: string
    pros: string[]
    cons: string[]
    fullReview: string
    specs: { label: string; value: string }[]
  }
> = {
  "retrospec-solana-yoga-mat": {
    id: 1,
    name: "Retrospec Solana Yoga Mat",
    rating: 4.8,
    reviews: 234,
    image: "https://m.media-amazon.com/images/I/71j-NTcp5ML._AC_SL1500_.jpg",
    category: "Fitness Mats",
    description: "Thick, non-slip yoga mat with nylon strap, ideal for all yoga styles",
    amazonLink: "https://www.amazon.com/Retrospec-Solana-Thick-Nylon-Strap/dp/",
    pros: [
      "Thick 1-inch cushioning for joint support",
      "Non-slip surface on both sides",
      "Includes nylon carrying strap",
      "Eco-friendly materials",
    ],
    cons: ["Heavier than standard mats", "May require airing out initially"],
    fullReview:
      "The Retrospec Solana Yoga Mat is a standout choice for yogis seeking comfort and stability. Its 1-inch thickness offers exceptional cushioning, making it ideal for those with sensitive joints or practicing restorative yoga. The non-slip surface performs well even in sweaty conditions, and the included nylon strap makes it easy to carry. While slightly heavier than typical mats, its durability and eco-friendly construction make it a worthwhile investment for regular practitioners.",
    specs: [
      { label: "Thickness", value: "1 inch" },
      { label: "Material", value: "Eco-friendly foam" },
      { label: "Dimensions", value: '72" x 24"' },
      { label: "Weight", value: "3.5 lbs" },
    ],
  },
  "speedo-vanquisher-goggles": {
    id: 2,
    name: "Speedo Vanquisher Mirrored Goggles",
    rating: 4.9,
    reviews: 189,
    image: "https://m.media-amazon.com/images/I/71Y+spVpwuL._AC_SX679_.jpg",
    category: "Swimming",
    description: "Anti-fog, UV-protected mirrored goggles for competitive swimming",
    amazonLink: "https://www.amazon.com/Speedo-Vanquisher-Mirrored-Goggle-Silver/dp/",
    pros: [
      "Long-lasting anti-fog coating",
      "Mirrored lenses reduce glare",
      "Comfortable silicone seals",
      "Wide field of vision",
    ],
    cons: ["Straps may need frequent adjustment", "Mirrored coating may scratch over time"],
    fullReview:
      "The Speedo Vanquisher Mirrored Goggles are a top pick for competitive swimmers. Their anti-fog coating holds up remarkably well through extended use, and the mirrored lenses effectively reduce glare in bright conditions. The silicone seals provide a snug, leak-proof fit without discomfort, and the wide lens design enhances peripheral vision. These goggles are a reliable choice for serious swimmers, though care should be taken to avoid scratching the mirrored coating.",
    specs: [
      { label: "Lens Type", value: "Polycarbonate" },
      { label: "UV Protection", value: "Yes" },
      { label: "Anti-Fog", value: "Advanced Coating" },
      { label: "Fit", value: "Adjustable Straps" },
    ],
  },
  "wikday-resistance-bands": {
    id: 3,
    name: "WIKDAY Resistance Bands",
    rating: 4.7,
    reviews: 312,
    image: "https://m.media-amazon.com/images/I/71RoFBJpKlL._AC_SX679_.jpg",
    category: "Training",
    description: "5-piece resistance band set for stretching and full-body workouts",
    amazonLink: "https://www.amazon.com/WIKDAY-Resistance-Exercise-Stretching-Crossfit/dp/",
    pros: [
      "Five resistance levels for progressive training",
      "Durable natural latex material",
      "Includes door anchor and handles",
      "Portable and versatile",
    ],
    cons: ["Initial latex odor", "Handles could be more ergonomic"],
    fullReview:
      "The WIKDAY Resistance Bands set is a fantastic addition to any home gym. With five resistance levels ranging from light to heavy, these bands cater to a wide range of exercises and fitness levels. The natural latex construction ensures durability, and the included accessories like the door anchor and handles expand workout possibilities. While there’s a slight latex smell initially, it fades with use, making this set a great value for versatile strength training.",
    specs: [
      { label: "Resistance Levels", value: "5 (10-50 lbs)" },
      { label: "Material", value: "Natural Latex" },
      { label: "Length", value: "48 inches" },
      { label: "Accessories", value: "Door anchor, handles, ankle straps" },
    ],
  },
  "triggerpoint-foam-roller": {
    id: 4,
    name: "TriggerPoint Foam Roller",
    rating: 4.6,
    reviews: 156,
    image: "https://m.media-amazon.com/images/I/61-NGQxfxHL._AC_SX679_.jpg",
    category: "Recovery",
    description: "Multi-density foam roller made with recycled materials for muscle recovery",
    amazonLink: "https://www.amazon.com/TriggerPoint-Patented-Multi-Density-Recycled-Materials/dp/",
    pros: [
      "Multi-density foam for targeted relief",
      "Made with recycled materials",
      "Portable and lightweight",
      "Effective for deep tissue massage",
    ],
    cons: ["May be too firm for beginners", "Surface texture may wear over time"],
    fullReview:
      "The TriggerPoint Foam Roller is a high-quality tool for muscle recovery. Its patented multi-density design allows for customizable pressure, making it effective for both gentle and deep tissue massage. Constructed with recycled materials, it’s an eco-conscious choice that doesn’t compromise on performance. While it may feel intense for those new to foam rolling, its durability and effectiveness make it a favorite for athletes and fitness enthusiasts.",
    specs: [
      { label: "Length", value: "36 inches" },
      { label: "Diameter", value: "5.5 inches" },
      { label: "Material", value: "Recycled EVA foam" },
      { label: "Weight Capacity", value: "500 lbs" },
    ],
  },
  "gaiam-dry-grip-yoga-mat": {
    id: 5,
    name: "Gaiam Dry-Grip Yoga Mat",
    rating: 5.0,
    reviews: 421,
    image: "https://m.media-amazon.com/images/I/71B7PtwGDGL._AC_SL1500_.jpg",
    category: "Fitness Mats",
    description: "Cushioned yoga mat with superior dry-grip for enhanced stability",
    amazonLink: "https://www.amazon.com/Gaiam-Dry-Grip-Yoga-Mat-Cushioned/dp/",
    pros: [
      "Exceptional dry-grip technology",
      "Comfortable 5mm cushioning",
      "Durable and easy to clean",
      "Ideal for hot yoga",
    ],
    cons: ["Premium price point"],
    fullReview:
      "The Gaiam Dry-Grip Yoga Mat lives up to its name, offering unparalleled grip even during the sweatiest yoga sessions. The 5mm cushioning strikes a perfect balance between comfort and stability, making it suitable for all yoga styles. Its durable construction ensures it holds up over time, and the easy-to-clean surface is a bonus for regular use. While it comes at a premium price, its performance justifies the cost for dedicated yogis.",
    specs: [
      { label: "Thickness", value: "5mm" },
      { label: "Material", value: "PVC" },
      { label: "Dimensions", value: '68" x 24"' },
      { label: "Weight", value: "2.8 lbs" },
    ],
  },
  "feierdun-adjustable-dumbbells": {
    id: 6,
    name: "FEIERDUN Adjustable Dumbbells",
    rating: 4.9,
    reviews: 298,
    image: "https://m.media-amazon.com/images/I/71BE37ZZfLL._AC_SL1500_.jpg",
    category: "Training",
    description: "Adjustable dumbbells with connector for kettlebell conversion",
    amazonLink: "https://www.amazon.com/FEIERDUN-Adjustable-Dumbbells-Connector-Kettlebells/dp/",
    pros: [
      "Quick weight adjustment system",
      "Convertible to kettlebell",
      "Space-saving design",
      "Durable build quality",
    ],
    cons: ["Higher initial cost", "Adjustment mechanism may jam occasionally"],
    fullReview:
      "The FEIERDUN Adjustable Dumbbells are a versatile and space-saving solution for home strength training. The quick-adjust system allows seamless weight changes, and the unique kettlebell connector adds even more workout options. Built with durable materials, these dumbbells are designed to last. While the initial cost is higher than traditional dumbbells, the convenience and multifunctionality make them an excellent investment for home gym enthusiasts.",
    specs: [
      { label: "Weight Range", value: "5-50 lbs per dumbbell" },
      { label: "Adjustment", value: "10 weight settings" },
      { label: "Material", value: "Steel and plastic" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "polarized-swim-goggles": {
    id: 7,
    name: "Polarized Swimming Goggles",
    rating: 4.8,
    reviews: 267,
    image: "https://m.media-amazon.com/images/I/61i7TyM3olL._AC_SX679_.jpg",
    category: "Swimming",
    description: "Leak-proof polarized goggles for adults and teenagers with UV protection",
    amazonLink: "https://www.amazon.com/Polarized-Swimming-Goggles-Leakage-Teenagers/dp/",
    pros: [
      "Polarized lenses reduce glare",
      "Leak-proof design",
      "Comfortable fit for all ages",
      "UV protection for outdoor use",
    ],
    cons: ["Straps may loosen over time", "Not ideal for competitive swimming"],
    fullReview:
      "These Polarized Swimming Goggles are a great choice for recreational swimmers. The polarized lenses effectively reduce glare, making them ideal for outdoor swimming in bright conditions. The leak-proof design and adjustable straps ensure a secure fit for both adults and teenagers. While not suited for competitive swimming, these goggles offer excellent value for casual pool or open-water sessions.",
    specs: [
      { label: "Lens Type", value: "Polarized Polycarbonate" },
      { label: "UV Protection", value: "Yes" },
      { label: "Fit", value: "Adjustable for adults and teens" },
      { label: "Anti-Fog", value: "Yes" },
    ],
  },
  "volcano-cork-yoga-block": {
    id: 8,
    name: "Volcano Cork Yoga Block",
    rating: 4.7,
    reviews: 178,
    image: "https://m.media-amazon.com/images/I/71McJBMlKPL._AC_SX679_.jpg",
    category: "Yoga",
    description: "Odor-resistant cork yoga block for improved flexibility and balance",
    amazonLink: "https://www.amazon.com/Volcano-Cork-Yoga-Block-Odor-Resistant/dp/",
    pros: [
      "Eco-friendly cork material",
      "Odor-resistant and durable",
      "Non-slip surface for stability",
      "Lightweight yet sturdy",
    ],
    cons: ["Cork may chip with rough handling", "Slightly more expensive than foam blocks"],
    fullReview:
      "The Volcano Cork Yoga Block is a premium choice for yoga practitioners seeking eco-friendly props. Made from sustainable cork, these blocks are odor-resistant and provide excellent stability for a variety of poses. Their lightweight yet sturdy construction makes them easy to use and transport. While they may chip if mishandled, their durability and environmental benefits make them a top pick for mindful yogis.",
    specs: [
      { label: "Dimensions", value: '9" x 6" x 4"' },
      { label: "Material", value: "Natural Cork" },
      { label: "Weight", value: "1.5 lbs each" },
      { label: "Quantity", value: "1 block" },
    ],
  },
}

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug] || productData["premium-yoga-mat"]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <Link href="/reviews" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Reviews
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold mt-4 mb-2 text-balance">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <Button asChild size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  View on Amazon
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <p className="text-xs text-muted-foreground">
                As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Our Review</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.fullReview}</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-green-50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 dark:bg-red-950/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Cons</h3>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">×</span>
                          <span className="text-sm text-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <dl className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between border-b pb-2">
                        <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                        <dd className="text-sm font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Verdict</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{product.rating}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Highly recommended for anyone looking for quality {product.category.toLowerCase()}. Excellent value.
                  </p>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
