"use client";
import { useState } from "react";
import { projects } from "@/data/site";
import { ProjectEntry } from "./Editorial";
export default function Archive() {
  const [filter, setFilter] = useState("all");
  const filtered = projects.filter(
    (p) => filter === "all" || p.tags.includes(filter),
  );
  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label="Filter research by conceptual thread"
      >
        {["all", "perception", "security", "language", "systems", "sound"].map(
          (tag) => (
            <button
              key={tag}
              aria-pressed={tag === filter}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ),
        )}
      </div>
      <div aria-live="polite">
        <span className="sr-only">{filtered.length} research entries</span>
        {filtered.map((p) => (
          <ProjectEntry key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>
    </>
  );
}
