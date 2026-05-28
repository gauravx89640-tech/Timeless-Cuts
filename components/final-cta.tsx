import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Star } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9ED]">
      {/* Playful background blobs */}
      <div className="absolute top-10 -left-20 w-48 h-48 bg-[#FFF3C4] rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-10 -right-20 w-56 h-56 bg-[#DDF5FF] rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#FFE8D9] rounded-full blur-2xl opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-[#FFC83D]">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-8 right-8 text-[#FF6F59]">
        <Heart className="w-10 h-10" />
      </div>
      <div className="absolute top-1/2 right-16 text-[#1FA7A3]">
        <Sparkles className="w-6 h-6" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center bg-[#FFFFFF] p-8 md:p-10 rounded-3xl shadow-lg border-2 border-[#FFC83D]/30">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFC83D] rounded-full mb-4">
            <Sparkles className="w-7 h-7 text-[#10223D]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] mb-3 text-balance">
            Ready for a haircut day that feels easy?
          </h2>
          
          <p className="text-base text-[#4B5A6A] max-w-xl mx-auto mb-6">
            Book a visit with Deanna at Timeless Cuts and enjoy a friendly, family-focused salon experience in Lakewood.
          </p>
          
          <Button asChild size="lg" className="bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-bold text-base px-8 shadow-md hover:shadow-lg transition-all">
            <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
