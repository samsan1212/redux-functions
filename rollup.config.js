import packageJson from "./package.json";

// plugins
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const base = {
  input: "src/main.ts",
  plugins: [nodeResolve(), typescript()],
  external: [
    ...Object.keys(packageJson.peerDependencies),
    ...Object.keys(packageJson.dependencies),
  ],
};

export default [
  {
    ...base,
    output: {
      file: packageJson.main,
      format: "cjs",
    },
  },
  {
    ...base,
    output: {
      file: packageJson.module,
      format: "es",
    },
  },
  {
    ...base,
    plugins: [...base.plugins, terser()],
    external: [],
    output: {
      file: "umd/main.js",
      format: "umd",
      name: "ReduxFunctions",
    },
  },
];
