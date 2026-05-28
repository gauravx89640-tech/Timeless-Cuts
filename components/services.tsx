import { Scissors, User, UserCircle, Palette, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Scissors,
    title: "Kids Haircuts",
    description: "Friendly, patient haircuts for little ones, first haircuts, and growing kids.",
    cardBg: "bg-[#FFF3C4]",
    iconBg: "bg-[#FFC83D]",
    iconColor: "text-[#10223D]",
    borderColor: "border-[#FFC83D]",
    featured: true,
  },
  {
    icon: User,
    title: "Men's Haircuts",
    description: "Clean, reliable cuts for everyday style and fresh confidence.",
    cardBg: "bg-[#E7F8F2]",
    iconBg: "bg-[#1FA7A3]/20",
    iconColor: "text-[#1FA7A3]",
    borderColor: "border-[#EADFCB]",
    featured: false,
  },
  {
    icon: UserCircle,
    title: "Women's Haircuts",
    description: "Flattering cuts and styling in a comfortable, welcoming salon.",
    cardBg: "bg-[#FFE8D9]",
    iconBg: "bg-[#FF6F59]/20",
    iconColor: "text-[#FF6F59]",
    borderColor: "border-[#EADFCB]",
    featured: false,
  },
  {
    icon: Palette,
    title: "Color & Styling",
    description: "Highlights, color, blowouts, and styling services to help you feel your best.",
    cardBg: "bg-[#DDF5FF]",
    iconBg: "bg-[#1FA7A3]/20",
    iconColor: "text-[#1FA7A3]",
    borderColor: "border-[#EADFCB]",
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-[#FFF3C4] relative">
      {/* Wavy top divider */}
      <div className="absolute -top-6 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z" fill="#FFF3C4" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] text-balance">
            Salon services for the whole family
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-5 ${service.cardBg} rounded-2xl shadow-sm border-2 hover:shadow-lg transition-all hover:-translate-y-1 ${service.borderColor} ${
                service.featured ? "ring-2 ring-[#FFC83D]/50" : ""
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-2 -right-2 bg-[#FFC83D] text-[#10223D] text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-current" />
                  Kids-first
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-[#10223D] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#4B5A6A] leading-relaxed mb-4">
                {service.description}
              </p>
              <Button asChild variant={service.featured ? "default" : "outline"} size="sm" className={`w-full ${service.featured ? "bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D]" : "border-[#EADFCB] text-[#10223D] hover:bg-white"}`}>
                <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
