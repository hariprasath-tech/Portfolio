import { useState } from 'react'
import { Play, Mic, Calendar, Clock, Film, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { VideoModal } from '../components/common/VideoModal'
import { initialSpeaking, videoEditingProjects } from '../data/portfolioData'
import type { SpeakingEngagement } from '../types/portfolio'
import stagePhoto from '../assets/the-podium-stage.jpg'

export function Speaking() {
  const [activeTab, setActiveTab] = useState<'speaking' | 'editing'>('speaking')
  const [selectedVideo, setSelectedVideo] = useState<SpeakingEngagement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenVideo = (video: SpeakingEngagement) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <section id="speaking" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badge="Beyond Code"
          title="PUBLIC SPEAKING & CREATIVE MEDIA"
          subtitle="Verifiable stage presentations, spontaneous table-topic speeches, and professional video editing projects."
        />

        {/* Tab Switcher: Public Speaking vs Video Editing */}
        <FadeIn direction="up" delay={0.1} className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('speaking')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'speaking'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40 scale-102'
                  : 'bg-[#0f1426] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <Mic className="w-4 h-4 text-purple-300" />
              <span>Public Speaking (The Podium)</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-900/60 text-purple-200 border border-purple-400/30">
                Verified
              </span>
            </button>

            <button
              onClick={() => setActiveTab('editing')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'editing'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40 scale-102'
                  : 'bg-[#0f1426] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <Film className="w-4 h-4 text-blue-300" />
              <span>Video Editing Showcase</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-200 border border-blue-400/30">
                ISSai & IDC
              </span>
            </button>
          </div>
        </FadeIn>

        {/* TAB 1: PUBLIC SPEAKING */}
        {activeTab === 'speaking' && (
          <div className="space-y-8">
            {/* Featured Hero Card: The Podium Episode 04 with Real Stage Photo */}
            <FadeIn direction="up" delay={0.15}>
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121026] via-[#0d1326] to-[#0a0f1d] border border-purple-500/30 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left: Stage Image Thumbnail with Play Overlay */}
                  <div
                    onClick={() => handleOpenVideo(initialSpeaking[0])}
                    className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden cursor-pointer group border border-purple-500/30 shadow-2xl bg-black"
                  >
                    <img
                      src={stagePhoto}
                      alt="Hari Prasath speaking on stage at The Podium Episode 04"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-purple-600 group-hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-600/60 group-hover:scale-115 transition-all">
                        <Play className="w-7 h-7 ml-1" />
                      </div>
                    </div>

                    {/* Overline Label */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono text-purple-300 bg-black/70 backdrop-blur-md border border-purple-500/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified Stage Appearance · 08 July 2026</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                      <span>Live Speech Video Included</span>
                      <span className="text-purple-300">Click to Play</span>
                    </div>
                  </div>

                  {/* Right: Narrative details of The Podium presentation */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/25 mb-2">
                        <Mic className="w-3.5 h-3.5" />
                        <span>Featured Public Speaking Debut</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                        The Podium – A Public Speaking Initiative | Episode 04
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mt-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Conducted on 08 July 2026 · Multi-Department Forum</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Delivered a first-time impromptu table-topic speech in front of a live audience of students and faculty mentors across different engineering departments. Demonstrated spontaneous idea formulation, audience poise, and structured technical delivery.
                    </p>

                    {/* Key Competencies Demonstrated */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Skills Demonstrated:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['Public Speaking', 'Communication', 'Confidence', 'Spontaneous Thinking'].map((skill) => (
                          <span
                            key={skill}
                            className="flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-xl bg-purple-500/15 text-purple-200 border border-purple-500/30"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => handleOpenVideo(initialSpeaking[0])}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30 cursor-pointer"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Video 01</span>
                      </button>

                      <button
                        onClick={() => handleOpenVideo(initialSpeaking[1])}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-purple-300 hover:text-white bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 transition-all cursor-pointer"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Video 02</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Other Speaking Sessions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {initialSpeaking.slice(1).map((item, idx) => (
                <FadeIn key={item.id} direction="up" delay={0.1 * idx}>
                  <div className="group h-full flex flex-col justify-between p-6 rounded-3xl bg-[#0d1222] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <div>
                      <div
                        onClick={() => handleOpenVideo(item)}
                        className="relative aspect-video rounded-2xl bg-gradient-to-tr from-[#13172e] via-[#101426] to-[#1c1333] border border-white/10 flex items-center justify-center cursor-pointer overflow-hidden group-hover:border-purple-400/40 transition-all mb-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-purple-600/80 group-hover:bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-600/40 group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          <span>{item.duration || 'Session'}</span>
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-purple-400/90 font-medium mt-1">{item.event}</p>
                      <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {item.topics.slice(0, 2).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => handleOpenVideo(item)}
                        className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        Watch Video →
                      </button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: VIDEO EDITING & CREATIVE MEDIA */}
        {activeTab === 'editing' && (
          <div className="space-y-6">
            {/* Experience Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#0c1224] border border-blue-500/20">
                <span className="text-xs font-mono text-blue-400 block uppercase font-semibold">Company Role</span>
                <h4 className="text-base font-bold text-white mt-1">ISSai Technology</h4>
                <p className="text-xs text-slate-400 mt-0.5">Part-time Video Editor</p>
                <div className="mt-3 text-[11px] text-slate-300">
                  Promotional videos, marketing visuals, and creative company reels.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0c1224] border border-indigo-500/20">
                <span className="text-xs font-mono text-indigo-400 block uppercase font-semibold">Media Production</span>
                <h4 className="text-base font-bold text-white mt-1">IDC Media</h4>
                <p className="text-xs text-slate-400 mt-0.5">Video Editor</p>
                <div className="mt-3 text-[11px] text-slate-300">
                  Digital content editing, pacing, cinematic transitions, and audio sync.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0c1224] border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400 block uppercase font-semibold">Freelance Services</span>
                <h4 className="text-base font-bold text-white mt-1">Creative Freelancing</h4>
                <p className="text-xs text-slate-400 mt-0.5">Tool: CapCut</p>
                <div className="mt-3 text-[11px] text-slate-300">
                  Short-form content, viral video hooks, product teasers, and sound design.
                </div>
              </div>
            </div>

            {/* Video Editing Work Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {videoEditingProjects.map((proj, pIdx) => (
                <FadeIn key={proj.id} direction="up" delay={0.1 * pIdx}>
                  <div className="p-5 rounded-3xl bg-[#0d1222] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Video Player Preview */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 mb-4 shadow-lg">
                        <video
                          src={proj.videoUrl}
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                        >
                          Your browser does not support HTML5 video.
                        </video>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-1">
                        <span>{proj.client}</span>
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px]">
                          {proj.tool}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white">{proj.title}</h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
