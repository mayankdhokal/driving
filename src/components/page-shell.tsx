import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, lead, children }: PageShellProps) {
  return (
    <main id="main" className="flex-1 bg-paper pt-24">
      <header className="mx-auto max-w-6xl px-4 pb-10 pt-8">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-deep">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="display mt-2 max-w-3xl text-3xl font-bold sm:text-4xl md:text-6xl">{title}</h1>
        {lead ? <p className="mt-4 max-w-2xl text-lg text-muted">{lead}</p> : null}
      </header>
      <div className="mx-auto max-w-6xl px-4 pb-20">{children}</div>
    </main>
  );
}
