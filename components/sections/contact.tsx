"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { ThemeToggle, LanguageToggle } from "@/components/ui/toggles"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"
import toast from "react-hot-toast"
export function ContactSection() {
   const { t } = useLanguage()
   
  // Remplacez 'YOUR_FORM_ID' par votre ID de formulaire Formspree
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREEKEY)

  // Afficher une notification de succès
  useEffect(() => {
    if (state.succeeded) {
      toast.success(t("emailSentSuccess"))
    }
  }, [state.succeeded, t])

  // Afficher les erreurs
  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      state.errors.forEach((error: any) => {
        toast.error(error.message || t("emailSentError"))
      })
    }
  }, [state.errors, t])

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-600/20 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{t("messageSent")}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{t("emailSentSuccess")}</p>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
        >
          {t("sendAnotherMessage")}
        </Button>
      </div>
    )
  }

  return (
   <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t("contactTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t("workTogether")}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{t("contactDesc")}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">Mohamedrguig26@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">+212 6 3146-8788</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">Casablanca, Morocco</span>
                </div>
              </div>
            </div>
            <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <Input
            id="name"
            type="text"
            name="name"
            placeholder={t("yourName")}
            disabled={state.submitting}
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                <Input
            id="email"
            type="email"
            name="email"
            placeholder={t("yourEmail")}
            disabled={state.submitting}
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                <Textarea
            id="message"
            name="message"
            placeholder={t("yourMessage")}
            rows={5}
            disabled={state.submitting}
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
                </div>
                <Button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("sending")}
            </>
          ) : (
            <>
              {t("sendMessage")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
              </form>
            </div>
          </div>
        </div>
      </section>



  )
}
{/*    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Mohamedrguig26@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+212 (063) 146-8788</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Casablanca, Morocco</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section> */}