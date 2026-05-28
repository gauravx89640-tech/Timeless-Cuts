import { Star, Quote } from "lucide-react"

const reviews = [
  {
    quote: "Came here for my son's first haircut after seeing all the good reviews. I will definitely be returning! Deanna was amazing! I showed her a reference picture and she was fast, precise, and super nice!",
    author: "Amy Cera",
  },
  {
    quote: "Deanna is amazing! She was so sweet to my 2.5 year old and kept him calm throughout the entire haircut. She had several distractions — a TV, dinosaurs, and a fun car chair. He had such a positive experience!",
    author: "Melissa Belmar",
  },
  {
    quote: "This was probably the best haircut experience my daughter has ever had. Deanna was patient and her salon was very sensory-friendly. Haircut came out amazing and my daughter was super happy!",
    author: "Sarah Graham",
  },
  {
    quote: "My son has autism and usually does not like haircuts, but Deanna made the experience comfortable for him, and his haircut came out so good. I'm so happy I found this place!",
    author: "Natalie Benavidez",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-16 bg-[#FFF3C4] relative">
      {/* Wavy top divider */}
      <div className="absolute -top-6 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z" fill="#FFF3C4" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] text-balance">
            Loved by local families
          </h2>
          <p className="mt-2 text-[#4B5A6A] text-sm">
            Real words from parents who trusted Deanna with their child&apos;s haircut.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-5 bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#EADFCB]/50 hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#1FA7A3]/20 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#1FA7A3]" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#FFC83D] fill-[#FFC83D]" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-[#10223D]/90 leading-relaxed text-sm text-pretty pr-8">
                &quot;{review.quote}&quot;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#EADFCB]/50">
                <div className="w-8 h-8 rounded-full bg-[#1FA7A3]/20 flex items-center justify-center">
                  <span className="text-[#1FA7A3] font-semibold text-xs">
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-medium text-[#10223D] text-sm">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
