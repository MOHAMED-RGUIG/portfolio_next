"use client"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function EducationSection() {
  const { t } = useLanguage()
const education = [
  {
    degree: "LicenceEnInformatique",
    school: "ENSAMCasablanca",
    period: "2024 - 2025",
    description:
      "LicenceInfDescription",
    location: "Casablanca, Morocco",
    type: "Licence",
    image:"https://i.postimg.cc/Qdwp5ygx/ENSAM.png?height=500&width=500",
  },
  {
    degree: "TechnicienSpecialiseDeveloppementInformatique",
    school: "EcoleIcf",
    period: "2019 - 2021",
    description: "TechnicienInfoDescription",
    location: "Casablanca, Morocco",
    type: "Bac + 2",
    image:"https://i.postimg.cc/1XFjDq2f/icf.png?height=500&width=500",
  },
  {
    degree: "LicenceEnEconomieGestion",
    school: "UniversiteHassanII",
    period: "2013 - 2016",
    description: "LicenceEcoDescription",
    location: "Casablanca, Morocco",
    type: "Licence",
    image:"https://i.postimg.cc/VNsWzCFX/universitehassan2.png?height=500&width=500",
  },
]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold mb-4">{t("educationTitle")}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t("educationSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon et Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-600/20 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">{t(edu.type)}</span>
                </div>
                {edu.image && (
                  <div className="flex items-center space-x-1">
                   <Image
                      src={edu.image || "/placeholder.svg"}
 alt={t(edu.degree)}
 width={90}
 height={30}
 className="h-18 object-cover group-hover:scale-105 transition-transform duration-300 ml-4"
/>
                  </div>
                )}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t(edu.degree)}
              </h3>

              {/* École */}
              <p className="ext-blue-600 dark:text-blue-300 font-medium mb-3">{t(edu.school)}</p>

              {/* Période et Localisation */}
              <div className="flex flex-col space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t(edu.description)}</p>

              {/* Effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Section Certifications */}
        <div className="mt-16">
  <h3 className="text-4xl font-bold text-center mb-8">{t("certifications")}</h3>
  <div className="flex flex-wrap justify-center gap-4">
    {[
      {
        name: "Apprenez à créer votre site web avec HTML5 et CSS3",
        url: "https://i.postimg.cc/pdCX0jvG/Cirtifcate-Html-css-open-classrooms-Mohamed-rguig-page-0001.jpg",
      },
      {
        name: "Apprenez à programmer avec JavaScript",
        url: "https://i.postimg.cc/YSChBRdK/Apprenez-programmer-avec-Java-Script-Mohamed-rguig-certificat-Openclassrooms-page-0001.jpg",
      },
      {
        name: "Concevez votre site web avec PHP et MySQL",
        url: "https://i.postimg.cc/BnYJH0Bk/Certificat-Php-Mysql-Openclassrooms-page-0001.jpg",
      },
      {
        name: "Formation complète développeur web",
        url: "https://i.postimg.cc/m24ZGVrX/Certificat-Udemy-Dev-Web-page-0001.jpg",
      },
      {
        name: "The complete 2023 web development bootcamp",
        url: "https://i.postimg.cc/MGgx3m4Y/UC-869cfbe6-8edc-4ac0-8328-a27911302b16-page-0001.jpg",
      },
    ].map((cert, index) => (
      <div
        key={index}
        onClick={() => window.open(cert.url, "_blank")}
        className="cursor-pointer bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
      >
        <span className="text-gray-600 dark:text-gray-300 text-md">
          {cert.name}
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}
