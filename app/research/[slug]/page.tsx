import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/site";
import { Resources } from "@/components/Editorial";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p?.title, description: p?.description };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <article className="page-shell detail">
      <Link className="eyebrow back-link" href="/research/">
        ← RESEARCH INDEX
      </Link>
      <header>
        <span className="eyebrow">{p.category}</span>
        <h1>{p.title}</h1>
        <span className="status">{p.status}</span>
        <p className="detail-deck">{p.description}</p>
      </header>
      <div
        className="concept-diagram"
        aria-label="Signal becomes representation, then interpretation"
      >
        <span>Signal</span>
        <b aria-hidden="true">→</b>
        <span>Representation</span>
        <b aria-hidden="true">→</b>
        <span>Interpretation</span>
      </div>
      {p.sections.map((section, i) => (
        <section className="article-section" key={section.title}>
          <span className="eyebrow">0{i + 1}</span>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <Resources resources={p.resources} />
      <Link className="text-link" href="/research/">
        Return to the research index ↗
      </Link>
    </article>
  );
}
