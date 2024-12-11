import { TestServices } from "@/features/TestServices";

export default async function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <TestServices />
    </div>
  );
}
