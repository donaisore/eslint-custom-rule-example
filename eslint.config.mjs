import globals from "globals";
import pluginJs from "@eslint/js";
// import * as myplugin from "./eslint-plugin-custom-rules/index.js";
import { rules } from "./eslint-plugin-custom-rules/index.js";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    // plugins: { myplugin },
    plugins: { "custom-rules": { rules } },
    rules: {
      "no-console": ["error", { allow: ["error"] }],
      "custom-rules/no-variable-hoge": "error",
    },
  },
  pluginJs.configs.recommended,
];
