"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle, LanguageToggle } from "@/components/ui/toggles"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  return (
    
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Alex Johnson</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t("home")}
              </Link>
              <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t("about")}
              </Link>
              <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t("projects")}
              </Link>
              <Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t("experience")}
              </Link>
              <Link href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t("education")}
              </Link>
              <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t("contact")}
              </Link>

              {/* Toggles */}
              <div className="flex items-center space-x-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("home")}
                </Link>
                <Link
                  href="#about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("about")}
                </Link>
                <Link
                  href="#projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("projects")}
                </Link>
                <Link
                  href="#experience"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("experience")}
                </Link>
                <Link
                  href="#education"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("education")}
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
  )
}
