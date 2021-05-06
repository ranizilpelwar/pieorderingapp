import { pieOrderSchema } from "./pieOrderSchema";

describe("pieType", () => {

  test("accepts a string", async () => {
    const order = {
      pieType: "Apple"
    };
    const result = await pieOrderSchema
      .validateAt("pieType", order)
      .catch((e) => e);
  
    expect(result).toEqual("Apple");
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
  test("accepts a number", async () => {
    const order = {
      quantity: 1
    };
    const result = await pieOrderSchema
      .validateAt("quantity", order)
      .catch((e) => e);
  
    expect(result).toEqual(1);
  });

  test("is required", async () => {
    const order = {};
  
    const result = await pieOrderSchema
      .validateAt("quantity", order)
      .catch((e) => e);
  
    expect(result.message).toMatch(/required/i);
  }); 

  test("should not accept negative numbers", async () => {
    const order = {
      quantity: -1
    };

    const result = await pieOrderSchema
      .validateAt("quantity", order)
      .catch((e) => e);

    expect(result.message).toMatch(/positive/i);
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