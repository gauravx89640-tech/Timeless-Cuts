import Image from "next/image"
import { Award, MapPin } from "lucide-react"

export function MeetDeanna() {
  return (
    <section id="about" className="py-12 md:py-16 bg-[#FFE8D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <Image
                src="/deanna.jpg"
                alt="Deanna, owner and stylist at Timeless Cuts"
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Experience badge - teal */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-4 bg-[#1FA7A3] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">12 years experience</span>
            </div>
            
            {/* Taxi yellow highlight badge */}
            <div className="absolute -top-3 -left-3 lg:left-auto lg:-top-3 lg:-right-3 bg-[#FFC83D] text-[#10223D] px-3 py-1.5 rounded-full shadow-lg text-sm font-bold">
              Owner & Stylist
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1FA7A3]/20 rounded-full text-[#1FA7A3] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Local stylist in Lakewood
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] mb-4">
              Meet Deanna
            </h2>
            
            <p className="text-base text-[#4B5A6A] leading-relaxed mb-6">
              With 12 years of experience in the industry, Deanna is passionate about making everyone feel comfortable and confident in their own skin. At Timeless Cuts, she creates a friendly, patient salon experience for kids, men, and women — with extra care for little ones who may feel nervous about haircut day.
            </p>
            
            <div className="bg-[#FFFFFF] rounded-2xl p-5 border border-[#EADFCB]/50 shadow-sm">
              <p className="text-[#10223D] italic leading-relaxed">
                &quot;I love helping families feel at ease. Whether it&apos;s a toddler&apos;s first haircut or a quick trim before picture day, my goal is always the same — a happy kid and a relaxed parent.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-[#4B5A6A]">
                — Deanna, Owner & Stylist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
