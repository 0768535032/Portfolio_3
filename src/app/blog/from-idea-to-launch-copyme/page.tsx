import Link from "next/link";

export const metadata = {
  title: "From idea to launch: Copyme | Sylas Omondi",
  description:
    "High-level notes on co-founding Copyme and turning ideas into shipped product slices.",
};

export default function FromIdeaToLaunchCopyme() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-10 sm:px-10">
      <BackToHome />
      <article className="mt-4 space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
            Startup
          </p>
          <h1 className="text-2xl font-semibold">From idea to launch: Copyme</h1>
          <p className="text-sm text-[var(--muted)]">
            A short write-up on how we break down work, validate ideas, and keep Copyme
            moving without getting stuck in &quot;planning forever&quot; mode.
          </p>
        </header>

        <section className="space-y-3 text-sm text-[var(--muted)]">
          <p>
            Copyme started like most products: a simple observation that people struggled to
            turn their ideas into something they could actually test with real users. My
            focus as a co-founder is to keep the product shippable at all times—always
            having a small slice we can put in front of someone.
          </p>
          <p>
            We balance this by keeping a very small core: a clear target user, a small set
            of &quot;must do their job&quot; features, and a backlog that is mostly
            experiments instead of promises.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            1. Slice work into demoable units
          </h2>
          <p>
            Instead of building huge features, we aim for thin vertical slices we can demo:
            a basic flow, a single screen, or a limited path. It&apos;s better to see
            someone use a tiny thing end-to-end than to theorize about a full system.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            2. Talk to users early and often
          </h2>
          <p>
            We try to put new flows in front of a small group early—even if that means using
            staging links or manual onboarding. Every conversation shapes the next
            iteration, especially around wording, friction points, and expectations.
          </p>
        </section>

        <section className="space-y-2 text-sm text-[var(--muted)]">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            3. Keep tech choices aligned with speed
          </h2>
          <p>
            From a technical side, we prefer tools that help us move quickly: modern React
            tooling, simple APIs, and deployment setups that don&apos;t require a full ops
            team. That keeps more of our time on product decisions instead of plumbing.
          </p>
        </section>

        <footer className="border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
          <p>
            This is a lightweight summary rather than a full case study. If you&apos;d like
            to hear more about how we work at Copyme,{" "}
            <Link href="#contact" className="font-semibold text-[var(--accent)]">
              send me a message
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


