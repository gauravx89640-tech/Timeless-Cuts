import Image from "next/image"
import { Scissors, Star, Sparkles } from "lucide-react"

const galleryImages = [
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com//Style/Original/187320228_355766$2026_01_10_18_18_42_2199.png",
    alt: "Happy child at Timeless Cuts",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/client1.jpg",
    alt: "Client haircut",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com//Style/Original/187320228_355766$2026_01_10_18_19_30_0310.png",
    alt: "Kids haircut experience",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/client2.jpg",
    alt: "Smiling client",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com//Style/Original/187320228_355766$2026_01_10_18_18_44_6050.png",
    alt: "Fun salon moments",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com/Original/187320228_355766$2026_01_10_18_16_53_4635.png",
    alt: "Haircut in progress",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/smilingclient2.jpg",
    alt: "Happy client in the car chair",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/car.jpg",
    alt: "Timeless Cuts salon room with car chair",
    span: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-16 bg-[#FFF9ED] relative">
      {/* Decorative sticker shapes */}
      <div className="absolute top-20 left-8 w-4 h-4 bg-[#1FA7A3] rounded-full opacity-60" />
      <div className="absolute top-32 right-12 w-3 h-3 bg-[#FFC83D] rounded-full opacity-70" />
      <div className="absolute bottom-24 left-16 w-3 h-3 bg-[#FF6F59] rounded-full opacity-60" />
      <div className="absolute bottom-40 right-20 w-4 h-4 bg-[#1FA7A3] rounded-full opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Scissors className="w-5 h-5 text-[#1FA7A3]" />
            <Sparkles className="w-4 h-4 text-[#FFC83D]" />
            <Star className="w-5 h-5 text-[#FF6F59] fill-[#FF6F59]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#10223D] text-balance">
            Smiles, styles & happy haircut days
          </h2>
          <p className="mt-2 text-[#4B5A6A] text-sm">
            Real moments from Timeless Cuts
          </p>
        </div>
        
        {/* Dynamic masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10223D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
