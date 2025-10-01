import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We only recommend products that meet our rigorous testing standards and quality criteria.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our reviews are based on real user experiences and feedback from the fitness community.",
    },
    {
      icon: Target,
      title: "Honest Reviews",
      description: "We provide unbiased, transparent reviews to help you make informed purchasing decisions.",
    },
    {
      icon: Heart,
      title: "Passion for Fitness",
      description: "We're fitness enthusiasts ourselves, dedicated to helping others achieve their goals.",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About SportStore</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Your trusted source for honest, comprehensive sports equipment reviews and recommendations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SportStore was founded by a group of fitness enthusiasts who were frustrated with the lack of honest,
                  detailed reviews for sports equipment. We noticed that many review sites were either too technical or
                  clearly biased towards certain brands.
                </p>
                <p>
                  We decided to create a platform where real athletes and fitness lovers could find trustworthy
                  information about the equipment they need. Every product we review is thoroughly tested by our team
                  and evaluated based on real-world performance, durability, and value for money.
                </p>
                <p>
                  As Amazon Associates, we earn from qualifying purchases, but this never influences our reviews. We're
                  committed to providing honest, unbiased information to help you make the best choices for your fitness
                  journey.
                </p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/fitness-team-workout-group.jpg"
                alt="Our Team"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Our Review Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every product goes through a rigorous testing process before we publish our review. We test each item for
              at least 30 days in real-world conditions, evaluating factors like durability, performance, comfort, and
              value for money. Our team includes certified fitness trainers, competitive athletes, and everyday fitness
              enthusiasts to ensure diverse perspectives.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
