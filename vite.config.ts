import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/formula1website/", // VERY IMPORTANT FOR GITHUB PAGES
});
