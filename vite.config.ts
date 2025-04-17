import { defineConfig } from "vite";

export default defineConfig({
  base: "/ts-game/", // <-- important!
  build: {
    outDir: "dist", // Make sure output is going to the `dist` directory
  },
});
