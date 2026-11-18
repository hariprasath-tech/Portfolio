import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Film, Clock, Sparkles, Maximize2, Scissors } from 'lucide-react'
import { content } from '../data/content'
import type { VideoShowcaseItem } from '../data/content'
import { LightboxModal } from '../components/common/LightboxModal'
import { DiagonalStreaks } from '../components/animations/DiagonalStreaks'

interface VideoCardProps {
  item: VideoShowcaseItem
  index: number
  onOpenLightbox: (item: VideoShowcaseItem) => void
}

// Subtle alternating floating angles matching the reference video
const ROTATION_VARIANTS = [-2.5, 1.8, -1.5, 2.2, -1.8, 1.5, -2.0]

function VideoCard({ item, index, onOpenLightbox }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const rotation = ROTATION_VARIANTS[index % ROTATION_VARIANTS.length]

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -10, rotate: 0, scale: 1.04, zIndex: 30 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenLightbox(item)}
      className="group relative rounded-2xl overflow-hidden border-2 border-white/40 bg-[#0f0f10] shadow-[0_20px_45px_rgba(0,0,0,0.85)] aspect-[9/16] cursor-pointer flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(255,21,56,0.4)] hover:border-white"
    >
      {/* Background HTML5 Video Layer */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay for Readability */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition-opacity duration-300 ${
          isPlaying ? 'opacity-40' : 'opacity-85'
        }`}
      />

      {/* Top Bar: Tool Badge & Duration */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase text-white bg-black/70 border border-white/20 backdrop-blur-md flex items-center gap-1 shadow-md">
          <Scissors className="w-3 h-3 text-[#FF1538]" />
          <span>{item.tool}</span>
        </span>
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono text-[#FFF000] bg-[#A00025]/90 border border-[#FF1538]/50 backdrop-blur-md flex items-center gap-1 font-bold shadow-md">
          <Clock className="w-3 h-3" />
          <span>{item.duration}</span>
        </span>
      </div>

      {/* Center Play Icon Indicator */}
      <div className="relative z-10 flex items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full bg-[#A00025]/90 border-2 border-white/60 flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,21,56,0.8)] transition-all duration-300 ${
            isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100 group-hover:scale-110'
          }`}
        >
          <Play className="w-6 h-6 ml-1 fill-white" />
        </div>
      </div>

      {/* Bottom Content Bar */}
      <div className="relative z-10 p-3.5 sm:p-4 bg-gradient-to-t from-black via-black/95 to-transparent space-y-1.5">
        <div className="text-[10px] font-mono text-[#FFF000] font-bold uppercase tracking-wider flex items-center gap-1">
          <Film className="w-3 h-3" />
          <span>{item.clientOrContext}</span>
        </div>
        <h4 className="font-bebas text-lg sm:text-xl text-white tracking-wide uppercase leading-tight line-clamp-2">
          {item.title}
        </h4>
        <div className="flex flex-wrap gap-1 pt-1">
          {item.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-zinc-300"
            >
              #{t}
            </span>
          ))}
        </div>
        <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/10">
          <span className="text-zinc-300">Tap for Fullscreen Lightbox</span>
          <Maximize2 className="w-3 h-3 text-[#FF1538]" />
        </div>
      </div>
    </motion.div>
  )
}

export function VideoShowcase() {
  const [activeLightboxItem, setActiveLightboxItem] = useState<VideoShowcaseItem | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { videoShowcase } = content

  const categories = videoShowcase.categories

  // Filter categories or show all
  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === selectedCategory)

  return (
    <section
      id="video-showcase"
      className="py-24 relative overflow-hidden bg-[#78001D] border-y-2 border-[#FF1538]/50"
    >
      {/* 1. ANIMATED MOVING DIAGONAL STREAKS (Exact Reference Video Background) */}
      <DiagonalStreaks intensity="vibrant" />

      {/* 2. AMBIENT RED & YELLOW GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[#A00025]/35 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-[#FFF000]/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Heading with Yellow Glow & White Stroke */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-[0.25em] text-[#FFF000] uppercase bg-black/60 border border-[#FFF000]/50 mb-4 shadow-[0_0_20px_rgba(255,240,0,0.35)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FFF000]" />
            <span>COMMERCIAL VIDEO SHOWCASE · {videoShowcase.tool.toUpperCase()}</span>
          </div>

          <h2
            className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase leading-none"
            style={{
              color: '#FFF000',
              WebkitTextStroke: '2px #FFFFFF',
              textShadow:
                '0 0 35px rgba(255, 240, 0, 0.65), 0 0 70px rgba(255, 21, 56, 0.45)',
            }}
          >
            {videoShowcase.title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-100 max-w-2xl mx-auto leading-relaxed font-inter font-medium drop-shadow-md">
            {videoShowcase.subtitle}
          </p>
        </div>

        {/* 7 Category Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#FFF000] text-black shadow-[0_0_20px_rgba(255,240,0,0.6)] font-extrabold scale-105'
                : 'bg-black/70 text-zinc-200 border border-white/20 hover:border-white/50 backdrop-blur-md'
            }`}
          >
            All Categories ({categories.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#A00025] text-white shadow-[0_0_20px_rgba(255,21,56,0.6)] border-2 border-[#FF1538] font-extrabold scale-105'
                  : 'bg-black/70 text-zinc-200 border border-white/20 hover:border-white/50 backdrop-blur-md'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Categories Display (Exact Reference Headings: BRAND & PRODUCT, EVENT & CELEBRATION, etc.) */}
        <div className="space-y-20">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              {/* Category Subheading with Yellow Outline Title */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b-2 border-white/30">
                <div>
                  <h3
                    className="font-bebas text-3xl sm:text-5xl md:text-6xl tracking-wider uppercase leading-none"
                    style={{
                      color: '#FFF000',
                      WebkitTextStroke: '1.5px #FFFFFF',
                      textShadow: '0 0 20px rgba(255, 240, 0, 0.5)',
                    }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-200 mt-1 font-semibold">
                    {category.tagline}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-black/80 px-3.5 py-1.5 rounded-full border border-white/30 backdrop-blur-md shadow-md">
                  {category.items.length} Vertical 9:16 Video{category.items.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards Grid with Floating Asymmetrical Rotations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                {category.items.map((item, idx) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    index={idx}
                    onOpenLightbox={(it) => setActiveLightboxItem(it)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Player Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  )
}
