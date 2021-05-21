import { postPie } from "./postPie";
import fetchMock from "fetch-mock";

describe("postPie", () => {
  
  beforeEach(() => {
    fetchMock.mock("*", 200);
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it("should call the correct url and method", async () => {
    await postPie();

    expect(
      fetchMock.called("https://www.thebestpies.com/orderpie", "POST")
    ).toBeTruthy();
  });
  
  it("sends the order details", async () => {
    const order = {
      firstName: "John",
      lastName: "Smith",
      pieType: "Apple", 
      quantity: 3
    }
  
    await postPie(order);
  
    const { body } = fetchMock.lastOptions("https://www.thebestpies.com/orderpie");
  
    expect(body).toMatch(JSON.stringify(order));
  });
});
