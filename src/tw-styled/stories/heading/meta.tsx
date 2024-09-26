import { Heading } from "@/tw-styled/components";
import { Meta } from "@storybook/react";

const headingMeta = {
  component: Heading,
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    },
    children: {
      options: ["one", "two"],
      mapping: {
        two: [<p>Child One</p>, <p>Child Two</p>],
        one: [<p>Child One</p>]
      }
    }
  }
} satisfies Meta<typeof Heading>;

export default headingMeta;
