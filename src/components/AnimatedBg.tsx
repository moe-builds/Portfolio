import { useData } from "../contexts/DataContext";

export function AnimatedBg() {
  const { mousePosition } = useData();
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
        }}
      />
      <div
        className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
        }}
      />
      <div
        className="absolute bottom-10 left-1/3 w-[30rem] h-[30rem] bg-violet-600/15 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
    </div>
  );
}
