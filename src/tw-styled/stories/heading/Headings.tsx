import { Heading } from "@/tw-styled/components";

export const Headings = () => {
  return (
    <div className="flex flex-col gap-3">
      <Heading>Heading h1</Heading>
      <Heading as="h2">Heading h2</Heading>
      <Heading as="h3">Heading h3</Heading>
      <Heading as="h4">Heading h4</Heading>
      <Heading as="h5">Heading h5</Heading>
      <Heading as="h6">Heading h6</Heading>
    </div>
  );
};
