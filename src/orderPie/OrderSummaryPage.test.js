import { render } from '@testing-library/react';
import { OrderSummaryPage } from "./OrderSummaryPage";

describe("OrderSummaryPage", () => {
  it("displays the order details", async () => {
    const order = {
      quantity: 5,
      pieType: "Apple"
    };

    const container = render(
      <OrderSummaryPage
      orderDetails={order}
      />
    );

    expect(await container.findByText(/5 Apple/i)).toBeInTheDocument();
  });
  
});