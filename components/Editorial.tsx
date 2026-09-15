import Link from "next/link";
import { Project, site } from "@/data/site";
export function PageHeading({
  index,
  title,
  note,
  children,
}: {
  index: string;
  title: string;
  note: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-heading">
      <div className="eyebrow">
        {index} / {note}
      </div>
      <h1>
        {title}
        <span className="accent-dot">.</span>
      </h1>
      {children && <div className="page-intro">{children}</div>}
    </header>
  );
}
export function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link className="project-entry group" href={`/research/${project.slug}/`}>
      <span className="entry-number">0{index + 1}</span>
      <div>
        <div className="eyebrow">{project.category}</div>
        <h3>{project.shortTitle}</h3>
        <p>{project.description}</p>
        <span className="status">{project.status}</span>
      </div>
      <span className={`mini-signal motif-${index}`} aria-hidden="true">
        {index === 2 ? "a → a′" : "∿∿∿"}
      </span>
      <span className="entry-arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>signals are never merely signals.</p>
      <div>
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href={site.links.GitHub}>GitHub ↗</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function Resources({ resources }: { resources: Project["resources"] }) {
  return (
    <section className="resources">
      <h2>Materials</h2>
      <p className="muted">
        Links will appear here as materials become available.
      </p>
      <div>
        {resources.map((resource) =>
          resource.url ? (
            <a key={resource.label} href={resource.url}>
              {resource.label} ↗
            </a>
          ) : (
            <span key={resource.label}>
              {resource.label}
              <small>Not yet available</small>
            </span>
          ),
        )}
      </div>
    </section>
  );
}
