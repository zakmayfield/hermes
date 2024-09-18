import { Flex } from "@/shared/components/containers";
import Link from "next/link";

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-slate-900">
        <Flex padding="lg">
          <Link href="/test-route">Test Home</Link>
          <Link href="/test-route/containers">Containers</Link>
          <Link href="/test-route/buttons">Buttons</Link>
          <Link href="/test-route/loading">Loading</Link>
          <Link href="/test-route/form">Form</Link>
        </Flex>
      </nav>

      <div>{children}</div>
    </div>
  );
}
