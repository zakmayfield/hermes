import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="space-x-md text-accent">
        <Link href="/test">Test</Link>
        <Link href="/test/parallel-routes">Parallel Routes</Link>
        <Link href="/test/intercepting-routes">Intercepting Routes</Link>
        <Link href="/test/hybrid-intercepted-parallel-routes">
          Hybrid Intercepted Parallel Routes
        </Link>
        <Link href="/test/dashboard-segments">Dashboard Segments</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
