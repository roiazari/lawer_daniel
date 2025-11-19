import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// נא להחליף את 'lawyer-website' בשם מאגר ה-GitHub שלך
const REPO_NAME = "lawyer-website";

export default defineConfig(() => ({
  base: `/${REPO_NAME}/`,
  build: {
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