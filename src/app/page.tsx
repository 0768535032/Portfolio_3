"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Project = {
  title: string;
  description: string;
  stack: string;
  liveUrl?: string;
  codeUrl?: string;
  status?: string;
};

type BlogPost = {
  title: string;
  summary: string;
  link: string;
  tag: string;
};

const contactEmail = "omondisylasowuor@gmail.com";
const contactPhone = "0768535032";
const resumeUrl = "/resume";

const liveProjects: Project[] = [
  {
    title: "Internal Task & Client Management",
    description:
      "Client + task management workspace with dashboards, assignments, and delivery tracking.",
    stack: "Next.js, Tailwind CSS",
    liveUrl: "https://internal-task-client-management.vercel.app/",
    codeUrl: "https://github.com/0768535032?tab=repositories",
    status: "Live",
  },
  {
    title: "Transport Booking Portal",
    description:
      "Transport booking flow with authentication and trip scheduling experience.",
    stack: "Next.js, Tailwind CSS",
    liveUrl:
      "https://transport-frontend-fg0b4wtjc-sylas-omondis-projects.vercel.app/login",
    codeUrl: "https://github.com/0768535032?tab=repositories",
    status: "Live",
  },
];

const codeProjects: Project[] = [
  {
    title: "Hotel Management",
    description:
      "Java CLI/GUI app to handle rooms, guests, reservations, billing, and reports.",
    stack: "Java, JDBC, MySQL, Swing / JavaFX",
    codeUrl: "https://github.com/0768535032/Hotel-Management",
    status: "Code",
  },
  {
    title: "Django To-Do List",
    description:
      "Task CRUD with auth, filters, and clean UI to stay organized day-to-day.",
    stack: "Django, SQLite/PostgreSQL, HTML/CSS",
    codeUrl: "https://github.com/0768535032/my_to_do_list_dj",
    status: "Code",
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "Building reliable client portals",
    summary:
      "Patterns I lean on for predictable delivery, clean dashboards, and happier clients.",
    link: "/blog/building-reliable-client-portals",
    tag: "Product & Delivery",
  },
  {
    title: "From idea to launch: Copyme",
    summary:
      "Notes from co-founding at Copyme—scope, shipping cadence, and keeping users close.",
    link: "/blog/from-idea-to-launch-copyme",
    tag: "Startup",
  },
  {
    title: "Pragmatic tech choices",
    summary:
      "Picking the right stack for fast iteration: React/Next for the front, Django/Java where it fits.",
    link: "/blog/pragmatic-tech-choices",
    tag: "Engineering",
  },
];

