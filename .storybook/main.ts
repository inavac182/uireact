import type { StorybookConfig } from '@storybook/react-webpack5';

import { Options } from '@storybook/core-webpack';
import { join, dirname } from 'path';
import { Configuration, RuleSetRule } from 'webpack';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../packages/**/docs/*.stories.@(ts|tsx|mdx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/preset-create-react-app'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: (config: any) => {
    const tsRule: RuleSetRule = {
      test: /\.(ts?|tsx?)$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    };

    return {
      ...config,
      module: { ...config.module, rules: [...(config.module?.rules || []), tsRule] },
    };
  },
};
export default config;
