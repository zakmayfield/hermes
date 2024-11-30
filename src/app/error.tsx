"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-primary border-l-4 border-warning rounded-lg p-lg w-md mx-auto flex flex-col gap-md">
      <div>
        <h2>Something went wrong!</h2>
        <p className="text-foreground/70">{error.message}</p>
      </div>

      <button
        onClick={() => reset()}
        className="btn-ghost"
      >
        Retry
      </button>
    </div>
  );
}
