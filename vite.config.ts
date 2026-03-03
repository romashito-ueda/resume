import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: https://<user>.github.io/<repo>/
// repo name = resume
export default defineConfig({
  plugins: [react()],
  base: "/resume/",
});
