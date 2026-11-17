import { X, Video, AlertCircle, Play } from 'lucide-react'
import type { SpeakingEngagement } from '../../types/portfolio'

interface VideoModalProps {
  video: SpeakingEngagement | null
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!isOpen || !video) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0d1222] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-slate-200 z-10 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-2">
              <Video className="w-3.5 h-3.5" />
              Verified Public Speaking Video
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-purple-300 font-medium mt-1">{video.event}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player (Local MP4, YouTube, or Pending Notice) */}
        <div className="mt-5 space-y-4">
          {video.localVideoUrl ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-500/30 bg-black shadow-2xl">
              <video
                src={video.localVideoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video tag.
              </video>
            </div>
          ) : video.youtubeId ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-2xl border border-dashed border-white/20 bg-[#101626] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Video className="w-7 h-7" />
              </div>
              <h4 className="text-base font-semibold text-white">Video Recording Archiving</h4>
              <p className="text-xs text-slate-400 max-w-sm mt-1.5 leading-relaxed">
                Presentation recording for this session is being processed for publication.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Session slide deck and notes archived</span>
              </div>
            </div>
          )}

          <div className="p-4 rounded-xl bg-[#111728] border border-white/5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Speech Overview & Key Insights
            </h5>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {video.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {topic}
                </span>
              ))}
            </div>
            {video.duration && (
              <span className="font-mono text-slate-400 flex items-center gap-1">
                <Play className="w-3 h-3 text-purple-400" />
                {video.duration}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
