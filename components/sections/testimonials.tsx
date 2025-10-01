import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      content:
        "The yoga mat I purchased based on their review has been a game-changer. Perfect grip and cushioning for my daily practice!",
      rating: 5,
      image: "/yoga-instructor.png",
    },
    {
      name: "Mike Chen",
      role: "Competitive Swimmer",
      content:
        "Finally found swimming goggles that don't leak! The detailed reviews helped me choose the perfect pair for my needs.",
      rating: 5,
      image: "/man-swimmer-athlete.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Fitness Enthusiast",
      content:
        "Love this site! The product comparisons are thorough and honest. Saved me so much time researching equipment.",
      rating: 5,
      image: "/woman-fitness-trainer.png",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Real reviews from real fitness enthusiasts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
