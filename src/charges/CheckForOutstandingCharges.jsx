import { PayNowPage } from "../PayNowPage";

export const CheckForOutstandingCharges = ({ children, paymentHistory }) => {
  const isDelinquent = () => paymentHistory.pastDueBills.length > 0;

  return isDelinquent() ? <PayNowPage /> : children;
};
