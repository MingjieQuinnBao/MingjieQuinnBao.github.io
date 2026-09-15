import type { Metadata } from "next";
import { PageHeading } from "@/components/Editorial";
import Archive from "@/components/Archive";
export const metadata: Metadata = {
  title: "Research",
  description:
    "Research across trustworthy AI, audio security, human perception, language, and data systems.",
};
export default function Research() {
  return (
    <div className="page-shell">
      <PageHeading
        index="01"
        title="Research"
        note="QUESTIONS / METHODS / GAPS"
      >
        <p>
          I am interested in how intelligent systems fail, adapt, communicate,
          and interact with human perception.
        </p>
      </PageHeading>
      <div className="research-preface">
        <span className="eyebrow">TRUSTWORTHY AI & AI SECURITY</span>
        <p>
          Model evaluation, adversarial robustness, multimodal model security,
          and AI system reliability. A recurring question: what gets lost
          between a representation and the world it is meant to describe?
        </p>
      </div>
      <Archive />
      <section id="data" className="split-section">
        <div>
          <span className="eyebrow">A GROWING RESEARCH DIRECTION</span>
          <h2>
            Data, and the systems
            <br />
            that hold it.
          </h2>
        </div>
        <div>
          <p>
            I am increasingly interested in database systems and data
            management, especially the systems foundations that make intelligent
            applications reliable, scalable, and inspectable.
          </p>
          <ul className="plain-list">
            <li>Query processing & data management</li>
            <li>Intelligent data systems</li>
            <li>Database support for AI applications</li>
          </ul>
          <span className="status">
            Growing direction / No projects listed yet
          </span>
        </div>
      </section>
    </div>
  );
}
