import { CheckForOutstandingCharges } from "./CheckForOutstandingCharges";
import { render } from '@testing-library/react';

describe('when user has pending charges', () => {
  test("should redirect the user to the pay now page", () => {
    const Fake = () => <div>My Fake Component</div>;
    const paymentHistory = { pastDueBills: [{ billId: 1, amount: 100 }] };
    const { queryByText } = render(
      <CheckForOutstandingCharges
        paymentHistory={paymentHistory}
      >
        <Fake />
      </CheckForOutstandingCharges>
    );

    expect(queryByText("My Fake Component")).toBeNull();
  });
});

describe('when user has no pending charges', () => {
  test("should render the child component", () => {
    const Fake = () => <div>My Fake Component</div>;
    const paymentHistory = { pastDueBills: [] };
    
    const { queryByText } = render(
      <CheckForOutstandingCharges
        paymentHistory={paymentHistory}
      >
        <Fake />
      </CheckForOutstandingCharges>
    );

    expect(queryByText("My Fake Component")).toBeInTheDocument();
  });
});