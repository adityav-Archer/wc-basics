import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import html from "@web/rollup-plugin-html";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
const input = ["src/index.js"];
export default [
  {
    input: ["./wc-basics.js"],
    plugins: [
      nodeResolve(),
      babel(),
      terser(),
    ],
    output: [
      {
        dir: "dist",
        preserveModules: true,
        preserveModulesRoot: "src",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
];
