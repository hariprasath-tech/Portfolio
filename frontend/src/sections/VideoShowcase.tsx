import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Film, Clock, Sparkles, Maximize2, Scissors } from 'lucide-react'
import { content } from '../data/content'
import type { VideoShowcaseItem } from '../data/content'
import { LightboxModal } from '../components/common/LightboxModal'

interface VideoCardProps {
  item: VideoShowcaseItem
  onOpenLightbox: (item: VideoShowcaseItem) => void
}

function VideoCard({ item, onOpenLightbox }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenLightbox(item)}
      className="group relative rounded-2xl overflow-hidden border-2 border-white/30 bg-[#0f0f10] shadow-[0_15px_35px_rgba(0,0,0,0.8)] aspect-[9/16] cursor-pointer flex flex-col justify-between"
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
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${
          isPlaying ? 'opacity-50' : 'opacity-85'
        }`}
      />

      {/* Top Bar: Duration & CapCut Tool Badge */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase text-white bg-black/60 border border-white/20 backdrop-blur-md flex items-center gap-1">
          <Scissors className="w-3 h-3 text-[#ff2a45]" />
          <span>{item.tool}</span>
        </span>
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono text-[#ffe600] bg-[#d90429]/80 border border-[#ff2a45]/40 backdrop-blur-md flex items-center gap-1 font-bold">
          <Clock className="w-3 h-3" />
          <span>{item.duration}</span>
        </span>
      </div>

      {/* Center Play Icon (Fades out on hover play) */}
      <div className="relative z-10 flex items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full bg-[#d90429]/90 border border-white/30 flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,42,69,0.7)] transition-all duration-300 ${
            isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100 group-hover:scale-110'
          }`}
        >
          <Play className="w-6 h-6 ml-1 fill-white" />
        </div>
      </div>

      {/* Bottom Content Bar */}
      <div className="relative z-10 p-3.5 sm:p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-1.5">
        <div className="text-[10px] font-mono text-[#ffe600] font-bold uppercase tracking-wider flex items-center gap-1">
          <Film className="w-3 h-3" />
          <span>{item.clientOrContext}</span>
        </div>
        <h4 className="font-anton text-base sm:text-lg text-white tracking-wide uppercase leading-tight line-clamp-2">
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
          <span>Click for Fullscreen Lightbox</span>
          <Maximize2 className="w-3 h-3 text-[#ff2a45]" />
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
      className="py-24 relative overflow-hidden red-streaks-bg border-y border-[#d90429]/40"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#d90429]/25 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff2a45]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-[0.25em] text-[#ffe600] uppercase bg-[#ffe600]/15 border border-[#ffe600]/40 mb-3 shadow-[0_0_15px_rgba(255,230,0,0.3)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITING TOOL: {videoShowcase.tool.toUpperCase()}</span>
          </div>
          <h2
            className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none"
            style={{
              color: '#ffe600',
              WebkitTextStroke: '2px #ffffff',
              textShadow: '0 0 30px rgba(255, 230, 0, 0.55)',
            }}
          >
            {videoShowcase.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-inter">
            {videoShowcase.subtitle}
          </p>
        </div>

        {/* 7 Category Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#ffe600] text-black shadow-[0_0_15px_rgba(255,230,0,0.5)]'
                : 'bg-black/60 text-zinc-300 border border-white/10 hover:border-white/30'
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
                  ? 'bg-[#d90429] text-white shadow-[0_0_15px_rgba(255,42,69,0.5)] border border-[#ff2a45]'
                  : 'bg-black/60 text-zinc-300 border border-white/10 hover:border-white/30'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Categories Display */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Subheading with Yellow Outline Title */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-white/20">
                <div>
                  <h3
                    className="font-anton text-2xl sm:text-3xl md:text-4xl tracking-wider uppercase"
                    style={{
                      color: '#ffe600',
                      WebkitTextStroke: '1px #ffffff',
                      textShadow: '0 0 15px rgba(255, 230, 0, 0.4)',
                    }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-300 mt-1">
                    {category.tagline}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-black/60 px-3 py-1 rounded-full border border-white/20">
                  {category.items.length} Vertical 9:16 Video{category.items.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    onOpenLightbox={(it) => setActiveLightboxItem(it)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Video Player Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  )
}
