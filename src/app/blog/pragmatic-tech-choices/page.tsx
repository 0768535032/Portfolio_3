import Link from "next/link";

export const metadata = {
  title: "Pragmatic tech choices | Sylas Omondi",
  description:
    "How I think about choosing stacks for dashboards, portals, and internal tools.",
};

export default function PragmaticTechChoices() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-10 sm:px-10">
      <BackToHome />
      <article className="mt-4 space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
            Engineering
          </p>
          <h1 className="text-2xl font-semibold">Pragmatic tech choices</h1>
          <p className="text-sm text-[var(--muted)]">
            A quick look at how I choose tools for real projects instead of chasing every new
            framework that appears on Twitter.
          </p>
        </header>

        <section className="space-y-3 text-sm text-[var(--muted)]">
          <p>
            Most products I work on don&apos;t need cutting-edge tech. They need clarity,
            maintainability, and the ability for another developer to pick things up six
            months later. That usually means leaning on well-known stacks and proven
            patterns.
          </p>
          <p>
            On the frontend, I default to React/Next.js: good ecosystem, great deployment
            story, and flexible enough for dashboards, portals, and marketing pages. On the
            backend side, Django REST or similar frameworks work well when I need strong
            conventions and an admin interface quickly.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            1. Choose what your team can support
          </h2>
          <p>
            A &quot;perfect&quot; stack that nobody on the team understands is a risk. I try
            to favor tech that is easy for other engineers to step into: common patterns,
            straightforward folder structures, and good documentation.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            2. Optimize for feedback loops
          </h2>
          <p>
            I value tools that give fast feedback: hot reloads, simple CI/CD, and clear
            error messages. That&apos;s another reason I like Next.js and platforms like
            Vercel—shipping new changes is low friction, which keeps you close to users.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            3. Keep experiments isolated
          </h2>
          <p>
            When I do want to try new libraries or approaches, I keep them isolated: a small
            feature, a separate service, or a branch. That way the core of the product
            stays stable while we still learn.
          </p>
        </section>

        <footer className="border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
          <p>
            If you&apos;re evaluating stacks for a new dashboard or internal tool, I&apos;m
            happy to share more detailed opinions—just{" "}
            <Link href="#contact" className="font-semibold text-[var(--accent)]">
              get in touch
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


