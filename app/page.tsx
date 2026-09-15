import Link from "next/link";
import SignalCanvas from "@/components/SignalCanvas";
import Reveal from "@/components/Reveal";
import { ProjectEntry } from "@/components/Editorial";
import { projects } from "@/data/site";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-top eyebrow">
          <span>AN INDEPENDENT INDEX OF THOUGHT & PRACTICE</span>
          <span>WUHAN, CN / 30.59° N</span>
        </div>
        <div className="hero-title">
          <h1>
            Mingjie
            <br />
            <span>
              Quinn Bao<span className="name-dot">.</span>
            </span>
          </h1>
          <div className="hero-identity">
            <span lang="zh">鲍明颉</span>
            <p>
              Researcher. Builder.
              <br />
              Writer. Listener.
            </p>
            <span className="eyebrow">
              COMPUTER SCIENCE
              <br />
              WUHAN UNIVERSITY
            </span>
          </div>
        </div>
        <div className="hero-lower">
          <div className="hero-thought">
            <span className="eyebrow">[ BETWEEN REPRESENTATIONS ]</span>
            <p>
              I study how machines hear, read, infer, communicate, and{" "}
              <em>drift away</em> from human expectation.
            </p>
            <Link className="text-link" href="/about/">
              A little context <span>↗</span>
            </Link>
          </div>
          <SignalCanvas />
        </div>
        <div className="hero-foot eyebrow">
          <span>RESEARCH / SYSTEMS / LANGUAGE / SOUND</span>
          <a href="#current">SCROLL TO TUNE IN ↓</a>
        </div>
      </section>
      <section id="current" className="section-shell">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>
              Current signals<span className="small-star">✳</span>
            </h2>
            <p>
              Different questions.
              <br />
              Overlapping frequencies.
            </p>
          </div>
        </Reveal>
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectEntry project={project} index={index} />
          </Reveal>
        ))}
        <div className="other-signals">
          <Link href="/research/#data">
            <span className="eyebrow">04 / DATA</span>
            <h3>
              The systems beneath
              <br />
              intelligent systems.
            </h3>
            <span>Database systems · Growing direction ↗</span>
          </Link>
          <Link href="/build/">
            <span className="eyebrow">05 / BUILD</span>
            <h3>
              Ideas, made
              <br />
              executable.
            </h3>
            <span>Software & systems · Working areas ↗</span>
          </Link>
        </div>
      </section>
      <section className="crossroads">
        <span className="eyebrow">02 / ELSEWHERE IN THE SAME WORLD</span>
        <p>
          Sometimes a question becomes a paper.
          <br />
          Sometimes a sentence.
          <br />
          <em>Sometimes a sound.</em>
        </p>
        <div>
          <Link href="/writing/">Read the margins ↗</Link>
          <Link href="/music/">Enter the listening room ↗</Link>
        </div>
        <span className="crosshair" aria-hidden="true">
          ＋
        </span>
      </section>
    </>
  );
}
