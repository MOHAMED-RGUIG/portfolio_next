"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    experience: "Expérience",
    education: "Formation",
    contact: "Contact",

    // Hero Section
    fullStackDeveloper: "Développeur Full Stack",
    heroDescription:
      "Passionné par la création d'expériences numériques exceptionnelles avec des technologies modernes.",
    getInTouch: "Me contacter",
    downloadCV: "Télécharger CV",

    // About Section
    aboutMe: "À propos de moi",
    aboutDescription1:
      "Je suis un développeur full-stack passionné avec plus de 3 ans d'expérience dans la création d'applications web évolutives. J'aime transformer des problèmes complexes en designs simples et beaux, et donner vie aux idées grâce au code.",
    aboutDescription2:
      "Mon expertise s'étend aux frameworks frontend modernes, aux technologies backend et à l'infrastructure cloud. Je suis toujours désireux d'apprendre de nouvelles technologies et de rester à jour avec les meilleures pratiques de l'industrie.",
    skillsTechnologies: "Compétences & Technologies",

    // Projects Section
    featuredProjects: "Mes Projets",
    "StockManagementTitle":"Platforme de gestion de stock",
    "OrderWebappTitle": "Application Web de Commandes",
    "InventoryPlatformTitle": "Plateforme d'Inventaire",
    "PolehandassaWebSiteTitle": "Site Web Pole Handassa",
    "MappingtechnologiesWebSiteTitle": "Site Web Technologies de Cartographie",
    "ModernPortfolioTitle": "Portfolio Moderne",
    //projects description
    // Project descriptions
    stockManagementDesc:
      "Solution complète de gestion de stock avec intégration de paiement, gestion d'inventaire et tableau de bord administrateur.",
    orderWebAppDesc:
      "Application web de gestion des commandes avec suivi en temps réel et interface utilisateur intuitive.",
    inventoryPlatformDesc:
      "Plateforme d'inventaire avancée avec analytics et rapports détaillés pour optimiser la gestion des stocks.",
    poleHandassaDesc: "Site web professionnel pour Pole Handassa avec design moderne et fonctionnalités interactives.",
    mappingTechDesc:
      "Site web spécialisé dans les technologies de cartographie avec visualisations interactives et données géospatiales.",
    modernPortfolioDesc:
      "Portfolio moderne et responsive avec animations fluides et design contemporain pour présenter les projets.",

      readMore: "Voir Plus",
    liveDemo: "Démo en direct",

    // Experience Section
    experienceTitle: "Expérience",
    FullStackWebDeveloper: "Développeur Web Full Stack",
    ModerateurWeb:
      "ModèrateurWeb",
    ItAssistant: "Assistant Informatique",
    debtCollector:"Agent de Recouvrement",
    debtAssistant:"Assistant de Recouvrement",
    //experience description
    FullStackWebDevTopClassDescription:"Travailler en tant que développeur full stack, créer et développer des applications web",
    FullStackWebDevAfgazDescription:"Créer et développer une plateforme de gestion de stock en tant que freelance",
    WebModeratorDescription:"Travailler en tant que contrôleur et modérateur des offres d’emploi en ligne",
    ItAssistantDescription:"Assistant au département informatique",
    debtCollectorDescription:"Appeler et faire le suivi avec les clients pour le paiement de leurs dettes",
    // Modal content
    description: "Description",
    technologiesUsed: "Technologies Utilisées",
    accessInformation: "Informations d'Accès",
    loginRequired: "Ce projet nécessite une authentification pour accéder aux fonctionnalités complètes :",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    freeAccess: "Accès Libre",
    noLoginRequired: "Aucune connexion requise pour accéder à ce projet",
    visitProject: "Visiter le Projet",
    close: "Fermer",
    // Education Section
    educationTitle: "Formation",
    educationSubtitle: "Mon parcours académique et mes qualifications",
    LicenceEnInformatique:"Licence en Dévelopement Web et Mobile",
    TechnicienSpecialiseDeveloppementInformatique:"Technicien Spécialisé En Développement Informatique",
    LicenceEnEconomieGestion:"Licence En Economie et Gestion",
    certifications: "Certifications",
    ENSAMCasablanca:"ENSAM Casablanca",
    EcoleIcf:"École Icf",
    UniversiteHassanII:"Université Hassan II Fsjes Route Eljadida",
    LicenceInfDescription:"Spécialisation en développement web et Mobile. Projet de fin d'études sur une application web de gestion de stock des pièces de rechanges.",
    TechnicienInfoDescription: "Formation en programmation, bases de données, et Dévelopement Web.",
    LicenceEcoDescription: "Spécialité en Gestion et Sciences Economique. Option Economie et Gestion.",
    Licence:"Licence",
    Bac2: "Bac + 2",

    // Contact Section
    contactTitle: "Me contacter",
    workTogether: "Travaillons ensemble",
    contactDesc:
      "Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Que vous ayez une question ou que vous vouliez simplement dire bonjour, n'hésitez pas à me contacter !",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    yourMessage: "Votre message",
    sendMessage: "Envoyer le message",
    messageSent: "Message Envoyé !",
    sendAnotherMessage: "Envoyer un autre message",
    // Footer
    allRightsReserved: "Tous droits réservés.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",

    // Hero Section
    fullStackDeveloper: "Full Stack Web Developer",
    heroDescription: "Passionate about creating exceptional digital experiences with modern technologies.",
    getInTouch: "Get In Touch",
    downloadCV: "Download CV",

    // About Section
    aboutMe: "About Me",
    aboutDescription1:
      "I'm a passionate full-stack developer with over 3 years of experience building scalable web applications. I love turning complex problems into simple, beautiful designs and bringing ideas to life through code.",
    aboutDescription2:
      "My expertise spans across modern frontend frameworks, backend technologies, and cloud infrastructure. I'm always eager to learn new technologies and stay up-to-date with industry best practices.",
    skillsTechnologies: "Skills & Technologies",

    // Projects Section
    featuredProjects: "My Projects",
    //projects titles
    // Project titles
    StockManagementTitle: "Stock Management Platform",
    OrderWebappTitle: "Order Web app",
    InventoryPlatformTitle: "Inventory Platform",
    PolehandassaWebSiteTitle: "Pole Handassa Website",
    MappingtechnologiesWebSiteTitle: "Mapping Technologies Website",
    ModernPortfolioTitle: "Modern Portfolio",

   // Project descriptions
    stockManagementDesc:
      "Full-stack stock management solution with payment integration, inventory management, and admin dashboard.",
    orderWebAppDesc: "Web application for order management with real-time tracking and intuitive user interface.",
    inventoryPlatformDesc:
      "Advanced inventory platform with analytics and detailed reports to optimize stock management.",
    poleHandassaDesc: "Professional website for Pole Handassa with modern design and interactive features.",
    mappingTechDesc: "Website specialized in mapping technologies with interactive visualizations and geospatial data.",
    modernPortfolioDesc:
      "Modern and responsive portfolio with smooth animations and contemporary design to showcase projects.",
    readMore: "Read More",
    liveDemo: "Live Demo",

    // Experience Section
    experienceTitle: "Experience",
    FullStackWebDeveloper: "Full Stack Web Developer",
    ModerateurWeb:
      "Web Moderator",
    ItAssistant: "It Assistant",
    debtCollector:"Debt Collector",
    debtAssistant:"Debt Assistant",
    //experience description
    FullStackWebDevTopClassDescription:"Work as a full stack developer, create and develop web application",
    FullStackWebDevAfgazDescription:"Create and develop a stock management platform as a freelancer",
    WebModeratorDescription:"Work as controller & moderator for web job offer.",
    ItAssistantDescription:"IT department assistant",
    debtCollectorDescription:"Call and follow up with customers to pay their debts",
