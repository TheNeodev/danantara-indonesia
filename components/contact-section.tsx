"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
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
      title: "Contact Us",
      description: "Have questions or want to learn more about Danantara Indonesia? Get in touch with us.",
      address: "Gedung Danantara, Jl. Jenderal Sudirman Kav. 52-53, Jakarta 12190, Indonesia",
      phone: "+62 21 5150 1234",
      email: "info@danantaraindonesia.com",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send Message",
    },
    id: {
      title: "Hubungi Kami",
      description: "Punya pertanyaan atau ingin tahu lebih banyak tentang Danantara Indonesia? Hubungi kami.",
      address: "Gedung Danantara, Jl. Jenderal Sudirman Kav. 52-53, Jakarta 12190, Indonesia",
      phone: "+62 21 5150 1234",
      email: "info@danantaraindonesia.com",
      formName: "Nama",
      formEmail: "Email",
      formSubject: "Subjek",
      formMessage: "Pesan",
      formSubmit: "Kirim Pesan",
    },
  }

  const currentContent = language === "en" ? content.en : content.id

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {language === "en" ? "Get in Touch" : "Hubungi Kami"}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{language === "en" ? "Address" : "Alamat"}</h4>
                    <p className="text-gray-700">{currentContent.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{language === "en" ? "Phone" : "Telepon"}</h4>
                    <p className="text-gray-700">{currentContent.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{language === "en" ? "Email" : "Email"}</h4>
                    <p className="text-gray-700">{currentContent.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {language === "en" ? "Send a Message" : "Kirim Pesan"}
              </h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.formName}
                  </label>
                  <Input id="name" name="name" type="text" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.formEmail}
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.formSubject}
                  </label>
                  <Input id="subject" name="subject" type="text" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.formMessage}
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>

                <Button type="submit" className="w-full">
                  {currentContent.formSubmit}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

