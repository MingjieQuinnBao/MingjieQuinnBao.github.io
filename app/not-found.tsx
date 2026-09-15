import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page-shell page-heading">
      <span className="eyebrow">404 / SIGNAL NOT FOUND</span>
      <h1>Off frequency.</h1>
      <p>This page is not part of the archive.</p>
      <Link className="text-link" href="/">
        Return to the index ↗
      </Link>
    </div>
  );
}
