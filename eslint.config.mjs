import antfu from "@antfu/eslint-config";

export default antfu(
  {
    ignores: [
      "tsconfig.json",
      "tailwind.config.mjs",
      "postcss.config.mjs",
      "**/eslint.config.mjs",
      "next.config.ts",
      "**/package.json",
      "**/tailwind.config.ts",
    ],
  },
  {
    files: ["./src/**/*.tsx", "./app/**/*.tsx"],
  },
  {
    rules: {
      "antfu/top-level-function": "off",
      "style/quotes": ["error", "double"],
      "style/semi": ["error", "always"],
    },
  }
);
