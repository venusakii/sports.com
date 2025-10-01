import { Hero } from "@/components/sections/hero"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { Categories } from "@/components/sections/categories"
import { BestSellers } from "@/components/sections/best-sellers"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Testimonials } from "@/components/sections/testimonials"
import { BlogSection } from "@/components/sections/blog-section"
import { Newsletter } from "@/components/sections/newsletter"
import { TrustBadges } from "@/components/sections/trust-badges"
import { VideoSection } from "@/components/sections/video-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <Categories />
      <BestSellers />
      <VideoSection />
      <WhyChooseUs />
      <Testimonials />
      <BlogSection />
      <Newsletter />
    </div>
  )
}
