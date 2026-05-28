import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"

const businessHours = [
  { day: "Sunday", hours: "11:00 AM - 5:00 PM" },
  { day: "Monday", hours: "11:00 AM - 7:00 PM" },
  { day: "Tuesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 7:00 PM" },
  { day: "Friday", hours: "11:00 AM - 6:30 PM" },
  { day: "Saturday", hours: "11:00 AM - 7:30 PM" },
]

export function VisitUs() {
  return (
    <section id="visit" className="py-12 md:py-16 bg-[#DDF5FF] relative">
      {/* Wavy top divider */}
      <div className="absolute -top-6 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 C300,0 600,120 900,60 C1050,30 1150,60 1200,60 L1200,120 L0,120 Z" fill="#DDF5FF" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] text-balance">
            Visit Timeless Cuts in Lakewood
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Location Card - spans 3 columns */}
          <div className="lg:col-span-3 bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#EADFCB]/50 overflow-hidden">
            {/* Map placeholder with styled location graphic */}
            <div className="relative h-48 bg-gradient-to-br from-[#E7F8F2] via-[#DDF5FF] to-[#FFF3C4] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6F59] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-[#10223D]">98 Wadsworth Blvd</p>
                <p className="text-sm text-[#4B5A6A]">Lakewood, CO 80226</p>
              </div>
              {/* Decorative roads */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#4B5A6A]" />
                <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-[#4B5A6A]" />
              </div>
            </div>
            
            <div className="p-5">
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {/* Address */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FA7A3]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1FA7A3]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#10223D] text-sm">Address</p>
                    <p className="text-[#4B5A6A] text-sm">98 Wadsworth Blvd, Lakewood, CO</p>
                    <p className="text-[#4B5A6A] text-xs">Floor 1, Farfield Commons</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6F59]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#FF6F59]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#10223D] text-sm">Phone</p>
                    <a href="tel:3032463895" className="text-[#4B5A6A] text-sm hover:text-[#1FA7A3] transition-colors">
                      303-246-3895
                    </a>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" className="bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-bold flex-1 min-w-[140px]">
                  <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Book Appointment
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="font-semibold flex-1 min-w-[100px] border-[#EADFCB] text-[#10223D] hover:bg-[#FFFFFF]">
                  <a href="tel:3032463895">
                    <Phone className="w-4 h-4 mr-1.5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="font-semibold flex-1 min-w-[120px] border-[#EADFCB] text-[#10223D] hover:bg-[#FFFFFF]">
                  <a href="https://www.google.com/maps/search/?api=1&query=98+Wadsworth+Blvd+Lakewood+CO+80226" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Business Hours - spans 2 columns */}
          <div className="lg:col-span-2 p-5 bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#EADFCB]/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FFC83D]/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#10223D]" />
              </div>
              <h3 className="font-bold text-[#10223D]">Business Hours</h3>
            </div>
            
            <div className="space-y-2">
              {businessHours.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-1.5 border-b border-[#EADFCB]/30 last:border-0 text-sm"
                >
                  <span className="font-medium text-[#10223D]">{item.day}</span>
                  <span className="text-[#4B5A6A]">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
