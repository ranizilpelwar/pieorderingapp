import { SimplePieForm } from "./SimplePieForm";
import { render, fireEvent, waitFor } from '@testing-library/react';
import { jest } from "@jest/globals";

test("show users first name on form", () => {
  const { getByText } = render(
    <SimplePieForm
      usersFirstName="John"
      onSubmit={() => {}}
    />
  );

  expect(getByText("John", { exact: false }) ).toBeInTheDocument();
});

test("should submit form when all required fields are filled", async () => {
  const spy = jest.fn();
  const { getByLabelText, getByText } = render(
    <SimplePieForm
      usersFirstName="John"
      onSubmit={spy}
    />
  );
  const input = getByLabelText("How many pies?");
  fireEvent.change(input, { target: { value: "3" } });
  fireEvent.submit(getByText("Submit"));

  await waitFor(() => {
    expect(spy).toHaveBeenCalled();
  });
});

test("should not submit when there are validation errors", async () => {
  const spy = jest.fn();
  const { getByText } = render(
      <SimplePieForm
        usersFirstName="John"
        onSubmit={spy}
      />
    );

  fireEvent.submit(getByText("Submit"));

  await waitFor(() => {
    expect(spy).not.toHaveBeenCalled();
  })
});