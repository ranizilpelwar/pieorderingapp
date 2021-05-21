import { pieOrderSchema } from "./pieOrderSchema";

describe("pieOrderSchema", () => {

  describe("pieType", () => {
    it("should accept a string", async () => {
      const input = "Apple";
      const order = {
        pieType: input
      };
      const result = await pieOrderSchema
        .validateAt("pieType", order)
        .catch((e) => e);

      expect(result).toEqual(input);
    });

    it("is required", async () => {
      const order = {};

      const result = await pieOrderSchema
        .validateAt("pieType", order)
        .catch((e) => e);

      expect(result.message).toMatch(/required/i);
    });
  });
  
  describe("quantity", () => {
    it("should accept a number", async () => {
      const input = 1;
      const order = {
        quantity: input
      };
      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);
  
      expect(result).toEqual(input);
    });
  
    it("is required", async () => {
      const order = {};
  
      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);
  
      expect(result.message).toMatch(/required/i);
    });

    it("should not accept negative numbers", async () => {
      const order = {
        quantity: -1
      };
  
      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);
  
      expect(result.message).toMatch(/positive/i);
    });

    it("should not accept letters", async () => {
      const order = {
        quantity: "3e"
      };

      const result = await pieOrderSchema
        .validateAt("quantity", order)
        .catch((e) => e);

      expect(result.message).toMatch(/required/i);
    });
  });

  describe("customizations", () => {
    it("is not required", async () => {
      const order = {};

      const result = await pieOrderSchema
        .validateAt("customizations", order)
        .catch((e) => e);

      expect(result).not.toBeDefined();
    }); 

    it("should accept a string", async () => {
      const input = "gluten-free crust";
      const order = {
        customizations: input
      };
  
      const result = await pieOrderSchema
        .validateAt("customizations", order)
        .catch((e) => e);
  
      expect(result).toEqual(input);
    }); 
  });
});