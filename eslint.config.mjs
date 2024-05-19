import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: { "no-console": ["error", { allow: ["error"] }] },
  },
  pluginJs.configs.recommended,
];
