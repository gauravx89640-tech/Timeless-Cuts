import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Heart, Car } from "lucide-react"

const features = [
  "Patient, gentle approach",
  "Fun car chair and kid-friendly setup",
  "Great for nervous little ones",
  "Comfortable experience for parents too",
]

export function FirstHaircut() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#E7F8F2]">
      {/* Wavy top divider */}
      <div className="absolute -top-6 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 C300,0 600,120 900,60 C1050,30 1150,60 1200,60 L1200,120 L0,120 Z" fill="#E7F8F2" />
        </svg>
      </div>
      
      {/* Soft background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFC83D]/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Yellow accent panel behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFC83D]/30 rounded-3xl" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFC83D]/30">
              <Image
                src="https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/545548361_122153084438714826_819857640580748456_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DEafWpGY4lcQ7kNvwEnX8fm&_nc_oc=AdrhSeT7G2nk6xRfIDd0QhMA0wNd6I92R2hu4X4QHXKNNTSrkD7Kd6uI0ADvGqAMYjGYg86UwnKM-CW5dhJA0nti&_nc_zt=23&_nc_ht=scontent.fbho3-1.fna&_nc_gid=vnqjaDD8d1VDrboNcgTFvQ&_nc_ss=7b2a8&oh=00_Af5WZtxfWk9QaTCmYxWWhWJrnxiu-Qv7LrfrefForO3qvg&oe=6A1DC7B6"
                alt="Happy child during first haircut at Timeless Cuts"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating badge - First Haircut Friendly */}
            <div className="absolute -bottom-4 -right-4 md:right-4 bg-[#FFFFFF] p-3 rounded-xl shadow-lg border-2 border-[#FFC83D]">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-[#FFC83D] rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#10223D] fill-[#10223D]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#10223D]">First Haircut</p>
                  <p className="text-xs text-[#4B5A6A]">Friendly!</p>
                </div>
              </div>
            </div>
            
            {/* Taxi chair badge */}
            <div className="absolute -top-3 -left-3 bg-[#FFC83D] text-[#10223D] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-sm font-bold z-10">
              <Car className="w-4 h-4" />
              Car chair fun!
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF6F59]/20 rounded-full text-[#FF6F59] text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Great for nervous little ones
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] text-balance mb-4">
              A first haircut they&apos;ll actually remember
            </h2>
            
            <p className="text-base text-[#4B5A6A] leading-relaxed mb-6">
              From the fun car chair to kid-friendly distractions, Deanna creates a calm, cheerful experience for children and parents. Whether it&apos;s a first haircut or a regular trim, the goal is simple: happy kids, relaxed parents, and a haircut everyone feels good about.
            </p>
            
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1FA7A3]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#1FA7A3]" />
                  </div>
                  <span className="text-[#10223D] font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild size="lg" className="bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-bold shadow-md">
              <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                Book a Kids Haircut
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
