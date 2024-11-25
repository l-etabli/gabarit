import { describe, expect, it } from "bun:test";
import { add } from "./add";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
