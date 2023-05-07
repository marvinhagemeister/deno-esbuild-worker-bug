import * as esbuild from "esbuild";

const res = esbuild.transformSync("console.log('it works')");
console.log(res);
