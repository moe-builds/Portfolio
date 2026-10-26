import { useData } from "../../contexts/DataContext";

export function Timeline() {
  const { timelineEvents } = useData();
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900"
    >
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
          Career Pathway
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Professional Timeline
        </h3>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
        {timelineEvents.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300"></div>

            {/* Date Label on Left for Desktop */}
            <div className="md:absolute md:-left-36 md:top-1 font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 md:mb-0">
              {item.year}
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 group-hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 className="text-lg font-bold text-slate-100">
                  {item.role}
                </h4>
                <span className="text-sm font-semibold text-cyan-400">
                  {item.company}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300"
                  >
                    #{badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
