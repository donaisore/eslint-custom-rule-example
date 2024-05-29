import globals from "globals";
import pluginJs from "@eslint/js";
import { rules } from "./eslint-plugin-custom-rules/index.js";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    files: ["main.js"],
    plugins: { "custom-rules": { rules } },
    rules: {
      "custom-rules/no-variable-hoge": "error",
      // これでは `const { hoge, fuga } = { hoge: 1, fuga: 2 };` に対応できない
      // "no-restricted-syntax": [
      //   "error",
      //   {
      //     selector: "VariableDeclarator[id.name='hoge']",
      //     message: "hoge は使うな！",
      //   },
      // ],
    },
  },
  pluginJs.configs.recommended,
];
