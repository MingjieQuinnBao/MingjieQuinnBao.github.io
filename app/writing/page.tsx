import { PageHeading } from "@/components/Editorial";
import { writings, writingTopics } from "@/data/site";
export const metadata = {
  title: "Writing",
  description:
    "An evolving archive of notes on computing, language, philosophy, and literature.",
};
export default function Writing() {
  return (
    <div className="page-shell writing-page">
      <PageHeading
        index="03"
        title="In the margins"
        note="NOTES / ESSAYS / FRAGMENTS"
      >
        <p>
          Some things I write are research. Some are notes. Some are simply
          attempts to understand what I am thinking.
        </p>
      </PageHeading>
      <div className="writing-quote">
        <span className="eyebrow">A NOTE ON THIS ARCHIVE</span>
        <p>
          Meaning does not arrive
          <br />
          <em>all at once.</em>
        </p>
        <span className="eyebrow">NEITHER DOES THIS PAGE.</span>
      </div>
      <section className="writing-index">
        <div className="section-heading">
          <h2>Open threads</h2>
          <span className="eyebrow">EDITORIAL PLAN / TEXTS TO COME</span>
        </div>
        {writingTopics.map((topic, i) => (
          <article className="writing-row" key={topic.title}>
            <span className="entry-number">0{i + 1}</span>
            <div>
              <span className="eyebrow">{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </div>
            <span className="status">Planned thread</span>
          </article>
        ))}
        {writings.map((entry) => (
          <article className="writing-row" key={entry.title}>
            <div>
              <span className="eyebrow">
                {entry.category} / {entry.status}
                {entry.date && ` / ${entry.date}`}
                {entry.minutes && ` / ${entry.minutes} min`}
              </span>
              <h3>
                {entry.href ? (
                  <a href={entry.href}>{entry.title} ↗</a>
                ) : (
                  entry.title
                )}
              </h3>
              <p>{entry.tags.join(" / ")}</p>
            </div>
          </article>
        ))}
        <p className="archive-note">
          No essays have been added yet. These threads describe the shape of the
          archive to come.
        </p>
      </section>
    </div>
  );
}
