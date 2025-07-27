"use client"

import { Button } from "@/components/ui/button"
import { Mail, Download, Github,Phone, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
export function HeroSection() {
  const { t } = useLanguage()
  return (
  <div className="text-center lg:text-left">
               <div className="mb-8">
          <Image
               src="/profilephoto.png?height=200&width=200"
               alt="Alex Johnson"
               width={250}
               height={250}
               className="rounded-full mx-auto mb-8 border-4 border-blue-500 object-cover"
             />
           </div>
           <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
             Mohamed Rguig
           </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">{t("fullStackDeveloper")}</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                {t("heroDescription")}
              </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                   <Link
                  href="#contact"
                >
                 <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                   <Mail className="mr-2 h-5 w-5" />
               {t("getInTouch")}
                 </Button></Link>
                 <Link
                  href="https://heyzine.com/flip-book/594dd2e295.html"
                >
               <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                > 
                  <Download className="mr-2 h-5 w-5" />
                  
                  {t("downloadCV")}
                </Button> </Link>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6">
                <Link
                 target="_blank"
                  href="https://github.com/MOHAMED-RGUIG"
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://rb.gy/unetup"
                  target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Phone className="h-6 w-6" />
                </Link>
               </div>
             </div>
  )
}
