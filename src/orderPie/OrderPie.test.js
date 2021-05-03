import { OrderPie } from "./OrderPie";
import { render, fireEvent } from '@testing-library/react';
import { jest } from "@jest/globals";

test('should redirect on form submission', async () => {
  const FakeForm = ({ usersFirstName, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <p>{usersFirstName}</p>
        <button type="submit">Submit</button>
      </form>
    );
  };
  const spy = jest.fn();

  const { getByText } = render(
    <OrderPie
      OrderDetailsForm={FakeForm}
      redirectToSummary={spy}
    />
  );
  
  fireEvent.submit(getByText("Submit"));

  expect(spy).toHaveBeenCalled();
});

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

  const { getByText } = render(
    <OrderPie
      OrderDetailsForm={FakeForm}
      orderPieAction={spy}
    />
  );
  
  fireEvent.submit(getByText("Submit"));

  expect(spy).toHaveBeenCalled();
});

