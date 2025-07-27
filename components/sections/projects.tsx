"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Plus ,ExternalLink, BookOpen } from "lucide-react"
import Image from "next/image"
import { ProjectModal } from "@/components/ui/project-modal"
import { useLanguage } from "@/contexts/language-context"
interface Project {
  titleKey: string
  descriptionKey: string
  image: string
  tech: string[]
  github: string
  live: string
  hasBackend?: boolean
  username?: string
  password?: string
}
export function ProjectsSection() {
const { t } = useLanguage()
const [selectedProject, setSelectedProject] = useState<Project | null>(null)
const [isModalOpen, setIsModalOpen] = useState(false)
const projects: Project[] = [
  {
    titleKey: "StockManagementTitle",
    descriptionKey: "stockManagementDesc",
    image: "https://i.postimg.cc/0yrQgkx6/afgmvm.png?height=300&width=500",
    tech: ["React.js","Redux" ,"Node.js", "MySQL", "Express", "Bootstrap","JWT","RestFulApi", "Vercel","Render","Git"],
    github: "#",
    live: "https://mvmappafg.vercel.app/",
    hasBackend: true,
    username: "mrguig@afgaz.ma",
    password: "afgaz0102",
  },
  {
    titleKey: "OrderWebappTitle",
    descriptionKey: "orderWebAppDesc",
        image: "https://i.postimg.cc/7Z4fvYpN/commandeapp.png?height=300&width=500",
    tech: ["React.js","Redux", "Node.js", "MicrosoftSQLServer", "Express", "Bootstrap","RestFulApi", "Vercel","Render","Git"],
    github: "#",
    live: "https://top-class2.vercel.app/",
    hasBackend: true,
    username: "johnson@example.com",
    password: "password",
  },
  {
    titleKey: "InventoryPlatformTitle",
    descriptionKey: "inventoryPlatformDesc",
        image: "https://i.postimg.cc/MHhtZjyH/inventoryapp.png?height=300&width=500",
    tech: ["React.js","Redux", "Node.js", "MicrosoftSQLServer", "Express", "Bootstrap","RestFulApi", "Vercel","Render","Git"],
    github: "#",
    live: "https://topinv3.vercel.app/",
    hasBackend: true,
    username: "rguig",
    password: "top0102",
  },
  {
    titleKey: "PolehandassaWebSiteTitle",
    descriptionKey: "poleHandassaDesc",
        image: "https://i.postimg.cc/Y9vsp7JX/Pole-Handassa.png?height=300&width=500",
    tech: ["React.js","Redux", "Node.js", "Bootstrap", "Vercel","Git"],
    github: "#",
    live: "https://chak.vercel.app/",
    hasBackend: false,
  },
  {
    titleKey: "MappingtechnologiesWebSiteTitle",
    descriptionKey: "mappingTechDesc",
        image: "https://i.postimg.cc/WzXFXR4v/Mapping.png?height=300&width=500",
    tech: ["Html","Css", "JavaScript","Bootstrap", "Vercel","Git"],
    github: "#",
    live: "https://mohamed-rguig.github.io/MappingTechnologies-rguig/",
    hasBackend: false,
  },
  {
    titleKey: "ModernPortfolioTitle",
    descriptionKey: "modernPortfolioDesc",
        image: "https://i.postimg.cc/6pJLHmCG/portfolio.png?height=300&width=500",
    tech: ["Next.js", "React.js", "Prisma", "Vercel","TypeScript","Tailwind Css","Git"],
    github: "#",
    live: "#",
    hasBackend: false,
  },
]
const handleReadMore = (project: Project) => {
  setSelectedProject(project)
  setIsModalOpen(true)
}

const handleCloseModal = () => {
  setIsModalOpen(false)
  setSelectedProject(null)
}
  return (
    <>
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t("featuredProjects")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.titleKey)}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-black dark:text-white">{t(project.titleKey)}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-2">{t(project.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                    onClick={() => handleReadMore(project)}
                      size="sm"
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
                    >
                       <BookOpen className="mr-2 h-4 w-4" />
                      {t("readMore")}
                    </Button>
                    <a
  href={project.live} // <-- ton lien ici
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
>
  <ExternalLink className="mr-2 h-4 w-4" />
  {t("liveDemo")}
</a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>  
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
            </>
      )
}

    {/*  <section id="projects" className="py-20 px-4 bg-gray-900/50">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
               <Card
                 key={index}
                 className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group"
               >
                 <div className="relative overflow-hidden">
                   <Image
                     src={project.image || "/placeholder.svg"}
                     alt={project.title}
                     width={500}
                     height={300}
                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                 </div>
                 <CardHeader>
                   <CardTitle className="text-white">{project.title}</CardTitle>
                   <CardDescription className="text-gray-400">{project.description}</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {project.tech.map((tech, techIndex) => (
                       <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-400">
                         {tech}
                       </Badge>
                     ))}
                   </div>
                   <div className="flex space-x-4">
                     <Button
                       size="sm"
                       variant="outline"
                       className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                     >
                       <Github className="mr-2 h-4 w-4" />
                       Read More
                     </Button>
                     <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                       <ExternalLink className="mr-2 h-4 w-4" />
                       Live Demo
                     </Button>
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
       </section> */}
  
