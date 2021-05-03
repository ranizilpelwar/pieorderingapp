import { CheckForOutstandingCharges } from "./charges/CheckForOutstandingCharges";
import { OrderPie } from "./orderPie/OrderPie";
import { SimplePieForm } from "./orderPie/SimplePieForm";
import { postPie } from "./orderPie/postPie";
import './App.css';


const goToOrderSummary = () =>  window.location.href = "https://www.thebestpies.com/ordersummary";
const paymentHistory = { pastDueBills: [{ billId: 1, amount: 100 }] };

function App() {
  return (
    <CheckForOutstandingCharges
      paymentHistory={paymentHistory}
    >
      <OrderPie
        ConfirmationForm={SimplePieForm}
        redirectToSummary={goToOrderSummary}
        orderPieAction={postPie}
      />
    </CheckForOutstandingCharges>
  );
}

export default App;
