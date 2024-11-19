import Link from "next/link";
import notfound from "@/assets/notfound.png";
import Image from "next/image";
import { Box, Heading, Text } from "@/ui";

export default function NotFound() {
  return (
    <Box style={{ display: "flex-col", flexAlign: "center", gap: "lg" }}>
      <Box
        style={{
          maxWidth: "sm",
          backgroundColor: "primary",
          borderRadius: "lg"
        }}
      >
        <Image
          src={notfound}
          alt="not found illustration"
          placeholder="blur"
          priority
        />
      </Box>

      <Box
        style={{
          display: "flex-col",
          flexJustify: "center"
        }}
      >
        <Box
          style={{
            padding: "lg",
            borderRadius: "lg",
            backgroundColor: "primary",
            display: "flex-col"
          }}
        >
          <Heading text="404 Not Found" />

          <Text style={{ className: "text-foreground/60" }}>
            We couldn&apos;t find that requested resource
          </Text>

          <Link
            href="/dashboard"
            className="p-xs border rounded-md text-center mt-lg"
          >
            Head back home
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
