import { CheckForOutstandingCharges } from "./charges/CheckForOutstandingCharges";
import { OrderPie } from "./orderPie/OrderPie";
import { SimplePieForm } from "./orderPie/SimplePieForm";
import { postPie } from "./orderPie/postPie";
import './App.css';


const goToOrderSummary = () =>  window.location.href = "https://www.thebestpies.com/ordersummary";
const paymentHistory = { pastDueBills: [] };
const userDetails = { firstName: "Rani" };

function App() {
  return (
    <CheckForOutstandingCharges
      paymentHistory={paymentHistory}
    >
      <OrderPie
        OrderDetailsForm={SimplePieForm}
        redirectToSummary={goToOrderSummary}
        orderPieAction={postPie}
        userDetails={userDetails}
      />
    </CheckForOutstandingCharges>
  );
}

export default App;
