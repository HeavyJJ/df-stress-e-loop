import test from "node:test";
import assert from "node:assert/strict";
import { dbl } from "../src/calc.js";
test("spins forever before asserting", () => {
  while (true) { /* infinite loop: never reaches the assertion */ }
  assert.equal(dbl(2), 4);
});
