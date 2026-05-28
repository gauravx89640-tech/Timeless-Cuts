import { Award, Users, Car, MapPin } from "lucide-react"

const trustItems = [
  {
    icon: Award,
    title: "12 years experience",
    bgColor: "bg-[#1FA7A3]",
    textColor: "text-white",
  },
  {
    icon: Users,
    title: "Kids, men & women",
    bgColor: "bg-[#FF6F59]",
    textColor: "text-white",
  },
  {
    icon: Car,
    title: "Fun car chair",
    bgColor: "bg-[#FFC83D]",
    textColor: "text-[#10223D]",
  },
  {
    icon: MapPin,
    title: "Lakewood local",
    bgColor: "bg-[#1FA7A3]",
    textColor: "text-white",
  },
]

export function TrustStrip() {
  return (
    <section className="py-4 md:py-6 bg-[#FFF9ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-2 px-4 py-2 ${item.bgColor} ${item.textColor} rounded-full shadow-sm`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-semibold whitespace-nowrap">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
