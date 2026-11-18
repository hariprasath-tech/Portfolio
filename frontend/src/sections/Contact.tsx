import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MapPin } from 'lucide-react'
import { content } from '../data/content'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Frontend-only ready for EmailJS/Formspree or REST backend
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      setSubmitError('Failed to send message. Please reach out directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#d90429]/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        {/* Oversized Typography Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-[0.25em] text-[#ff2a45] uppercase bg-[#8d0b1c]/15 border border-[#d90429]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2
            className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none"
            style={{
              color: '#ffe600',
              WebkitTextStroke: '2px #ffffff',
              textShadow: '0 0 35px rgba(255, 230, 0, 0.45)',
            }}
          >
            LET'S BUILD SOMETHING MEANINGFUL.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-inter">
            Open for software developer internships, autonomous systems collaboration, and creative video editing productions.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels (5 cols) & Validated Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start max-w-6xl mx-auto">
          {/* Direct Channels Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-3xl bg-[#0f0f10] border border-white/10 space-y-6 shadow-2xl">
              <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase">
                DIRECT CONTACT
              </h3>

              <div className="space-y-4">
                {/* Email Direct */}
                <a
                  href={`mailto:${content.personal.contact.email}`}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff2a45] flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#ffe600] uppercase">
                      EMAIL INBOX
                    </span>
                    <p className="font-mono text-sm text-white font-medium group-hover:text-[#ff2a45] transition-colors break-all">
                      {content.personal.contact.email}
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={content.personal.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff2a45] flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45] group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#ffe600] uppercase">
                      GITHUB PROFILE
                    </span>
                    <p className="font-mono text-sm text-white font-medium group-hover:text-[#ff2a45] transition-colors">
                      github.com/hariprasath-tech
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={content.personal.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff2a45] flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45] group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#ffe600] uppercase">
                      LINKEDIN NETWORK
                    </span>
                    <p className="font-mono text-sm text-white font-medium group-hover:text-[#ff2a45] transition-colors">
                      linkedin.com/in/hari-prasath-b47a38359
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                      CAMPUS & LOCATION
                    </span>
                    <p className="font-mono text-sm text-zinc-300">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Validated Contact Form Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0f0f10] border border-white/10 shadow-2xl relative">
              <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase mb-6">
                SEND A MESSAGE
              </h3>

              {/* Toast Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-[#d90429]/20 border border-[#ff2a45]/50 flex items-center gap-3 text-white text-xs sm:text-sm font-mono shadow-[0_0_20px_rgba(255,42,69,0.3)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#ffe600] shrink-0" />
                    <span>
                      Thank you! Your message has been prepared. You can also reach out directly via{' '}
                      <a
                        href={`mailto:${content.personal.contact.email}`}
                        className="underline text-[#ffe600]"
                      >
                        {content.personal.contact.email}
                      </a>
                    </span>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-red-950/50 border border-red-500/50 flex items-center gap-3 text-red-300 text-xs font-mono"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-2">
                    YOUR NAME <span className="text-[#ff2a45]">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#050505] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#ff2a45]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-2">
                    EMAIL ADDRESS <span className="text-[#ff2a45]">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#050505] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#ff2a45]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-2">
                    PROJECT OR INQUIRY DETAILS <span className="text-[#ff2a45]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    placeholder="Describe your internship opportunity, robotics project, or video production inquiry..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#050505] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#ff2a45]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-anton text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] hover:brightness-110 active:scale-98 transition-all shadow-[0_0_25px_rgba(255,42,69,0.45)] border border-[#ff2a45]/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'DISPATCHING MESSAGE...' : 'SEND MESSAGE NOW'}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
