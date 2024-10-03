import { Heading } from "@/tw-styled/ui";

export const Headings = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Heading text="Heading h1" />
        <Heading
          as="h2"
          text="Heading h2"
        />
        <Heading
          as="h3"
          text="Heading h3"
        />
        <Heading
          as="h4"
          text="Heading h4"
        />
        <Heading
          as="h5"
          text="Heading h5"
        />
        <Heading
          as="h6"
          text="Heading h6"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Heading
          as="h1"
          text="Heading With Children"
          style={{
            parentWrapper: {
              border: "sm",
              padding: "md",
              spaceY: "sm"
            },
            heading: {
              border: "sm"
            },
            childrenWrapper: {
              border: "sm",
              padding: "sm"
            }
          }}
        >
          im the children
        </Heading>
      </div>
    </div>
  );
};
