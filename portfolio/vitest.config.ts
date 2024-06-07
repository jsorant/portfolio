import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      provider: "istanbul",
      enabled: true,
      reporter: ["text", "html"],
    },
  },
});
