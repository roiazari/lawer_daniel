import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// This configuration is specifically for deploying to GitHub Pages.
export default defineConfig(() => ({
  // The 'base' path must be the name of your GitHub repository.
  base: "/lawyer-website/",

  build: {
    // The output directory MUST be 'docs' for GitHub Pages to find it
    // when deploying from a branch folder.
    outDir: "docs",
    sourcemap: false,
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));