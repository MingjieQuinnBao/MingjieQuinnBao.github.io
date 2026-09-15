import { PageHeading } from "@/components/Editorial";
import { site } from "@/data/site";
export const metadata = {
  title: "About",
  description:
    "Mingjie Quinn Bao, computer science undergraduate at Wuhan University. Researcher, builder, writer, and music maker.",
};
export default function About() {
  return (
    <div className="page-shell about-page">
      <PageHeading
        index="05"
        title="A little context"
        note="THE PERSON BETWEEN THE SIGNALS"
      />
      <section className="about-layout">
        <aside>
          <div className="monogram" aria-hidden="true">
            M<span>Q</span>B<small>BETWEEN SIGNALS</small>
          </div>
          <span className="eyebrow">
            WUHAN, CHINA
            <br />
            RESEARCH / PRACTICE / CURIOSITY
          </span>
        </aside>
        <div className="bio">
          <h2>
            Mingjie Quinn Bao <span lang="zh">鲍明颉</span>
          </h2>
          <p>
            I am a computer science undergraduate at Wuhan University. My work
            moves across trustworthy AI, security, intelligent systems,
            language, and data systems. I am especially interested in places
            where machine representations diverge from human perception,
            expectation, or interpretation.
          </p>
          <p>
            Outside research, I make music, read philosophy and literature, and
            write about ideas that refuse to remain inside a single discipline.
          </p>
          <div className="education">
            <span className="eyebrow">EDUCATION / 2023–2027</span>
            <h3>Wuhan University</h3>
            <p>B.Eng. in Computer Science and Technology</p>
          </div>
          <div className="contact">
            <span className="eyebrow">FIND ME ELSEWHERE</span>
            {Object.entries(site.links)
              .filter(([, url]) => url)
              .map(([label, url]) => (
                <a key={label} href={url}>
                  {label} ↗
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
