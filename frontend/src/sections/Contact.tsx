import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MapPin } from 'lucide-react'
import { content } from '../data/content'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'
import { DiagonalStreaks } from '../components/animations/DiagonalStreaks'

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
      // Simulate submission
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
    <section id="contact" className="relative overflow-hidden bg-[#080808] border-t-2 border-[#FF1538]/30">
      {/* ============================================================== */}
      {/* 1. CINEMATIC OUTRO BANNER (Reference Video 43.4s - 47.8s) */}
      {/* ============================================================== */}
      <div className="relative py-28 sm:py-36 overflow-hidden bg-[#78001D] border-b-2 border-[#FF1538]/40">
        <DiagonalStreaks intensity="vibrant" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 text-center max-w-6xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-[0.3em] text-[#FFF000] uppercase bg-black/70 border border-[#FFF000]/50 shadow-[0_0_20px_rgba(255,240,0,0.4)] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFF000]" />
            <span>THE OUTRO · FINAL SHOWREEL STEP</span>
          </motion.div>

          {/* Reference Line: "IF YOU'RE LOOKING FOR CONTENT THAT STANDS OUT" */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider uppercase leading-[0.95]"
          >
            <span className="text-white block">IF YOU'RE LOOKING FOR SOMEONE WHO</span>
            <span
              className="block mt-2"
              style={{
                color: '#FFF000',
                WebkitTextStroke: '2px #FFFFFF',
                textShadow:
                  '0 0 35px rgba(255, 240, 0, 0.7), 0 0 70px rgba(255, 21, 56, 0.5)',
              }}
            >
              BUILDS THINGS THAT STAND OUT.
            </span>
          </motion.h2>

          {/* Second Line: "DM FOR WORK" -> "LET'S WORK TOGETHER" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-bebas text-2xl sm:text-4xl text-white tracking-widest"
          >
            <span className="text-[#FFF000] bg-black/60 px-5 py-2 rounded-xl border border-white/20 backdrop-blur-md">
              HARI PRASATH S
            </span>
            <span className="hidden sm:inline text-[#FF1538]">✦</span>
            <span className="bg-[#A00025] px-6 py-2 rounded-xl border-2 border-[#FF1538] shadow-[0_0_25px_rgba(255,21,56,0.6)]">
              LET'S WORK TOGETHER
            </span>
          </motion.div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. DIRECT CONTACT CHANNELS & FORM */}
      {/* ============================================================== */}
      <div className="py-24 relative overflow-hidden bg-[#080808]">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#A00025]/20 rounded-full blur-[190px] pointer-events-none" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="font-bebas text-4xl sm:text-6xl text-white tracking-wider uppercase leading-none">
              GET IN TOUCH DIRECTLY
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 font-mono">
              Open for Winter/Summer internships, software engineering roles, hardware collaborations, and video edits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Direct Channels Left Column (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-7 rounded-3xl bg-[#0f0f10] border-2 border-white/10 space-y-6 shadow-2xl">
                <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase flex items-center gap-2">
                  <span>DIRECT CHANNELS</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFF000] animate-pulse" />
                </h4>

                <div className="space-y-4">
                  {/* Email Direct */}
                  <a
                    href={`mailto:${content.personal.contact.email}`}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF1538] flex items-center gap-4 transition-all group hover:bg-[#A00025]/15"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#A00025]/30 border border-[#FF1538]/50 flex items-center justify-center text-[#FF1538] group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#FFF000] uppercase">
                        EMAIL DIRECT
                      </span>
                      <p className="font-mono text-sm text-white font-medium group-hover:text-[#FF1538] transition-colors break-all">
                        {content.personal.contact.email}
                      </p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={content.personal.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF1538] flex items-center gap-4 transition-all group hover:bg-[#A00025]/15"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#A00025]/30 border border-[#FF1538]/50 flex items-center justify-center text-[#FF1538] group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#FFF000] uppercase">
                        GITHUB PROFILE
                      </span>
                      <p className="font-mono text-sm text-white font-medium group-hover:text-[#FF1538] transition-colors">
                        github.com/hariprasath-tech
                      </p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={content.personal.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF1538] flex items-center gap-4 transition-all group hover:bg-[#A00025]/15"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#A00025]/30 border border-[#FF1538]/50 flex items-center justify-center text-[#FF1538] group-hover:scale-110 transition-transform">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#FFF000] uppercase">
                        LINKEDIN NETWORK
                      </span>
                      <p className="font-mono text-sm text-white font-medium group-hover:text-[#FF1538] transition-colors">
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
                        COLLEGE CAMPUS & LOCATION
                      </span>
                      <p className="font-mono text-sm text-zinc-300">
                        Sri Eshwar College of Engineering, Coimbatore, TN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Validated Contact Form Right Column (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="p-7 sm:p-9 rounded-3xl bg-[#0f0f10] border-2 border-white/10 shadow-2xl relative">
                <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mb-6">
                  SEND AN INSTANT INQUIRY
                </h4>

                {/* Toast Alert */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 rounded-2xl bg-[#A00025]/30 border border-[#FF1538] flex items-center gap-3 text-white text-xs sm:text-sm font-mono shadow-[0_0_20px_rgba(255,21,56,0.4)]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#FFF000] shrink-0" />
                      <span>
                        Thank you! Your message inquiry is ready. You can also reach out directly via{' '}
                        <a
                          href={`mailto:${content.personal.contact.email}`}
                          className="underline text-[#FFF000] font-bold"
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
                      className="mb-6 p-4 rounded-2xl bg-red-950/60 border border-red-500/50 flex items-center gap-3 text-red-200 text-xs sm:text-sm font-mono"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="e.g. John Doe / Recruiter Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-[#FF1538] focus:ring-1 focus:ring-[#FF1538] text-white text-sm outline-none transition-all placeholder:text-zinc-600 font-inter"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-[#FF1538] focus:ring-1 focus:ring-[#FF1538] text-white text-sm outline-none transition-all placeholder:text-zinc-600 font-inter"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Discussing software roles, hardware prototyping, video editing projects, or speaking sessions..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-[#FF1538] focus:ring-1 focus:ring-[#FF1538] text-white text-sm outline-none transition-all placeholder:text-zinc-600 font-inter resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bebas text-lg tracking-wider uppercase text-white bg-gradient-to-r from-[#78001D] via-[#A00025] to-[#FF1538] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(255,21,56,0.5)] border border-[#FF1538]/60 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
