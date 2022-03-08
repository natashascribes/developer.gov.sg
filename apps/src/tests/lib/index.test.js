import assert from "assert";
import { hasErrors, emailRegex } from "../../lib";

describe("lib tests", function() {
  describe("hasErrors", function() {
    it("returns false for an empty errors object", function() {
      let hasError = hasErrors({ title: "", description: "", another: null });
      assert.strictEqual(hasError, false);
      let hasError1 = hasErrors({});
      assert.strictEqual(hasError1, false);
    });
    it("returns true for non-empty errors object", function() {
      let hasError = hasErrors({ title: 123, description: null, another: "" });
      assert.strictEqual(hasError, true);
    });
  });
  describe("email regex tests", function() {
    it("alows abc@def.gov.sg", function() {
      assert.strictEqual("abc@def.gov.sg".search(emailRegex), 0);
    });
    it("allows abc@gov.sg", function() {
      assert.strictEqual("abc@gov.sg".search(emailRegex), 0);
    });
    it("does not allow abc@.gov.sg", function() {
      assert.strictEqual("abc@.gov.sg".search(emailRegex), -1);
    });
    it("does not allow abc@1gov.sg", function() {
      assert.strictEqual("abc@1gov.sg".search(emailRegex), -1);
    });
    it("does not allow abc@def.123.sg", function() {
      assert.strictEqual("abc@def.123.sg".search(emailRegex), -1);
    });
    it("does not allow @gov.sg", function() {
      assert.strictEqual("@gov.sg".search(emailRegex), -1);
    });
  });
});
