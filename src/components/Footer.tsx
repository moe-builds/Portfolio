export function Footer() {
  return (
    <footer className="border-t border-slate-900 py-10 px-6 text-center text-slate-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Moe. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
