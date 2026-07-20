import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  dts: false, // TypeScript 7 generates declarations via tsconfig.build.json
  bundle: true,
  outExtension: ({ format }) => {
    if (format === "esm") return { js: ".js" };
    if (format === "cjs") return { js: ".cjs" };
    return { js: ".js" };
  },
});
