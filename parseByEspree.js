import fs from "fs";
import * as espree from "espree";

const code = fs.readFileSync("./main.js", "utf8");
// const code = fs.readFileSync("./foo.jsx", "utf8");

// ASTにパースする
const ast = espree.parse(code, {
  ecmaVersion: 6,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
});

// ASTを result.json に出力する
fs.writeFileSync("result.json", JSON.stringify(ast, null, 2), "utf8");
