import { ContactSec } from "./ContactSec";
import { Hero } from "./Hero";
import { ProjectSec } from "./ProjectSec";
import { Skills } from "./Skills";
// import { Timeline } from "./Timeline";

export function Main() {
  return (
    <main className="relative z-10">
      {/* HERO SECTION */}
      <Hero />

      {/* SKILLS & EXPERTISE */}
      <Skills />

      {/* PROJECTS SHOWCASE */}
      <ProjectSec />

      {/* WORK EXPERIENCE TIMELINE */}
      {/* <Timeline /> */}

      {/* CONTACT FORM SECTION */}
      <ContactSec />
    </main>
  );
}
