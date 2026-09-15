import { PageHeading } from "@/components/Editorial";
import { buildAreas } from "@/data/site";
export const metadata = {
  title: "Build",
  description:
    "Engineering threads across compilers, agent reliability, and applied machine learning.",
};
export default function Build() {
  return (
    <div className="page-shell">
      <PageHeading index="02" title="Build" note="IDEAS → EXECUTION">
        <p>
          A place for systems that turn an idea into something executable,
          inspectable, and useful.
        </p>
      </PageHeading>
      <p className="archive-note">
        Working areas / Individual project records and repositories are being
        prepared.
      </p>
      {buildAreas.map((area, i) => (
        <section className="build-section" key={area.title}>
          <div className="build-label">
            <span className="eyebrow">MODULE_0{i + 1}</span>
            <h2>{area.title}</h2>
            <p className="serif">{area.subtitle}</p>
          </div>
          <div>
            <p>{area.description}</p>
            <ol
              className="dataflow"
              aria-label={`${area.title} conceptual workflow`}
            >
              {area.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="tags">
              {area.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
