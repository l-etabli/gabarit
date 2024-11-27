import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true, // Clean the dist folder before building
  dts: true, // Generate .d.ts files
  bundle: false, // Disable bundling, to keep original source file organization
});
