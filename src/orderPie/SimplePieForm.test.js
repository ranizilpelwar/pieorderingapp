import { SimplePieForm } from "./SimplePieForm";
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { jest } from "@jest/globals";

describe("SimplePieForm", () => {
  it("should call onSubmit when the form is submitted", async () => {
    //Arrange
    const spy = jest.fn();
    const input = "3";
    //Act
    let container;
    let quantityInput;
    act(() => {
      container = render(
        <SimplePieForm
          onSubmit={spy}
        />
      );
      quantityInput = container.getByLabelText("How many pies?");
      fireEvent.change(quantityInput, { target: { value: input } });
    });
  
    //let form settle
    await waitFor(() => {
      expect(quantityInput.value).toBe(input);
    });
    
    act(() => {
      fireEvent.submit(container.getByText("Submit"));
    });
    
    //Assert
    await waitFor(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

it("should show error message when required field is missing", async () => {
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

});