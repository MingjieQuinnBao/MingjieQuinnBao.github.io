"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";
export default function SiteHeader() {
  const path = usePathname();
  const signal = (mode: string) =>
    window.dispatchEvent(new CustomEvent("signal-mode", { detail: mode }));
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Between Signals — home">
        <span className="brand-mark" aria-hidden="true">
          [∿]
        </span>{" "}
        BETWEEN SIGNALS<span className="edition"> / MQB</span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map(([slug, label], i) => (
          <Link
            key={slug}
            href={`/${slug}/`}
            aria-current={path.startsWith(`/${slug}`) ? "page" : undefined}
            onMouseEnter={() => signal(slug)}
            onFocus={() => signal(slug)}
            onMouseLeave={() => signal("research")}
            onBlur={() => signal("research")}
          >
            <sup>0{i + 1}</sup>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
