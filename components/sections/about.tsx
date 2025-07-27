"use client"

import { MapPin } from "lucide-react"
import {
  ReactIcon,
  TypeScriptIcon,
  NextJsIcon,
  NodeJsIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  TailwindIcon,
  ExpressIcon,
  AWSIcon,
  GitIcon,
  DockerIcon,
  FigmaIcon,
  MySQLIcon,
  BootstrapIcon,
  ReduxIcon,
  RestAPIIcon
} from "@/components/icons/tech-icons"
import { useLanguage } from "@/contexts/language-context"
  const skills = [
    { name: "React", category: "Frontend", icon: ReactIcon },

    { name: "Node.js", category: "Backend", icon: NodeJsIcon },
    { name: "Redux", category: "Frontend", icon: ReduxIcon },     
    { name: "Express", category: "Backend", icon: ExpressIcon },
    { name: "Next.js", category: "Frontend", icon: NextJsIcon },    
    { name: "PostgreSQL", category: "Database", icon: PostgreSQLIcon },
    { name: "TypeScript", category: "Frontend", icon: TypeScriptIcon },
    { name: "MySQL", category: "Database", icon: MySQLIcon },
    { name: "Tailwind CSS", category: "Frontend", icon: TailwindIcon },
    { name: "RestAPI", category: "Backend", icon: RestAPIIcon },    
    { name: "Bootstrap", category: "Frontend", icon: BootstrapIcon }, 
    { name: "Git", category: "Tools", icon: GitIcon },
    
  ]

export function AboutSection() {
   const { t } = useLanguage()
  return (

 <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">{t("aboutMe")}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("aboutDescription1")}</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("aboutDescription2")}</p>
              <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mb-6">
                <MapPin className="h-5 w-5" />
                <span>Casablanca, Morocco</span>
              </div>
               <h3 className="text-xl font-semibold mb-4">{t("skillsTechnologies")}</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-blue-400" />

  <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
        

  
  
  )
}

  {/*<div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">About Me</h2>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with over 3 years of experience building scalable web
                applications. I love turning complex problems into simple, beautiful designs and bringing ideas to life
                through code.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My expertise spans across modern frontend frameworks, backend technologies, and cloud infrastructure.
                I'm always eager to learn new technologies and stay up-to-date with industry best practices.
              </p>
              <div className="flex items-center space-x-4 text-gray-400 mb-6">
                <MapPin className="h-5 w-5" />
                <span>Casablanca, Morocco</span>
              </div>

              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div> */}