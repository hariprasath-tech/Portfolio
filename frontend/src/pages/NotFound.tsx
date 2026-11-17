import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white flex items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-[#0d1222] border border-white/10 shadow-2xl">
        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-mono">
          404
        </span>
        <h1 className="text-2xl font-bold mt-4 tracking-tight">Page Not Found</h1>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          The requested page route does not exist or has been relocated.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
