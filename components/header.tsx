"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#10223D]/80 hover:text-[#1FA7A3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center group" aria-label="Timeless Cuts For Kids, Men & Women">
            <Image
              src="/timeless-cuts-logo-cropped.png"
              alt="Timeless Cuts For Kids, Men & Women"
              width={150}
              height={124}
              priority
              className="w-24 h-auto translate-y-2 md:w-28"
            />
          </Link>

          <nav className="hidden md:flex items-center justify-end flex-1">
            <Button asChild className="bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-semibold">
              <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#10223D]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-[#EADFCB] bg-[#FFFFFF]">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-[#10223D]/80 hover:text-[#1FA7A3] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-[#FFC83D] hover:bg-[#F4B51F] text-[#10223D] font-semibold w-full">
                <a href="https://www.vagaro.com/timelesscutsforkidsmenandwomen" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
