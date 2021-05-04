import { OrderPie } from "./OrderPie";
import { render, fireEvent } from '@testing-library/react';
import { jest } from "@jest/globals";

test('should trigger order action', async () => {
  const FakeForm = ({ usersFirstName, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <p>{usersFirstName}</p>
        <button type="submit">Submit</button>
      </form>
    );
  };
  const spy = jest.fn();
  const userDetails = { firstName: "John" };
  const FakeSummary = () => <div>Order Summary</div>;

  const { getByText } = render(
    <OrderPie
      OrderDetailsForm={FakeForm}
      OrderSummaryPage={FakeSummary}
      orderPieAction={spy}
      userDetails={userDetails}
    />
  );
  fireEvent.submit(getByText("Submit"));

  expect(spy).toHaveBeenCalled();
});

test('should show order summary after form submission', async () => {
  const FakeForm = ({ usersFirstName, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <p>{usersFirstName}</p>
        <button type="submit">Submit</button>
      </form>
    );
  };
  const FakeSummary = () => <div>Order Summary</div>;
  const userDetails = { firstName: "John" };
  
  const { getByText } = render(
    <OrderPie
      OrderDetailsForm={FakeForm}
      OrderSummaryPage={FakeSummary}
      orderPieAction={() => {}}
      userDetails={userDetails}
    />
  );
  fireEvent.submit(getByText("Submit"));

  expect(getByText("Order Summary")).toBeInTheDocument();
});


