import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">See Our Products in Action</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Watch how our top-rated equipment can transform your workout routine
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img src="/fitness-workout-gym-equipment-action.jpg" alt="Video Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-110">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
