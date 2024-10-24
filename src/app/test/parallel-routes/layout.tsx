export default function Layout({
  foo,
  bar
}: {
  foo: React.ReactNode;
  bar: React.ReactNode;
}) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}
