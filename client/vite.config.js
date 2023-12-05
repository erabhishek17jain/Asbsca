import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SERVER_DOMAIN': JSON.stringify(env.SERVER_DOMAIN),
    },
  };
});
