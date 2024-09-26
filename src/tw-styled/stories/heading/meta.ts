import { Heading } from "@/tw-styled/components";
import { Meta } from "@storybook/react";

const headingMeta = {
  component: Heading,
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  }
} satisfies Meta<typeof Heading>;

export default headingMeta;
