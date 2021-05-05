import { OrderPie } from "./OrderPie";
import { render, fireEvent } from '@testing-library/react';
import { jest } from "@jest/globals";

test('should trigger order action', async () => {
  const FakeForm = ({ onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  };
  const spy = jest.fn();
  const FakeSummary = () => <div>Order Summary</div>;

  const { getByText } = render(
    <OrderPie
      OrderDetailsForm={FakeForm}
      OrderSummaryPage={FakeSummary}
      orderPieAction={spy}
    />
  );
  fireEvent.submit(getByText("Submit"));

  expect(spy).toHaveBeenCalled();
});

test('should show order summary after form submission', async () => {
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


