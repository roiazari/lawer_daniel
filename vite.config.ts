import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// This configuration is specifically for deploying to GitHub Pages.
export default defineConfig(() => ({
  // The 'base' path must be the name of your GitHub repository,
  // with a leading and trailing slash.
  // Based on your screenshot, your repository is 'lawyer-website'.
  base: "/lawyer-website/",

  build: {
    // The output directory is set to 'docs', which is what GitHub Pages
    // is configured to use for deployment.
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