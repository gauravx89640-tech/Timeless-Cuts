import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Sparkles, Scissors } from "lucide-react"

const heroImages = [
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com//Style/Original/187320228_355766$2026_01_10_18_18_42_2199.png",
    alt: "Happy child getting a haircut at Timeless Cuts",
  },
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com//Style/Original/187320228_355766$2026_01_10_18_19_30_0310.png",
    alt: "Fun kids haircut experience",
  },
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com//Style/Original/187320228_355766$2026_01_10_18_18_44_6050.png",
    alt: "Kids enjoying the car chair",
  },
]

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden bg-[#FFF9ED]">
      {/* Playful background blobs */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-[#DDF5FF] rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-[#E7F8F2] rounded-full blur-3xl opacity-60" />
      <div className="absolute top-40 right-1/4 w-32 h-32 bg-[#FFF3C4] rounded-full blur-2xl opacity-50" />
      
      {/* Playful decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 text-[#FFC83D]">
          <Scissors className="w-6 h-6 rotate-45" />
        </div>
        <div className="absolute top-40 right-20 text-[#1FA7A3]">
          <Star className="w-5 h-5 fill-current" />
        </div>
        <div className="absolute bottom-32 left-20 text-[#FF6F59]">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1FA7A3]/20 rounded-full text-[#1FA7A3] text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Family-friendly salon in Lakewood
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#10223D] leading-tight text-balance">
              Kids&apos; haircuts made{" "}
              <span className="text-[#1FA7A3]">fun</span>,{" "}
              <span className="text-[#FF6F59]">easy</span>, and{" "}
              <span className="bg-[#FFC83D]/40 px-2 py-0.5 rounded-lg">stress-free</span>{" "}
              in Lakewood
            </h1>
            
            <p className="mt-4 text-base md:text-lg text-[#4B5A6A] leading-relaxed max-w-xl">
              Timeless Cuts is a local family salon for kids, men, and women — with a patient, friendly experience that helps every guest feel comfortable and confident.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-bold text-base px-6 shadow-md hover:shadow-lg transition-all">
                <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold text-base border-2 border-[#EADFCB] text-[#10223D] hover:bg-[#FFF9ED]">
                <a href="https://www.google.com/maps/search/?api=1&query=98+Wadsworth+Blvd+Lakewood+CO+80226" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image Collage */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main large image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFC83D]/30">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Secondary image - top right */}
              <div className="absolute -top-3 -right-3 w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-[#FFFFFF] z-20 rotate-6">
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tertiary image - bottom left */}
              <div className="absolute -bottom-3 -left-3 w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-[#FFFFFF] z-20 -rotate-6">
                <Image
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Yellow taxi badge */}
              <div className="absolute top-1/2 -right-4 md:-right-6 w-14 h-14 bg-[#FFC83D] rounded-full flex items-center justify-center shadow-lg z-30 border-4 border-[#FFFFFF]">
                <span className="text-xl">🚕</span>
              </div>
              
              {/* Star badge */}
              <div className="absolute -bottom-1 right-1/4 w-10 h-10 bg-[#1FA7A3] rounded-full flex items-center justify-center shadow-lg z-30">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
