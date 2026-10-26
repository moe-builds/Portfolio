import { CheckCircle2, Send, Mail } from "lucide-react";
import { useState, type SubmitEvent } from "react";
export function ContactSec() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build Something Extraordinary
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Have a new product idea, a business opportunity? Reach out directly
            and let's craft something amazing together.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">
                  Direct Email
                </span>
                <a
                  href="mailto:alex@example.com"
                  className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  moebtech1@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            {/* <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  San Francisco, CA (PST / UTC-8)
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleContactSubmit}
            className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6 backdrop-blur-xl relative"
          >
            {formSubmitted && (
              <div className="absolute inset-0 bg-slate-950/90 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center p-8 text-center space-y-4 z-20 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <h4 className="text-2xl font-bold">Message Delivered!</h4>
                <p className="text-slate-400 text-sm max-w-md">
                  Thank you for reaching out. I've received your message and
                  will respond within 24 hours.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400">
                PROJECT / SUBJECT
              </label>
              <input
                type="text"
                required
                placeholder="Web App Architecture / Design System"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400">
                MESSAGE
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project goals and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
