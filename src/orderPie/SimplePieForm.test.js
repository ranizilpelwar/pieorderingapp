import { SimplePieForm } from "./SimplePieForm";
import { render, fireEvent, waitFor, act } from '@testing-library/react';
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

test("should call onSubmit when the form is submitted", async () => {
  const spy = jest.fn();
  let container;
  let input;
  act(() => {
    container = render(
      <SimplePieForm
        onSubmit={spy}
      />
    );
    input = container.getByLabelText("How many pies?");
    fireEvent.change(input, { target: { value: "3" } });
  });

  await waitFor(() => {
    expect(input.value).toBe('3');
  });
  
  act(() => {
    fireEvent.submit(container.getByText("Submit"));
  });
  
  await waitFor(() => {
    expect(spy).toHaveBeenCalled();
  });
});

test("should show error message when required field is missing", async () => {
  const spy = jest.fn();
  let container;
  act(() => {
    container = render(
      <SimplePieForm
        onSubmit={spy}
      />
    );
    fireEvent.submit(container.getByText("Submit"));
  });
  
  expect(await container.findByText(/required/i)).not.toBeNull();
});