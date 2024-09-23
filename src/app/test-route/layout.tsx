import { Flex } from "@/shared/components/containers";
import Link from "next/link";

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-slate-900">
        <Flex style={{ padding: "lg" }}>
          <Link href="/test-route">Test Home</Link>
        </Flex>
      </nav>

      <div>{children}</div>
    </div>
  );
}
