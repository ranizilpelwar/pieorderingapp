import { pieOrderSchema } from "./pieOrderSchema";

describe("pieOrderSchema", () => {
  describe("pieType", () => {
    test("allow valid value", async () => {
      const order = {
        pieType: "Apple"
      };
      const result = await pieOrderSchema
        .validateAt("pieType", order)
        .catch((e) => e);

      expect(result).toEqual("Apple");
    });

    test("shows error for invalid value", async () => {
      const order = {
        pieType: {}
      };

      const result = await pieOrderSchema
        .validateAt("pieType", order)
        .catch((e) => e);

      expect(result.message).toMatch(/string/i);
    });

    test("is required", async () => {
      const order = {};

      const result = await pieOrderSchema
        .validateAt("pieType", order)
        .catch((e) => e);

      expect(result.message).toMatch(/required/i);
    }); 
  });

  describe("quantity", () => {
    test("allow valid value", async () => {
      const order = {
        quantity: 1
      };
      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);

      expect(result).toEqual(1);
    });

    test("shows error for invalid value", async () => {
      const order = {
        quantity: {}
      };

      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);

      expect(result.message).toMatch(/number/i);
    });

    test("is required", async () => {
      const order = {};

      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);

      expect(result.message).toMatch(/required/i);
    }); 
  });

  describe("customizations", () => {
    test("is not required", async () => {
      const order = {};

      const result = await pieOrderSchema
        .validateAt("customizations", order)
        .catch((e) => e);

      expect(result).not.toBeDefined();
    });  
   });
});