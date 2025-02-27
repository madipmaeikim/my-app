import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/no-unresolved": "error",
      "import/no-unused-modules": "warn",
      "no-unused-vars": "warn",
    },
  },
];
