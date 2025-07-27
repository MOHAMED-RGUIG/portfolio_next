"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, User, Lock, Globe } from "lucide-react"
import Image from "next/image"
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

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t } = useLanguage()

  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-black dark:text-white mb-4">
            {t(project.titleKey)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image du projet */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={t(project.titleKey)}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{t("description")}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t(project.descriptionKey)}</p>
          </div>

          {/* Technologies utilisées */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">{t("technologiesUsed")}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Informations d'accès */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-black dark:text-white flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              {t("accessInformation")}
            </h3>

            {project.hasBackend ? (
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300 mb-3">{t("loginRequired")}</p>
                <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-2">
                    <User className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-black dark:text-white">{t("username")}:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300 font-mono">
                      {project.username || "demo"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-black dark:text-white">{t("password")}:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300 font-mono">
                      {project.password || "password"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-600/20 rounded-full mb-3">
                  <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-lg font-medium text-green-600 dark:text-green-400">{t("freeAccess")}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{t("noLoginRequired")}</p>
              </div>
            )}
          </div>

          {/* Boutons d'action */}
          <div className="flex space-x-4 pt-4">
            <Button
              onClick={() => window.open(project.live, "_blank")}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("visitProject")}
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
            >
              {t("close")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
