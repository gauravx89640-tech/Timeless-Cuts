import Link from "next/link"
import { Scissors, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
]

export function Footer() {
  return (
    <footer className="bg-[#0C1B33] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1FA7A3] flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Timeless Cuts
                </span>
                <span className="block text-xs text-white/70">
                  For Kids, Men & Women
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A local family salon in Lakewood, CO — making haircut day fun, easy, and stress-free for kids, men, and women.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  98 Wadsworth Blvd<br />
                  Lakewood, CO 80226
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:3032463895" className="hover:text-white transition-colors">
                  303-246-3895
                </a>
              </div>
            </div>
            
            <Button asChild className="mt-4 bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-semibold">
              <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Timeless Cuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
