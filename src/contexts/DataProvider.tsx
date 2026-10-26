import { useMemo, useState, type ReactNode } from "react";
import { DataContext } from "./DataContext";
import { Cpu, Database, Globe, Layout } from "lucide-react";

export function DataProvider({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");

  const value = useMemo(() => {
    return {
      projects: [
        {
          id: 1,
          title: "Aetheria Design System",
          category: "design",
          description:
            "An ultra-modern, accessible component library engineered for high-performance React web applications.",
          tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
          link: "#",
          github: "#",
          featured: true,
        },
      ],
      skills: [
        {
          name: "Frontend Architecture",
          level: 90,
          icon: <Layout className="w-5 h-5" />,
          desc: "React, Next.js, Modern JS/TS",
        },
        {
          name: "Backend & APIs",
          level: 90,
          icon: <Database className="w-5 h-5" />,
          desc: "Node.js, GraphQL, PostgreSQL, Redis",
        },
        {
          name: "3D & Interactive Web",
          level: 20,
          icon: <Globe className="w-5 h-5" />,
          desc: "Three.js, WebGL, Shader FX, Canvas",
        },
        {
          name: "DevOps & Infrastructure",
          level: 82,
          icon: <Cpu className="w-5 h-5" />,
          desc: "Docker, CI/CD, AWS, Cloudflare",
        },
      ],
      timelineEvents: [
        {
          year: "2024 - Present",
          role: "Staff Product Engineer",
          company: "Apex Digital Labs",
          description:
            "Leading the core frontend platform team, crafting resilient design systems, and improving overall Web Vitals by 42% across flagship SaaS products.",
          badges: ["Design System", "Architecture", "Team Lead"],
        },
        {
          year: "2022 - 2024",
          role: "Senior UI/UX Developer",
          company: "Vanguard Interactive",
          description:
            "Engineered high-concurrency client dashboards and interactive data visualization suites using React, D3.js, and Tailwind CSS.",
          badges: ["TypeScript", "Three.js", "Next.js"],
        },
        {
          year: "2020 - 2022",
          role: "Frontend Engineer",
          company: "Starlight Tech Solutions",
          description:
            "Built responsive web interfaces for fintech clients. Architected a custom component library adopted across 8 multi-disciplinary engineering squads.",
          badges: ["React", "CSS Architecture", "Jest"],
        },
        {
          year: "2018 - 2020",
          role: "Full-Stack Developer & Designer",
          company: "Creative Studio 99",
          description:
            "Collaborated directly with clients to design, prototype, and build custom web applications, dynamic brand portals, and mobile-friendly layouts.",
          badges: ["Node.js", "Figma", "PostgreSQL"],
        },
      ],
      mousePosition,
      setMousePosition,
      typedText,
      setTypedText,
    };
  }, [typedText, mousePosition]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
