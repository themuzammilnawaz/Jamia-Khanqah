// @lovable.dev/vite-tanstack-config already includes:
//   TanStack devtools (dev-only), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//   nitro (Cloudflare default target), VITE_* env injection, @ path alias,
//   React/TanStack dedupe, error logger plugins, sandbox detection.
// Do NOT add those plugins manually or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
});
