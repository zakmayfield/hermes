import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    // "../src/tw-styled/**/*.mdx",
    // "../src/tw-styled/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/tw-styled/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/tw-styled/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/ui/components/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }
};
export default config;
