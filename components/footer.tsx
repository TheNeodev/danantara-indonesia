"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const [language, setLanguage] = useState<"en" | "id">("en")

  useEffect(() => {
    // Get language preference from localStorage or other source
    const storedLanguage = localStorage.getItem("language") as "en" | "id" | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const content = {
    en: {
      about: "About Danantara Indonesia",
      aboutText:
        "Danantara Indonesia is Indonesia's Sovereign Wealth Fund established to drive sustainable economic growth and prosperity for all Indonesians.",
      quickLinks: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Investment", href: "#investment" },
        { name: "News", href: "#news" },
        { name: "Career", href: "#career" },
        { name: "Contact", href: "#contact" },
      ],
      legal: "Legal",
      legalLinks: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Disclaimer", href: "#" },
      ],
      copyright: "© 2023 Danantara Indonesia. All rights reserved.",
    },
    id: {
      about: "Tentang Danantara Indonesia",
      aboutText:
        "Danantara Indonesia adalah Dana Investasi Negara yang didirikan untuk mendorong pertumbuhan ekonomi yang berkelanjutan dan kemakmuran bagi seluruh rakyat Indonesia.",
      quickLinks: "Tautan Cepat",
      links: [
        { name: "Tentang", href: "#about" },
        { name: "Investasi", href: "#investment" },
        { name: "Berita", href: "#news" },
        { name: "Karir", href: "#career" },
        { name: "Kontak", href: "#contact" },
      ],
      legal: "Hukum",
      legalLinks: [
        { name: "Kebijakan Privasi", href: "#" },
        { name: "Syarat Layanan", href: "#" },
        { name: "Disclaimer", href: "#" },
      ],
      copyright: "© 2023 Danantara Indonesia. Hak Cipta Dilindungi.",
    },
  }

  const currentContent = language === "en" ? content.en : content.id

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.png" alt="Danantara Indonesia" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">{currentContent.aboutText}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{currentContent.quickLinks}</h3>
            <ul className="space-y-3">
              {currentContent.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{currentContent.legal}</h3>
            <ul className="space-y-3">
              {currentContent.legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{language === "en" ? "Newsletter" : "Buletin"}</h3>
            <p className="text-gray-400 mb-4">
              {language === "en"
                ? "Subscribe to our newsletter for the latest updates."
                : "Berlangganan buletin kami untuk mendapatkan informasi terbaru."}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={language === "en" ? "Your email" : "Email Anda"}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                {language === "en" ? "Subscribe" : "Langganan"}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

