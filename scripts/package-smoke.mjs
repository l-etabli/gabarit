import assert from "node:assert/strict";
import { createRequire } from "node:module";

const esmPackage = await import("../dist/index.js");
const require = createRequire(import.meta.url);
const commonJsPackage = require("../dist/index.cjs");

assert.equal(esmPackage.add(2, 3), 5);
assert.equal(commonJsPackage.add(2, 3), 5);
