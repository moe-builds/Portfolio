import { Mail, Terminal, Briefcase } from "lucide-react";
import { useData } from "../../contexts/DataContext";

export function Hero() {
  const { typedText, mousePosition } = useData();
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-mono tracking-wide shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>AVAILABLE FOR FREELANCE & FULL-TIME ROLES</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Crafting Modern <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
                Digital Experiences
              </span>
            </h1>

            <div className="h-10 flex items-center font-mono text-xl sm:text-2xl text-slate-400">
              <span className="text-cyan-400 mr-2">&gt;</span>
              <span>{typedText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
            </div>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I bridge the gap between elegant UI design and robust frontend
            architecture. Specialized in crafting pixel-perfect, highly
            responsive interactive interfaces powered by clean code.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              <span>View Projects</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium hover:border-slate-700 hover:bg-slate-850 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 tracking-wider uppercase">
              Connect:
            </span>
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/moe-builds"
                target="_blank"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-all"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Right Interactive 3D Card Showcase */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-md aspect-square rounded-3xl bg-slate-900/40 border border-slate-800 p-6 backdrop-blur-xl transition-all duration-500 shadow-2xl flex flex-col justify-between group overflow-hidden"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>

            {/* Code Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="font-mono text-xs text-slate-500">
                DeveloperProfile.tsx
              </span>
            </div>

            {/* Floating Tech Badges */}
            <div className="my-6 space-y-3 font-mono text-sm">
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between group-hover:border-cyan-500/30 transition-all">
                <span className="text-cyan-400">const</span> developer = &#123;
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Active
                </span>
              </div>
              <div className="pl-4 space-y-2 text-slate-400">
                <p>
                  <span className="text-purple-400">name:</span>{" "}
                  <span className="text-amber-300">'Moe'</span>,
                </p>
                <p>
                  <span className="text-purple-400">role:</span>{" "}
                  <span className="text-amber-300">'Senior Web Dev'</span>,
                </p>
                <p>
                  <span className="text-purple-400">location:</span>{" "}
                  <span className="text-amber-300">'Algeria'</span>,
                </p>
                <p>
                  <span className="text-purple-400">passion:</span>{" "}
                  <span className="text-amber-300">''</span>
                </p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                &#125;; <span className="text-slate-500 text-xs">//</span>
              </div>
            </div>

            {/* Status bar */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>STATUS: OPTIMAL</span>
              </div>
              <span className="text-emerald-400 font-bold">100% COVERAGE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
