import Link from "next/link";
import { PrintButton } from "./print-button";

export const metadata = {
  title: "Sylas Omondi | Résumé",
  description: "Résumé of Sylas Omondi — Frontend Developer / Project Coordinator.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 sm:px-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          ← Back
        </Link>
        <div className="flex gap-2">
          <PrintButton />
        </div>
      </div>

      <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Sylas Omondi</h1>
          <p className="text-sm font-semibold text-[var(--muted)]">
            Junior – Mid Level Fullstack Web Developer / Project Coordinator
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--muted)]">
            <span>Kenya</span>
            <span>
              Email:{" "}
              <a className="font-semibold text-[var(--accent)]" href="mailto:omondisylasowuor@gmail.com">
                omondisylasowuor@gmail.com
              </a>
            </span>
            <span>
              Phone:{" "}
              <a className="font-semibold text-[var(--accent)]" href="tel:0768535032">
                0768535032
              </a>
            </span>
            <span>
              GitHub:{" "}
              <a
                className="font-semibold text-[var(--accent)]"
                href="https://github.com/0768535032"
                target="_blank"
                rel="noreferrer"
              >
                github.com/0768535032
              </a>
            </span>
            <span>
              LinkedIn:{" "}
              <a
                className="font-semibold text-[var(--accent)]"
                href="https://www.linkedin.com/in/sylas-owuor-3a039b1a3?trk=contact-info"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sylas-owuor-3a039b1a3
              </a>
            </span>
          </div>
        </header>

        <Hr />

        <Section title="Professional Summary">
          <p className="text-sm text-[var(--muted)]">
            Software engineer with hands-on experience building real-world
            software solutions such as applications, dashboards, and client-facing systems. Comfortable working
            with React, modern JavaScript tooling,Node.js,Django and REST APIs, with exposure to
            backend integration and deployment workflows. Experienced collaborating
            with teams, translating requirements into functional interfaces, and
            supporting projects from development through deployment. Expanding
            responsibilities in project coordination while staying hands-on in
            development.
          </p>
        </Section>

        <Section title="Technical Skills">
          <TwoCol>
            <SkillGroup
              title="Frontend"
              items={["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vite"]}
            />
            <SkillGroup
              title="UI & UX"
              items={["Responsive design", "Component-based layouts", "Dashboard interfaces"]}
            />
            <SkillGroup
              title="APIs & Auth"
              items={["REST APIs", "JWT authentication", "Axios"]}
            />
            <SkillGroup title="Backend " items={["Django, Node.js,Django REST Framework (integration)"]} />
            <SkillGroup
              title="Tools & Platforms"
              items={["Git", "GitHub", "Vercel", "Render", "npm"]}
            />
            <SkillGroup
              title="General"
              items={["Debugging", "Deployment support", "Documentation"]}
            />
          </TwoCol>
        </Section>

        <Section title="Professional Experience">
          <Role
            title="Nova Studios — Project Manager (PM)"
            meta="December 2025 – Present"
            bullets={[
              "Coordinate web and software projects between developers, designers, and stakeholders",
              "Track project milestones, timelines, and deliverables",
              "Support development teams with task breakdowns, documentation, and progress reporting",
              "Contribute technical input during planning to ensure realistic implementation timelines",
            ]}
          />
          <Role
            title="Witz Africa — Junior Frontend Web Developer"
            meta="January 2025 – April 2025"
            bullets={[
              "Developed and maintained frontend interfaces for internal and client-facing web applications",
              "Implemented responsive layouts and reusable UI components using modern JavaScript frameworks",
              "Integrated frontend components with backend APIs for authentication and data handling",
              "Participated in debugging, testing, and feature refinement based on user feedback",
            ]}
          />
          <Role
            title="Kobby Technologies — Web Developer / Technical Intern"
            meta="October 2024 – June 2025"
            bullets={[
              "Worked on multiple web-based systems including dashboards and data-driven applications",
              "Assisted in building and refining Business Central system dashboards for improved data visibility",
              "Collaborated with backend developers to integrate frontend interfaces with REST APIs",
              "Gained practical experience in version control, deployments, and production debugging",
            ]}
          />
        </Section>

        <Section title="Selected Projects">
          <Role
            title="Client Task Management System"
            meta="Full-stack"
            bullets={[
              "Built a task and client management system with secure authentication",
              "React + Axios frontend, Django REST Framework backend integration",
              "Features: auth, task assignment, client records, protected routes",
              "Deployed: backend (Render) + frontend (Vercel)",
            ]}
          />
          <Role
            title="FMCSA Driver Daily Log System"
            meta="Frontend + UX"
            bullets={[
              "Designed and developed a daily log app aligned with FMCSA requirements",
              "Focused on accurate time logging, usability, and clear dashboard presentation",
              "Implemented structured forms, validations, and log summaries",
            ]}
          />
          <Role
            title="JibuBrandHouse Online Retail Solution"
            meta="Product build"
            bullets={[
              "Developed an online retail store concept with product customization and checkout flow",
              "Focused on user-friendly customization and smooth shopping experience",
              "Delivered a scalable foundation for small to mid-sized retail businesses",
            ]}
          />
          <Role
            title="Business Central Dashboards"
            meta="Dashboards"
            bullets={[
              "Created dashboards to visualize and interact with Business Central system data",
              "Focused on clarity, usability, and efficient presentation of operational metrics",
              "Transformed raw data into accessible UI components to support decisions",
            ]}
          />
        </Section>

        <Section title="Education">
          <p className="text-sm text-[var(--muted)]">
            Bachelor of Science in Computer Technology — October 2024
          </p>
        </Section>
      </article>

      <style>{`
        @media print {
          body { background: white !important; }
          main { padding: 0 !important; }
          article { border: none !important; box-shadow: none !important; }
          a[href]:after { content: "" !important; }
          button { display: none !important; }
        }
      `}</style>
    </main>
  );
}

function Hr() {
  return <div className="my-6 h-px w-full bg-[var(--border)]" />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-3">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function TwoCol({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 md:grid-cols-2">{children}</div>;
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white/60 p-3">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{items.join(", ")}</p>
    </div>
  );
}

function Role({
  title,
  meta,
  bullets,
}: {
  title: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div className="mt-3 rounded-xl border border-[var(--border)] bg-white/60 p-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs font-semibold text-[var(--muted)]">{meta}</p>
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}


