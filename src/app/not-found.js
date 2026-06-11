import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="notfound blueprint">
      <div className="container notfound__inner">
        <p className="eyebrow">404</p>
        <h1 className="display notfound__title">
          Wrong floor<em className="grad-text">.</em>
        </h1>
        <p className="lead">This room doesn’t exist in the building. Let’s get you back to reception.</p>
        <div className="notfound__actions">
          <Link href="/" className="btn btn--primary">
            Back to reception
          </Link>
          <Link href="/services/" className="btn btn--ghost">
            See the directory
          </Link>
        </div>
      </div>
    </section>
  );
}
