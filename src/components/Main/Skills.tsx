import { useData } from "../../contexts/DataContext";

export function Skills() {
  const { skills } = useData();
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900"
    >
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
          Core Capabilities
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Technical Mastery & Stack
        </h3>
        <p className="text-slate-400">
          Engineered with precision. Continuous learning blended with
          production-tested experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="font-mono text-sm font-semibold text-slate-400">
                  {skill.level}%
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-sm text-slate-400 mt-1">{skill.desc}</p>
              </div>
            </div>

            {/* Dynamic Skill Level Indicator */}
            <div className="mt-6 w-full bg-slate-800/80 h-2 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
