import { render } from '@testing-library/react';
import App from "./App";

describe("App", () => {
  it("should show outstanding charges", () => {
    const paymentHistory = { pastDueBills: [{ billId: 1, amount: 100 }] };
    const { queryByText } = render(
      <App
        paymentHistory={paymentHistory}
      />
    );

    expect(queryByText(/outstanding/i)).not.toBeNull();
  });

  it("should allow user to order pies", () => {
    const paymentHistory = { pastDueBills: [] };
  
    const { queryByText } = render(
      <App
        paymentHistory={paymentHistory}
      />
    );
  
    expect(queryByText(/how many/i)).not.toBeNull();
  });
});