// Modal content
description: "Description",
technologiesUsed: "Technologies Used",
accessInformation: "Access Information",
loginRequired: "This project requires authentication to access full features:",
username: "Username",
password: "Password",
freeAccess: "Free Access",
noLoginRequired: "No login required to access this project",
visitProject: "Visit Project",
close: "Close",

    // Education Section
    educationTitle: "Education",
    educationSubtitle: "My academic background and qualifications",
  
    certifications: "Certificate",
    LicenceEnInformatique:"Bachelor’s Degree in Web and Mobile developement",
    TechnicienSpecialiseDeveloppementInformatique:"Specialized Technician in Software Development",
    LicenceEnEconomieGestion:"Bachelor’s Degree in Economics and Management",
    ENSAMCasablanca:"ENSAM Casablanca",
    EcoleIcf:"ICF School",
    UniversiteHassanII:"Hassan II University – Faculty of Legal, Economic and Social Sciences, El Jadida Road",
    LicenceInfDescription:"Specialized in Web and Mobile Development. Final year project on a web application for spare parts inventory management.",
    TechnicienInfoDescription: "Training in programming, databases, and web development.",
    LicenceEcoDescription: "Specialized in Management and Economic Sciences. Major in Economics and Management.",
    Licence:"Bachelor’s Degree",
    Bac2: "Bac + 2",
    // Contact Section
    contactTitle: "Get In Touch",
    workTogether: "Let's work together",
    contactDesc:
      "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    messageSent: "Message Sent!",
    sendAnotherMessage: "Send Another Message",
    // Footer
    allRightsReserved: "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
