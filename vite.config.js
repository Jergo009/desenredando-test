import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  //base: "/desenredando-test",
  base: "/",
  plugins: [react()],
});
