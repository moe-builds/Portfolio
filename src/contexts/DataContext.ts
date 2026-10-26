import {
  createContext,
  useContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  featured: boolean;
}

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
  desc: string;
}

interface Event {
  year: string;
  role: string;
  company: string;
  description: string;
  badges: string[];
}

interface DataContextType {
  projects: Project[];
  skills: Skill[];
  timelineEvents: Event[];
  mousePosition: { x: number; y: number };
  setMousePosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  typedText: string;
  setTypedText: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<DataContextType | null>(null);

export function useData() {
  const context = useContext(DataContext);

  if (!context) throw Error("context must be in a provider.");

  return context;
}
