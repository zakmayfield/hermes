import Link from "next/link";
import notfound from "@/assets/notfound.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-lg items-center">
      <div className="max-w-sm bg-theme-primary rounded-lg">
        <Image
          src={notfound}
          alt="not found illustration"
          placeholder="blur"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="p-lg rounded-lg bg-theme-primary flex flex-col">
          <h1>404 Not Found</h1>

          <p className="text-foreground/60">
            We couldn&apos;t find that requested resource
          </p>

          <Link
            href="/dashboard"
            className="p-xs border rounded-md text-center mt-lg"
          >
            Head back home
          </Link>
        </div>
      </div>
    </div>
  );
}
