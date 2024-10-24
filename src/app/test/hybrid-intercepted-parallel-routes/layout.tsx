import Link from "next/link";

export default function Layout({
  children,
  bar
}: {
  children: React.ReactNode;
  bar: React.ReactNode;
}) {
  return (
    <div>
      <nav className="space-x-md text-accent">
        <Link href="/test/hybrid-intercepted-parallel-routes/foo">Foo</Link>
      </nav>

      {bar}
      {children}
    </div>
  );
}
