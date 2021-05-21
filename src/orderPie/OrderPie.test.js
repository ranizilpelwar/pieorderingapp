import { OrderPie } from "./OrderPie";
import { render, fireEvent } from '@testing-library/react';
import { jest } from "@jest/globals";

describe("OrderPie", () => {
  it("should trigger order action", async () => {
  //Arrange
  const spy = jest.fn();

  const FakeForm = ({ onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  };
  const FakeSummary = () => <div>Order Summary</div>;
  //Act
  const { getByText } = render(
    <OrderPie
      OrderDetailsForm={FakeForm}
      OrderSummaryPage={FakeSummary}
      orderPieAction={spy}
    />
  );

  fireEvent.submit(getByText("Submit"));

  //Assert
  expect(spy).toHaveBeenCalled();
  });

  it("should show order summary after form submission", async () => {
    const FakeForm = ({ onSubmit }) => {
      return (
        <form onSubmit={onSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
    };
    const FakeSummary = () => <div>Order Summary</div>;
    const { getByText } = render(
      <OrderPie
        OrderDetailsForm={FakeForm}
        OrderSummaryPage={FakeSummary}
        orderPieAction={() => {}}
      />
    );
    
    fireEvent.submit(getByText("Submit"));

    expect(getByText("Order Summary")).toBeInTheDocument();
  });
});