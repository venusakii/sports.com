import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "100% secure payments",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick shipping worldwide",
    },
    {
      icon: Award,
      title: "Top Quality",
      description: "Premium products only",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Always here to help",
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
