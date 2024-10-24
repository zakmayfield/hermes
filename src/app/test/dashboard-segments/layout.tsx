import Link from "next/link";

export default function Layout({
  children,
  dashOne,
  dashTwo
}: {
  children: React.ReactNode;
  dashOne: React.ReactNode;
  dashTwo: React.ReactNode;
}) {
  const isTrue = true;
  const dash = isTrue ? dashOne : dashTwo;

  return (
    <div>
      <p>Dashboard Segments Layout</p>

      <nav>
        <Link
          href="/test/dashboard-segments/shared-dash-route"
          className="text-accent"
        >
          Shared Dash Route
        </Link>
      </nav>

      {/* 
          Since @dashOne and @dashTwo are not actually segments, they share the same URL path. This means 
          that `/dashboard-segments/@dashOne/foo` & `/dashboard-segments/@dashTwo/foo` create two `/foo` segments on 
          the `/dashboard-segment` route, which intuitively errors.

          In order to create segments within a parallel routes, i.e. `/.../@dashOne/foo`, the segment must be unique, i.e. `/.../@dashTwo/bar`

          In order to configure logic that states @dashOne can render a route and @dashTwo cannot relies on using 
          a sibling route *outside* of the parallel routes:

          dashboard-segments/
            - controlled-route/
            - @dashOne/
            - @dashTwo/

          Then within the `/.../controlled-route/page.tsx` file you can perform a logical check and redirect based on a condition, for example,
          if you a controlling whether `@dashTwo` can render the `/dashboard/manage-users` route, you can perorm a logical check within `/manage-users/page.tsx`
          to check if the user role is "USER" and redirect if that condition is met, otherwise, "ADMIN" and "SUPER" users are able to successfully navigate
          to `/dashboard-segments/controlled-route`

          This logic is pretty much identical to server-side auth redirection (no middleware), i.e. `!isAuth && redirect("/sign-in")`

          Additionally, {children} MUST be rendered alongside the @parallelRoute, because any routes nested within `/dashboard-segments` are treated as `children`
          and therefore will not render if children is not rendered. This means additional considerations are required to ensure that there are no 
          accidental children renders
      */}
      {children}
      {dash}
    </div>
  );
}
