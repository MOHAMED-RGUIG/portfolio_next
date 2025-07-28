"use client"
import { useState } from "react"
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Menu,
  X,
  Import,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { AboutSection } from "@/components/sections/about"
import { HeroSection } from "@/components/sections/hero"
import {ContactSection} from "@/components/sections/contact" 
import { EducationSection } from "@/components/sections/education"
import { Navbar } from "@/components/navigation/navbar"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Navigation */}
          <Navbar />
      {/* Hero + About Combined Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}          <HeroSection />
          <AboutSection />

            {/* Right Side - About Content */}          
          </div>
        </div>
      </section>
      {/* Projects Section */}
          <ProjectsSection />
      {/* Experience Section */}
          <ExperienceSection/>
      {/* Contact Section */}
          <EducationSection />
          <ContactSection />
      {/* Footer 
        <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 MOHAMED RGUIG. All rights reserved.</p>
        </div>
      </footer>
      */}
       <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400">© 2025 MOHAMED RGUIG. {t("allRightsReserved")}</p>
        </div>
      </footer>
    </div>
  )
}