const badgeClass =
  "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-semibold text-[var(--muted)] shadow-sm";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) return stored;
    return "dark";
  });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", next);
      document.documentElement.dataset.theme = next;
    }
  };

  const isFormValid = useMemo(() => {
    return formState.email.trim().length > 3 && formState.message.trim().length > 5;
  }, [formState.email, formState.message]);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-10 sm:px-10 sm:py-14">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[var(--accent)]" />
          <div>
            <p className="text-sm font-semibold tracking-wide text-[var(--muted)]">
              Sylas Omondi
            </p>
            <p className="text-sm text-[var(--muted)]">
              Full-stack dev · Enthusiast · Co-founder @ Copyme
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-lg"
            href="https://github.com/0768535032"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-lg"
            href="https://www.linkedin.com/in/sylas-owuor-3a039b1a3?trk=contact-info"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={badgeClass}>Full-stack Web Developer</span>
            <span className={badgeClass}>Frontend (Junior–Mid)</span>
            <span className={badgeClass}>Project Coordination</span>
            <span className={badgeClass}>Startup Co-founder @ Copyme</span>
            <span className={badgeClass}>Based in Nairobi</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Fullstack developer building clean dashboards, client portals,
            and production-ready interfaces.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
            I’m a tech enthusiast and startup co-founder at Copyme. I’m comfortable
            with React, modern JavaScript tooling,Node.js,Django and REST APIs, and auth flows, with
            exposure to Django REST integration and deployment workflows. I also
            support delivery through project coordination—turning requirements into
            clear plans and shippable UI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-2)]"
            >
              Download résumé
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact me
            </a>
            <Link
              href="https://github.com/0768535032"
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-lg"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </Link>
          </div>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
            <Image
              src="/headshot.jpg"
              alt="Sylas Omondi headshot"
              width={600}
              height={800}
              priority
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 p-4 text-sm text-white backdrop-blur">
              <p className="font-semibold">Sylas Omondi</p>
              <p className="text-xs text-white/80">
                Enthusiast · Co-founder @ Copyme
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Years shipping" value="3+" />
        <StatCard label="Live products" value="2 (more incoming)" />
        <StatCard label="Focus" value="Frontend, dashboards, client systems" />
      </section>

      <SectionHeading
        title="Skills"
        subtitle="What I work with day-to-day"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard
          title="Frontend"
          items={["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vite", "Responsive UI"]}
        />
        <InfoCard
          title="Backend & Databases"
          items={[
            "Django REST Framework (integration)",
            "REST APIs",
            "JWT authentication",
            "SQL basics (PostgreSQL / MySQL)",
          ]}
        />
        <InfoCard
          title="Tooling & Delivery"
          items={[
            "Axios",
            "Git & GitHub",
            "Vercel / Render",
            "Debugging & documentation",
          ]}
        />
      </div>

      <SectionHeading
        title="Experience"
        subtitle="Recent roles and responsibilities"
      />
      <div className="grid gap-4">
        <TimelineItem
          title="Nova Studios — Web Development Team Lead"
          meta="Dec 2025 – Present"
          bullets={[
            "Coordinate web/software projects between developers, designers, and stakeholders",
            "Track milestones, timelines, and deliverables",
            "Support task breakdowns, documentation, and progress reporting",
            "Provide technical input during planning for realistic timelines",
          ]}
        />
        <TimelineItem
          title="Witz Africa — Junior Frontend Web Developer"
          meta="Jan 2025 – Apr 2025"
          bullets={[
            "Built and maintained internal + client-facing web interfaces",
            "Implemented responsive layouts and reusable components",
            "Integrated frontend with backend APIs for auth and data handling",
            "Debugged, tested, and refined features from user feedback",
          ]}
        />
        <TimelineItem
          title="Kobby Technologies — Web Developer / Technical Intern"
          meta="Oct 2024 – Jun 2025"
          bullets={[
            "Worked on dashboards and data-driven applications",
            "Helped build Business Central dashboards for improved data visibility",
            "Collaborated with backend devs to integrate frontend with REST APIs",
            "Gained hands-on experience with deployments and production debugging",
          ]}
        />
      </div>

      <SectionHeading
        title="Live builds"
        subtitle="Production work with live preview and code"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {liveProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <SectionHeading
        title="Code previews"
        subtitle="Repositories ready to explore and extend"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {codeProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <SectionHeading
        title="Blog & writing"
        subtitle="Builder notes on product, delivery, and technology choices"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-3 inline-flex rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {post.tag}
            </div>
            <h3 className="text-lg font-semibold group-hover:text-[var(--accent)]">
              <Link href={post.link} target="_blank" rel="noreferrer">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{post.summary}</p>
            <Link
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center text-sm font-semibold text-[var(--accent)]"
            >
              Read →
            </Link>
          </article>
        ))}
      </div>

      <section
        id="contact"
        className="grid gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] md:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <h2 className="text-2xl font-semibold">Let’s talk</h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
            I’m open to collaborations, freelance engagements, and startup
            conversations. Drop a note and I’ll reply quickly.
          </p>
          <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <p>
              Email:{" "}
              <a
                className="font-semibold text-[var(--accent)]"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="font-semibold text-[var(--accent)]" href={`tel:${contactPhone}`}>
                {contactPhone}
              </a>
            </p>
            <p>Location: Nairobi, Kenya · Remote friendly</p>
          </div>
        </div>
        <form
          className="space-y-4"
          action="https://formsubmit.co/omondisylasowuor@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="rounded-xl border border-[var(--border)] bg-white/80 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              required
              name="email"
              className="rounded-xl border border-[var(--border)] bg-white/80 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="you@company.com"
              value={formState.email}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">How can I help?</label>
            <textarea
              required
              rows={4}
              name="message"
              className="rounded-xl border border-[var(--border)] bg-white/80 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="Project details, timeline, links…"
              value={formState.message}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition enabled:hover:-translate-y-0.5 enabled:hover:bg-[var(--accent-2)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send message
          </button>
          <p className="text-xs text-[var(--muted)]">
            This sends directly to my inbox.
          </p>
        </form>
      </section>

      <footer className="flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sylas Omondi.</p>
        <div className="flex gap-3">
          <Link href="https://github.com/0768535032" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sylas-owuor-3a039b1a3?trk=contact-info"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link href="#contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          {project.status}
        </p>
        <span className="text-[11px] font-semibold text-[var(--muted)]">
          {project.stack}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-semibold group-hover:text-[var(--accent)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-2)]"
          >
            Live preview
          </Link>
        )}
        {project.codeUrl ? (
          <Link
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View code
          </Link>
        ) : (
          <span className="rounded-full border border-dashed border-[var(--border)] px-4 py-2 text-xs font-semibold text-[var(--muted)]">
            Code coming soon
          </span>
        )}
      </div>
    </article>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm text-[var(--muted)]">{subtitle}</p>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-xs font-semibold text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  meta,
  bullets,
}: {
  title: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-semibold text-[var(--muted)]">{meta}</p>
      </div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
