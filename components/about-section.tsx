"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
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
      title: "About",
      subtitle: "Danantara Indonesia",
      description: `Danantara Indonesia is Indonesia's Sovereign Wealth Fund established by the Government of Indonesia to attract and facilitate investment in various sectors, including infrastructure, healthcare, tourism, technology, and other strategic industries. Our mission is to drive sustainable economic growth and prosperity for all Indonesians through strategic investments and partnerships.`,
      vision: "Vision",
      visionText:
        "To become a world-class sovereign wealth fund that contributes to Indonesia's sustainable economic development.",
      mission: "Mission",
      missionText:
        "To optimize the value of Indonesia's assets through strategic investments that generate long-term returns and support national development priorities.",
    },
    id: {
      title: "Tentang",
      subtitle: "Danantara Indonesia",
      description: `Danantara Indonesia adalah Dana Investasi Negara yang didirikan oleh Pemerintah Indonesia untuk menarik dan memfasilitasi investasi di berbagai sektor, termasuk infrastruktur, kesehatan, pariwisata, teknologi, dan industri strategis lainnya. Misi kami adalah mendorong pertumbuhan ekonomi yang berkelanjutan dan kemakmuran bagi seluruh rakyat Indonesia melalui investasi dan kemitraan strategis.`,
      vision: "Visi",
      visionText:
        "Menjadi dana investasi negara kelas dunia yang berkontribusi pada pembangunan ekonomi Indonesia yang berkelanjutan.",
      mission: "Misi",
      missionText:
        "Mengoptimalkan nilai aset Indonesia melalui investasi strategis yang menghasilkan pengembalian jangka panjang dan mendukung prioritas pembangunan nasional.",
    },
  }

  const currentContent = language === "en" ? content.en : content.id

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{currentContent.title}</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">{currentContent.subtitle}</h3>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">{currentContent.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h4 className="text-xl font-semibold text-primary mb-4">{currentContent.vision}</h4>
              <p className="text-gray-700">{currentContent.visionText}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h4 className="text-xl font-semibold text-primary mb-4">{currentContent.mission}</h4>
              <p className="text-gray-700">{currentContent.missionText}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

