"use client";
import { Navbar } from "./Navbar";

type NavbarDemoProps = {
  childrenOptions?: "a" | "b";
};

export const NavbarDemo = (props: NavbarDemoProps) => {
  const { childrenOptions = "a" } = props;

  const options = {
    a: [
      <a
        href="#"
        key={0}
      >
        Link One
      </a>,
      <a
        href="#"
        key={1}
      >
        Link Two
      </a>
    ],
    b: [
      <a
        href="#"
        key={0}
      >
        Link One
      </a>,
      <a
        href="#"
        key={1}
      >
        Link Two
      </a>,
      <a
        href="#"
        key={2}
      >
        Link Three
      </a>
    ]
  };

  return (
    <div className="demo min-h-screen space-y-lg">
      <Navbar
        style={{
          nav: { border: "sm", borderRadius: "lg", display: "flex-row", gap: "md" }
        }}
      >
        {options[childrenOptions]}
      </Navbar>
    </div>
  );
};
