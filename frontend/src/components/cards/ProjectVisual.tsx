import { Bot, Shield, ShoppingBag, Terminal, Activity, Wifi, Zap, Video } from 'lucide-react'

interface ProjectVisualProps {
  type: string
  accentColor?: string
}

export function ProjectVisual({ type, accentColor = '#3b82f6' }: ProjectVisualProps) {
  switch (type) {
    case 'cococut':
      return (
        <div
          className="relative w-full h-52 sm:h-60 bg-[#070b16] overflow-hidden rounded-2xl flex flex-col justify-between p-4 border border-white/10"
          style={{ borderColor: `${accentColor}33` }}
        >
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Bot className="w-4 h-4 text-emerald-400" />
              CocoCut Rover · RPi 4 Controller
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <Wifi className="w-3 h-3 animate-pulse" /> Telemetry Online
            </span>
          </div>

          <div className="my-auto py-2 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-[#0d1428] p-2 rounded-xl border border-white/5">
              <span className="text-[10px] text-slate-400 block">Vision Model</span>
              <span className="font-mono text-emerald-400 font-bold">Offline ML</span>
            </div>
            <div className="bg-[#0d1428] p-2 rounded-xl border border-white/5">
              <span className="text-[10px] text-slate-400 block">Obstacle Avoidance</span>
              <span className="font-mono text-white font-bold">360° Sensors</span>
            </div>
            <div className="bg-[#0d1428] p-2 rounded-xl border border-white/5">
              <span className="text-[10px] text-slate-400 block">Fail-Safe</span>
              <span className="font-mono text-cyan-400 font-bold">BT Manual Override</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
            <span>Hardware: Raspberry Pi + GPS + Frond Cutter</span>
            <span className="text-emerald-400">Autonomous Rover</span>
          </div>
        </div>
      )

    case 'evcharging':
      return (
        <div
          className="relative w-full h-52 sm:h-60 bg-[#060c18] overflow-hidden rounded-2xl flex flex-col justify-between p-4 border border-white/10"
          style={{ borderColor: `${accentColor}33` }}
        >
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Zap className="w-4 h-4 text-cyan-400" />
              Smart Pole EV Network · Spring Boot
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              <Video className="w-3 h-3 text-cyan-400" /> Camera Active
            </span>
          </div>

          <div className="my-auto py-2 space-y-2">
            <div className="bg-[#0a142c] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">GET /api/v1/poles/status</span>
              <span className="text-emerald-400 font-semibold">200 OK (8ms)</span>
            </div>
            <div className="bg-[#0a142c] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-200">EV Station #14: 22kW Fast Charge</span>
              </div>
              <span className="text-cyan-300">Active Session</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
            <span>Stack: Java · Spring Data JPA · MySQL</span>
            <span className="text-cyan-400">Layered Maven</span>
          </div>
        </div>
      )

    case 'cybersentinel':
      return (
        <div
          className="relative w-full h-52 sm:h-60 bg-[#09101f] overflow-hidden rounded-2xl flex flex-col justify-between p-4 border border-white/10"
          style={{ borderColor: `${accentColor}33` }}
        >
          <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Shield className="w-4 h-4 text-indigo-400" />
              CyberSentinel AI · Threat Forecaster
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              <Activity className="w-3 h-3 text-indigo-400 animate-pulse" /> ML Classifier
            </span>
          </div>

          <div className="my-auto py-2 space-y-2">
            <div className="bg-[#0f172d] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300 font-mono text-[11px]">TCP Flow Analysis: Normal</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Score: 0.02</span>
            </div>

            <div className="bg-[#0f172d] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="text-slate-200 font-mono text-[11px]">Port Scan Anomaly Detected</span>
              </div>
              <span className="text-[11px] font-mono text-amber-400 font-bold">Conf: 94.2%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
            <span>ML Model: Random Forest · Pandas</span>
            <span className="text-indigo-400">Traffic Forecaster</span>
          </div>
        </div>
      )

    default: // localkart
      return (
        <div
          className="relative w-full h-52 sm:h-60 bg-[#120f18] overflow-hidden rounded-2xl flex flex-col justify-between p-4 border border-white/10"
          style={{ borderColor: `${accentColor}33` }}
        >
          <div className="flex items-center justify-between text-xs font-mono text-amber-400">
            <span className="flex items-center gap-1.5 font-bold">
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              LocalKart API · Commerce Engine
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              <Terminal className="w-3 h-3" /> REST v1
            </span>
          </div>

          <div className="my-auto py-2 space-y-2">
            <div className="bg-[#1b1525] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">GET /api/v1/merchants/nearby</span>
              <span className="text-emerald-400">200 OK (14ms)</span>
            </div>
            <div className="bg-[#1b1525] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">POST /api/v1/cart/checkout</span>
              <span className="text-blue-400">Typed TypeScript Payload</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
            <span>Stack: React + Node.js + MySQL</span>
            <span className="text-amber-400">Multi-Vendor Hub</span>
          </div>
        </div>
      )
  }
}
