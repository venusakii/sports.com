import { CheckCircle2, Award, Users, Zap } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Expert Reviews",
      description: "In-depth analysis from fitness professionals and real users to help you make informed decisions.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "We only recommend products that meet our strict quality standards and performance criteria.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of fitness enthusiasts who trust our recommendations and share their experiences.",
    },
    {
      icon: Zap,
      title: "Best Deals",
      description: "Access exclusive discounts and the best prices on premium sports equipment through Amazon.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose SportStore?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're committed to helping you find the perfect equipment for your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
