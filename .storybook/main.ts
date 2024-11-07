import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
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
