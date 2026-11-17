import { FadeIn } from '../animations/FadeIn'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <FadeIn direction="up" delay={0.05}>
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4 ${
              isCenter ? 'mx-auto' : ''
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {badge}
          </div>
        </FadeIn>
      )}

      <FadeIn direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn direction="up" delay={0.15}>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
