import { ArrowUpRight } from "lucide-react";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-slate-950 text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            &lt;/&gt;
          </div>
          <span className="font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
            Moe<span className="text-cyan-400">.DEV</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Work
          </a>
          <a
            href="#experience"
            className="hover:text-cyan-400 transition-colors"
          >
            Experience
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-sm font-medium hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-sm flex items-center gap-2 group"
        >
          <span>Let's Talk</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </nav>
  );
}
