# Deno missing `MessageChannel` on `worker_threads`

Node exports the `MessageChannel` class from the `worker_threads` module. In deno the property exists on the moduel record, but the value is `undefined`.

## Steps to reproduce

1. Clone this repo
2. Run `deno run -A foo.js`

## Error

```sh
error: Uncaught TypeError: worker_threads2.MessageChannel is not a constructor
    at startWorkerThreadService (file:///project/node_modules/.deno/esbuild@0.17.18/node_modules/esbuild/lib/main.js:2238:48)
    at Module.transformSync (file:///project/node_modules/.deno/esbuild@0.17.18/node_modules/esbuild/lib/main.js:2040:29)
    at file:///project/foo.js:3:21
```
