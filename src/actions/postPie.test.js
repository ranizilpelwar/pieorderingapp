import { postPie } from "./postPie";
import fetchMock from "fetch-mock";

describe("postPie", () => {
  beforeEach(() => {
    fetchMock.mock("*", 200);
  });
  afterEach(() => {
    fetchMock.restore();
  });

  test('calls the correct url and method', () => {
    postPie({});

    expect(
      fetchMock.called("https://www.thebestpies.com/orderpie", "POST")
    ).toBeTruthy();
  });

  test('sends the order details', () => {
    const order = {
      firstName: "John",
      lastName: "Smith",
      pieType: "Apple"
    }
    postPie(order);

    const { body } = fetchMock.lastOptions("https://www.thebestpies.com/orderpie");

    expect(body).toMatch(JSON.stringify(order));
  });
});