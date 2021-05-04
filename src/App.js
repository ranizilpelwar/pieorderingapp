import { CheckForOutstandingCharges } from "./charges/CheckForOutstandingCharges";
import { OrderPie } from "./orderPie/OrderPie";
import { SimplePieForm } from "./orderPie/SimplePieForm";
import { OrderSummaryPage } from "./orderPie/OrderSummaryPage";
import { postPie } from "./orderPie/postPie";
import './App.css';


const paymentHistory = { pastDueBills: [] };
const userDetails = { firstName: "Rani" };

function App() {
  return (
    <CheckForOutstandingCharges
      paymentHistory={paymentHistory}
    >
      <OrderPie
        OrderDetailsForm={SimplePieForm}
        OrderSummaryPage={OrderSummaryPage}
        orderPieAction={postPie}
        userDetails={userDetails}
      />
    </CheckForOutstandingCharges>
  );
}

export default App;
