import { PageHeading } from "@/components/Editorial";
import SignalCanvas from "@/components/SignalCanvas";
import { tracks } from "@/data/site";
export const metadata = {
  title: "Listen",
  description:
    "A listening room for future music, sketches, and notes on harmony, timbre, and rhythm.",
};
export default function Music() {
  return (
    <div className="music-page">
      <div className="page-shell">
        <PageHeading
          index="04"
          title="A listening room"
          note="SOUND / SPACE / TIME"
        >
          <p>
            Another way of thinking.
            <br />
            Through timbre, tension, repetition, and release.
          </p>
        </PageHeading>
        <SignalCanvas compact />
        <div className="music-archives">
          {(["Track", "Sketch"] as const).map((kind) => (
            <section key={kind}>
              <span className="eyebrow">
                {kind === "Track"
                  ? "SIDE A / FINISHED WORK"
                  : "SIDE B / UNFINISHED IDEAS"}
              </span>
              <h2>
                {kind}s
                <span className="count">
                  {String(
                    tracks.filter((t) => t.kind === kind).length,
                  ).padStart(2, "0")}
                </span>
              </h2>
              {tracks
                .filter((t) => t.kind === kind)
                .map((t) => (
                  <article key={t.title}>
                    <h3>{t.title}</h3>
                    <p>{t.note}</p>
                    <audio
                      controls
                      preload="none"
                      aria-label={t.title}
                      src={t.src}
                    />
                  </article>
                ))}
              {!tracks.some((t) => t.kind === kind) && (
                <p>
                  {kind === "Track"
                    ? "No released tracks here yet."
                    : "A space for ideas before they settle into songs."}
                </p>
              )}
            </section>
          ))}
        </div>
        <section className="sound-notes">
          <span className="eyebrow">SOUND NOTES / AREAS OF EXPLORATION</span>
          <h2>Listening for the edges.</h2>
          <div>
            {[
              "Harmony & chord structures",
              "Synthesizers & timbre",
              "Odd meter & rhythmic experiments",
              "Guitar voicings",
              "Electronic & experimental pop",
              "Indie / emo rock",
            ].map((note, i) => (
              <p key={note}>
                <span>0{i + 1}</span>
                {note}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
