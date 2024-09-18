import Link from "next/link";

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link href="/test-route">Test Home</Link>
        <Link href="/test-route/containers">Containers</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
