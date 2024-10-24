import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="space-x-md text-accent">
        <Link href="/test/intercepting-routes/foo">Foo</Link>
        <Link href="/test/intercepting-routes/bar">Bar</Link>
      </nav>
      {children}
    </div>
  );
}
