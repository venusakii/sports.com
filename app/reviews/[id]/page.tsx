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
  "1": {
    id: 1,
    name: "Premium Yoga Mat",
    rating: 4.8,
    reviews: 234,
    image: "/premium-yoga-mat.png",
    category: "Fitness Mats",
    description: "Extra thick, non-slip surface perfect for all yoga styles",
    amazonLink: "https://amazon.com",
    pros: [
      "Extra thick 6mm cushioning for joint protection",
      "Superior non-slip texture on both sides",
      "Eco-friendly TPE material",
      "Comes with carrying strap",
    ],
    cons: ["Slightly heavier than standard mats", "Takes time to break in"],
    fullReview:
      "After testing this yoga mat for over 3 months, we can confidently say it's one of the best options for both beginners and experienced yogis. The 6mm thickness provides excellent cushioning without compromising stability during standing poses. The non-slip surface works exceptionally well, even during hot yoga sessions. The eco-friendly TPE material is a nice touch for environmentally conscious practitioners.",
    specs: [
      { label: "Thickness", value: "6mm" },
      { label: "Material", value: "TPE" },
      { label: "Dimensions", value: '72" x 24"' },
      { label: "Weight", value: "2.5 lbs" },
    ],
  },
  "2": {
    id: 2,
    name: "Professional Swim Goggles",
    rating: 4.9,
    reviews: 189,
    image: "/swimming-goggles-professional.jpg",
    category: "Swimming",
    description: "Anti-fog, UV protection, comfortable fit for competitive swimming",
    amazonLink: "https://amazon.com",
    pros: [
      "Excellent anti-fog coating lasts for months",
      "Comfortable silicone gaskets",
      "Wide peripheral vision",
      "UV protection for outdoor swimming",
    ],
    cons: ["Adjustment straps can be tricky at first"],
    fullReview:
      "These professional swim goggles have exceeded our expectations in every category. The anti-fog coating is remarkably durable, lasting through dozens of pool sessions without reapplication. The silicone gaskets create a perfect seal without causing discomfort, even during long training sessions. The wide lens design provides excellent peripheral vision, crucial for competitive swimming.",
    specs: [
      { label: "Lens Type", value: "Polycarbonate" },
      { label: "UV Protection", value: "Yes" },
      { label: "Anti-Fog", value: "Premium Coating" },
      { label: "Fit", value: "Adjustable" },
    ],
  },
  "3": {
    id: 3,
    name: "Resistance Bands Set",
    rating: 4.7,
    reviews: 312,
    image: "/resistance-bands-colorful.jpg",
    category: "Training",
    description: "5-piece set with varying resistance levels for full-body workouts",
    amazonLink: "https://amazon.com",
    pros: [
      "Five different resistance levels",
      "Durable latex construction",
      "Includes door anchor and handles",
      "Great value for money",
    ],
    cons: ["Latex smell initially", "Handles could be more padded"],
    fullReview:
      "This resistance band set offers incredible versatility for home workouts. The five different resistance levels (ranging from 10 to 50 lbs) allow for progressive training and accommodate various fitness levels. The bands are made from high-quality latex that shows no signs of wear after months of regular use. The included door anchor and handles expand exercise possibilities significantly.",
    specs: [
      { label: "Resistance Levels", value: "5 (10-50 lbs)" },
      { label: "Material", value: "Natural Latex" },
      { label: "Length", value: "48 inches" },
      { label: "Accessories", value: "Door anchor, handles, ankle straps" },
    ],
  },
}

export default function ProductReviewPage({ params }: { params: { id: string } }) {
  const product = productData[params.id] || productData["1"]

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
