import { render } from '@testing-library/react';
import App from "./App";

test('should show outstanding charges', () => {
  const paymentHistory = { pastDueBills: [{ billId: 1, amount: 100 }] };
  const { queryByText } = render(
    <App
      paymentHistory={paymentHistory}
    />
  );

  expect(queryByText(/outstanding/i)).not.toBeNull();
});

test('should allow user to order pies', () => {
  const paymentHistory = { pastDueBills: [] };

  const { queryByText } = render(
    <App
      paymentHistory={paymentHistory}
    />
  );

  expect(queryByText(/how many/i)).not.toBeNull();
});