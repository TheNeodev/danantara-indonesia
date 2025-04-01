"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function NewsSection() {
  const [language, setLanguage] = useState<"en" | "id">("en")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // Get language preference from localStorage or other source
    const storedLanguage = localStorage.getItem("language") as "en" | "id" | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "Latest News",
      viewAll: "View All News",
      news: [
        {
          image: "/news-1.jpg",
          date: "June 15, 2023",
          title: "Danantara Indonesia Invests in Renewable Energy Projects",
          excerpt:
            "Danantara Indonesia announces a strategic investment in renewable energy projects across the archipelago.",
          url: "#",
        },
        {
          image: "/news-2.jpg",
          date: "May 28, 2023",
          title: "Partnership with Global Infrastructure Investors",
          excerpt:
            "Danantara Indonesia forms partnership with leading global infrastructure investors to accelerate development.",
          url: "#",
        },
        {
          image: "/news-3.jpg",
          date: "April 10, 2023",
          title: "Supporting Digital Transformation in Indonesia",
          excerpt: "New initiative launched to support digital transformation across various sectors in Indonesia.",
          url: "#",
        },
      ],
    },
    id: {
      title: "Berita Terbaru",
      viewAll: "Lihat Semua Berita",
      news: [
        {
          image: "/news-1.jpg",
          date: "15 Juni 2023",
          title: "Danantara Indonesia Berinvestasi dalam Proyek Energi Terbarukan",
          excerpt:
            "Danantara Indonesia mengumumkan investasi strategis dalam proyek energi terbarukan di seluruh nusantara.",
          url: "#",
        },
        {
          image: "/news-2.jpg",
          date: "28 Mei 2023",
          title: "Kemitraan dengan Investor Infrastruktur Global",
          excerpt:
            "Danantara Indonesia membentuk kemitraan dengan investor infrastruktur global terkemuka untuk mempercepat pembangunan.",
          url: "#",
        },
        {
          image: "/news-3.jpg",
          date: "10 April 2023",
          title: "Mendukung Transformasi Digital di Indonesia",
          excerpt: "Inisiatif baru diluncurkan untuk mendukung transformasi digital di berbagai sektor di Indonesia.",
          url: "#",
        },
      ],
    },
  }

  const currentContent = language === "en" ? content.en : content.id

  return (
    <section id="news" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            {currentContent.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" className="gap-2">
              {currentContent.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <Link href={item.url} className="text-primary font-medium flex items-center hover:underline">
                  {language === "en" ? "Read more" : "Baca selengkapnya"}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

