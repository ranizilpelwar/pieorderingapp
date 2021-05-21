import { CheckForOutstandingCharges } from "./charges/CheckForOutstandingCharges";
import { OrderPie } from "./orderPie/OrderPie";
import { SimplePieForm } from "./orderPie/SimplePieForm";
import { OrderSummaryPage } from "./orderPie/OrderSummaryPage";

export default function App({ paymentHistory }) {
  return (
    <CheckForOutstandingCharges paymentHistory={paymentHistory}>
      <OrderPie
        OrderDetailsForm={SimplePieForm}
        OrderSummaryPage={OrderSummaryPage}
      />
    </CheckForOutstandingCharges>
  );
}
