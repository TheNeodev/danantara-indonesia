"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"en" | "id">("en")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  const navItems = [
    { name: language === "en" ? "About" : "Tentang", href: "#about" },
    { name: language === "en" ? "Investment" : "Investasi", href: "#investment" },
    { name: language === "en" ? "News" : "Berita", href: "#news" },
    { name: language === "en" ? "Career" : "Karir", href: "#career" },
    { name: language === "en" ? "Contact" : "Kontak", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Danantara Indonesia" width={180} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={cn("flex items-center gap-2 text-sm font-medium", isScrolled ? "text-gray-900" : "text-white")}
          >
            <Image
              src={language === "en" ? "/en-flag.png" : "/id-flag.png"}
              alt={language === "en" ? "English" : "Bahasa Indonesia"}
              width={24}
              height={16}
              className="h-4 w-auto"
            />
            {language === "en" ? "ENGLISH" : "BAHASA"}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4">
                  <Image src="/logo.png" alt="Danantara Indonesia" width={150} height={35} className="h-8 w-auto" />
                </div>
                <nav className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Image
                      src={language === "en" ? "/en-flag.png" : "/id-flag.png"}
                      alt={language === "en" ? "English" : "Bahasa Indonesia"}
                      width={24}
                      height={16}
                      className="h-4 w-auto"
                    />
                    {language === "en" ? "ENGLISH" : "BAHASA"}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

