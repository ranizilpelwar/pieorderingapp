import { CheckForOutstandingCharges } from "./CheckForOutstandingCharges";
import { render } from '@testing-library/react';

describe("CheckForOutstandingCharges", () => {

  describe("when user has no pending charges", () => {
    it("should render the child component", () => {
      const input = "My Fake Component";
      const Fake = () => <div>{input}</div>;
      const paymentHistory = { pastDueBills: [] };
      
      const { queryByText } = render(
        <CheckForOutstandingCharges
          paymentHistory={paymentHistory}
        >
          <Fake />
        </CheckForOutstandingCharges>
      );

      expect(queryByText(input)).not.toBeNull();
    });
  });
  
  describe("when user has pending charges", () => {
    it("should direct the user to the pay now page", async () => {
      const input = "My Fake Component";
      const Fake = () => <div>{input}</div>;
      const paymentHistory = { pastDueBills: [{ billId: 1, amount: 100 }] };
      const { queryByText } = render(
        <CheckForOutstandingCharges
          paymentHistory={paymentHistory}
        >
          <Fake />
        </CheckForOutstandingCharges>
      );
  
      expect(queryByText(input)).toBeNull();
      expect(queryByText(/outstanding/i)).not.toBeNull();
    });
  });
  
});