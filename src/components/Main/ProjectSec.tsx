import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useData } from "../../contexts/DataContext";

export function ProjectSec() {
  const [activeTab, setActiveTab] = useState("all");
  const { projects } = useData();
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Selected Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </h3>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
          {["all", "web", "3D"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image container with zoom effect */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">
                  <a
                    href={project.link}
                    className="p-3 rounded-full bg-slate-900 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-slate-900 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all"
                    title="Source Code"
                  >
                    Github
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
