import Link from "next/link";

export const metadata = {
  title: "Building reliable client portals | Sylas Omondi",
  description:
    "Patterns for predictable delivery, clean dashboards, and happier clients when building client portals.",
};

export default function BuildingReliableClientPortals() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-10 sm:px-10">
      <BackToHome />
      <article className="mt-4 space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
            Product & Delivery
          </p>
          <h1 className="text-2xl font-semibold">Building reliable client portals</h1>
          <p className="text-sm text-[var(--muted)]">
            Notes on how I think about permissions, data ownership, and daily usability when
            building client-facing portals like task and client management systems.
          </p>
        </header>

        <section className="space-y-3 text-sm text-[var(--muted)]">
          <p>
            Most client portals don&apos;t fail because of missing features. They fail because
            nothing feels reliable: logins don&apos;t work, data is out of date, or people
            can&apos;t find what matters. When I&apos;m designing and building portals, I try
            to remove that friction before adding anything fancy.
          </p>
          <p>
            On the UI side, that means clear navigation, obvious &quot;owner&quot; for each
            piece of data, and dashboards that surface just enough context to make a decision.
            On the engineering side, it means predictable auth flows, robust error handling,
            and simple domain models for tasks, clients, and users.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            1. Make &quot;what do I do next?&quot; obvious
          </h2>
          <p>
            Every portal view should answer one question first: what is the next decision or
            action for this person? That&apos;s why I like dashboards that show:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Tasks assigned to the current user in the near term</li>
            <li>Recent client activity, changes, or messages</li>
            <li>Simple status indicators instead of long reports</li>
          </ul>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            2. Treat permissions as a UX feature
          </h2>
          <p>
            A lot of frustration comes from seeing too much or too little. I try to model
            roles clearly (e.g. admin, manager, contributor, client) and pair that with UI
            states that make permissions obvious. If you don&apos;t have access to something,
            the interface should communicate &quot;you can&apos;t edit this because...&quot;
            instead of silently failing.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            3. Prefer boring, reliable stacks
          </h2>
          <p>
            For client portals and internal tools, I like staying close to battle-tested
            stacks: React/Next.js on the frontend, REST APIs with clear contracts, and simple
            data models. The goal is fast iteration and predictable deployments, not chasing
            the latest trend.
          </p>
        </section>

        <footer className="border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
          <p>
            If you&apos;re interested in a client portal or internal dashboard for your team,
            feel free to{" "}
            <Link href="#contact" className="font-semibold text-[var(--accent)]">
              reach out through my contact form
            </Link>
            .
          </p>
        </footer>
      </article>
    </main>
  );
}

function BackToHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-sm font-semibold text-[var(--accent)]"
    >
      ← Back to portfolio
    </Link>
  );
}


