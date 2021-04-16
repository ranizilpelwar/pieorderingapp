import { PayNowPage } from "./PayNowPage";

export const CheckForOutstandingCharges = ({ children }) => {
  const paymentHistory = { pastDueBills: [{ billId: 1, amount: 100 }] };
  const isDelinquent = () => paymentHistory.pastDueBills.length > 0;

  return isDelinquent() ? <PayNowPage /> : children;
};
