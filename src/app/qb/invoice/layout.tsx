export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>invoice</h1>
      {children}
    </div>
  );
}
