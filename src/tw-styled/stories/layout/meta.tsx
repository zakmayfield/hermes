import { Layout } from "@/tw-styled/components";
import { Meta } from "@storybook/react";

const layoutMeta = {
  component: Layout,
  argTypes: {
    children: {
      options: ["one", "two", "three"],
      mapping: {
        one: [<div className="border rounded p-2">Content One</div>],
        two: [
          <div className="border rounded p-2">Content One</div>,
          <div className="border rounded p-2">Content Two</div>
        ],
        three: [
          <div className="border rounded p-2">Content One</div>,
          <div className="border rounded p-2 flex-grow">Content Two</div>,
          <div className="border rounded p-2">Content Three</div>,
          <div className="border rounded p-2 flex-grow">Content Four</div>
        ]
      }
    }
  }
} satisfies Meta<typeof Layout>;

export default layoutMeta;
