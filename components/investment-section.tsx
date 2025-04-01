"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, Landmark, Lightbulb, Leaf, Wifi, Heart } from "lucide-react"

export function InvestmentSection() {
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
      title: "Investment Focus",
      description:
        "Danantara Indonesia focuses on strategic sectors that drive economic growth and create value for Indonesia.",
      sectors: [
        {
          icon: Building2,
          title: "Infrastructure",
          description: "Roads, ports, airports, and other critical infrastructure projects.",
        },
        {
          icon: Landmark,
          title: "Tourism",
          description: "Development of tourism destinations and supporting facilities.",
        },
        {
          icon: Lightbulb,
          title: "Technology",
          description: "Digital infrastructure and innovative technology solutions.",
        },
        {
          icon: Leaf,
          title: "Green Economy",
          description: "Renewable energy and sustainable development projects.",
        },
        {
          icon: Wifi,
          title: "Digital Economy",
          description: "E-commerce, fintech, and digital transformation initiatives.",
        },
        {
          icon: Heart,
          title: "Healthcare",
          description: "Hospitals, medical facilities, and healthcare services.",
        },
      ],
    },
    id: {
      title: "Fokus Investasi",
      description:
        "Danantara Indonesia berfokus pada sektor-sektor strategis yang mendorong pertumbuhan ekonomi dan menciptakan nilai bagi Indonesia.",
      sectors: [
        {
          icon: Building2,
          title: "Infrastruktur",
          description: "Jalan, pelabuhan, bandara, dan proyek infrastruktur penting lainnya.",
        },
        {
          icon: Landmark,
          title: "Pariwisata",
          description: "Pengembangan destinasi wisata dan fasilitas pendukung.",
        },
        {
          icon: Lightbulb,
          title: "Teknologi",
          description: "Infrastruktur digital dan solusi teknologi inovatif.",
        },
        {
          icon: Leaf,
          title: "Ekonomi Hijau",
          description: "Energi terbarukan dan proyek pembangunan berkelanjutan.",
        },
        {
          icon: Wifi,
          title: "Ekonomi Digital",
          description: "E-commerce, fintech, dan inisiatif transformasi digital.",
        },
        {
          icon: Heart,
          title: "Kesehatan",
          description: "Rumah sakit, fasilitas medis, dan layanan kesehatan.",
        },
      ],
    },
  }

  const currentContent = language === "en" ? content.en : content.id

  return (
    <section id="investment" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
          <p className="text-lg text-gray-700">{currentContent.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <sector.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{sector.title}</h3>
              </div>
              <p className="text-gray-700">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

