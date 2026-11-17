import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, Send, AlertTriangle, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { personalInfo } from '../data/portfolioData'
import { contactService, type ContactSubmissionResult } from '../services/contactService'
import type { ContactFormData } from '../types/portfolio'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please provide a valid email address.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export function Contact() {
  const [submissionState, setSubmissionState] = useState<{
    loading: boolean
    result: ContactSubmissionResult | null
  }>({
    loading: false,
    result: null,
  })

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const formValues = watch()

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ loading: true, result: null })

    const result = await contactService.submitContact(data)

    setSubmissionState({
      loading: false,
      result,
    })

    if (result.success) {
      reset()
    }
  }

  const mailtoFallbackUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
    formValues.subject || 'Portfolio Inquiry for Hari Prasath'
  )}&body=${encodeURIComponent(
    `Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`
  )}`

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badge="Get in Touch"
          title="LET'S CONNECT & COLLABORATE"
          subtitle="Open for software engineering internships, backend development roles, and project collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0d1222] border border-white/10 space-y-4 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Direct Channels</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Have an internship opportunity or software project? Reach out directly via email, phone, or LinkedIn.
                  </p>
                </div>

                {/* Email Box */}
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#111728] border border-white/5 hover:border-cyan-500/40 hover:bg-[#151c30] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Personal Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-cyan-300 transition-colors">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>

                {/* Phone Box */}
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#111728] border border-white/5 hover:border-emerald-500/40 hover:bg-[#151c30] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Direct Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-emerald-300 transition-colors">
                      {personalInfo.contact.formattedPhone}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0" />
                </a>

                {/* GitHub Box */}
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#111728] border border-white/5 hover:border-blue-500/40 hover:bg-[#151c30] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">GitHub Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-blue-300 transition-colors">
                      github.com/{personalInfo.contact.githubUsername}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>

                {/* LinkedIn Box */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#111728] border border-white/5 hover:border-indigo-500/40 hover:bg-[#151c30] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">LinkedIn Network</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-indigo-300 transition-colors">
                      linkedin.com/in/{personalInfo.contact.linkedinUsername}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0" />
                </a>

                <div className="pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                  Location: {personalInfo.contact.location}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.15}>
              <div className="p-7 sm:p-9 rounded-3xl bg-[#0d1222] border border-white/10 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">Send a Direct Message</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Connect directly with Hari Prasath for developer discussions.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase font-mono">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. John Doe / Tech Recruiter"
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-xl bg-[#111728] border ${
                          errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                        } text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1 font-mono">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase font-mono">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. contact@company.com"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-xl bg-[#111728] border ${
                          errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                        } text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1 font-mono">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase font-mono">
                      Subject <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Software Developer Opportunity Discussion"
                      {...register('subject')}
                      className={`w-full px-4 py-3 rounded-xl bg-[#111728] border ${
                        errors.subject ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                      } text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-rose-400 text-xs mt-1 font-mono">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase font-mono">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Write your message or role details here..."
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-xl bg-[#111728] border ${
                        errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                      } text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1 font-mono">{errors.message.message}</p>
                    )}
                  </div>

                  {submissionState.result && (
                    <div
                      className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                        submissionState.result.success
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {submissionState.result.success ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium">{submissionState.result.message}</p>

                          {!submissionState.result.success && (
                            <div className="mt-3 pt-3 border-t border-amber-500/20">
                              <p className="text-xs text-amber-300/80 mb-2">
                                Send this message directly via your email app to Hari:
                              </p>
                              <a
                                href={mailtoFallbackUrl}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold text-xs border border-amber-500/40 transition-colors"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Send via Email Client</span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submissionState.loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/30 border border-blue-400/30 cursor-pointer"
                    >
                      {submissionState.loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
