"use client"
import Image from "next/image"
import { ThemeToggle, LanguageToggle } from "@/components/ui/toggles"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceSection() {
    const { t } = useLanguage()
const experience = [
  {
    titleKey: "FullStackWebDeveloper",
    company: "TopClass Lavazza Espresso",
    period: "2022 - Present",
        image: "https://i.postimg.cc/GpvPccRQ/logo-1657032785.jpg?height=300&width=500",
    descriptionKey:
      "FullStackWebDevTopClassDescription",
  },
   { 
    titleKey: "FullStackWebDeveloper",
    company: "Afriquia Gaz",
    period: "2025",
     image: "https://i.postimg.cc/Bv8SD6bT/Adfriquia-gaz.jpg?height=500&width=500",
     descriptionKey:
      "FullStackWebDevAfgazDescription",
  },
   {
    titleKey: "ModerateurWeb",
    company: "Groupe Rmo",
    period: "2022",
    image:"https://i.postimg.cc/gcnKGvZm/marocannonce.png?height=500&width=500",
    descriptionKey:
      "WebModeratorDescription",
  },
   {
    titleKey: "ItAssistant",
    company: "Groupe RMO",
    period: "2019",
    image:"https://i.postimg.cc/XJ0mXC3r/Groupe-RMO-recrutement-emploi-1.png?height=500&width=500",
    descriptionKey:
      "ItAssistantDescription",
  },
  {
    titleKey: "debtCollector",
    company: "Perfectlab S.a.r.l",
    period: "2017 - 2019",
    image:"https://i.postimg.cc/ZRy0cXy9/perfectlab.png?height=500&width=500",
    descriptionKey:
      "debtCollectorDescription",
  },
  {
    titleKey: "debtAssistant",
    company: "Promalab S.a.r.l",
    period: "2016 - 2017",
    image:"https://i.postimg.cc/xd4fJg86/logo-promalab-1.png?height=500&width=500",
    descriptionKey: "debtCollectorDescription",
  },
]

  return (

      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t("experienceTitle")}</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
           <div key={index} className="relative pl-8 border-l-2 border-blue-500">
           <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
           <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2 flex items-center justify-between">
<span>{t(exp.titleKey)}</span>
<Image
 src={exp.image || "/placeholder.svg"}
 alt={exp.titleKey}
 width={90}
 height={30}
 className="h-18 object-cover group-hover:scale-105 transition-transform duration-300 ml-4"
/>
</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t(exp.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  )
}
    {/* <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
              <div className="bg-gray-800 p-6 rounded-lg">
               <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
  <span>{exp.title}</span>
  <Image
    src={exp.image || "/placeholder.svg"}
    alt={exp.title}
    width={90}
    height={30}
    className="h-18 object-cover group-hover:scale-105 transition-transform duration-300 ml-4"
  />
</h3>
              
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}
   

