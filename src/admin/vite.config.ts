import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      port: 5174, // Change from default 5173 to avoid port conflict
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
