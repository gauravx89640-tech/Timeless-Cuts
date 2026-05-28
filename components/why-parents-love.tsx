import { Heart, Smile, Users, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Patient with kids",
    description: "A calm, friendly approach that helps little ones feel comfortable.",
    iconBg: "bg-[#FF6F59]",
    iconColor: "text-white",
  },
  {
    icon: Smile,
    title: "Fun salon experience",
    description: "Car chair, TV, toys, and distractions make haircut day easier.",
    iconBg: "bg-[#FFC83D]",
    iconColor: "text-[#10223D]",
  },
  {
    icon: Users,
    title: "Whole family welcome",
    description: "Kids, men, and women all in one friendly local salon.",
    iconBg: "bg-[#1FA7A3]",
    iconColor: "text-white",
  },
  {
    icon: Sparkles,
    title: "Confidence after every cut",
    description: "Thoughtful haircuts that help every guest leave smiling.",
    iconBg: "bg-[#FF6F59]",
    iconColor: "text-white",
  },
]

export function WhyParentsLove() {
  return (
    <section className="py-10 md:py-14 bg-[#DDF5FF] relative overflow-hidden">
      {/* Soft blob shapes */}
      <div className="absolute top-10 -right-20 w-48 h-48 bg-[#E7F8F2] rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 -left-20 w-56 h-56 bg-[#E7F8F2] rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] text-balance">
            Why parents love Timeless Cuts
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-4 md:p-5 bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#EADFCB]/50 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.iconBg} flex items-center justify-center mb-3`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-[#10223D] mb-1">
                {benefit.title}
              </h3>
              <p className="text-[#4B5A6A] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
