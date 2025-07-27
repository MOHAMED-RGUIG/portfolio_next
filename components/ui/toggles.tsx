"use client"

import { Moon, Sun, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Récupérer le thème depuis localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark"
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-gray-200 dark:hover:bg-gray-800">
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </Button>
  )
}
