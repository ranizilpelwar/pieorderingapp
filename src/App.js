import { CheckForOutstandingCharges } from "./CheckForOutstandingCharges";
import { OrderPie } from "./OrderPie";
import { SimplePieForm } from "./SimplePieForm";
import { postPie } from "./actions/postPie";
import './App.css';


const goToOrderSummary = () =>  window.location.href = "https://www.thebestpies.com/ordersummary";

function App() {
  return (
    <CheckForOutstandingCharges>
      <OrderPie
        ConfirmationForm={SimplePieForm}
        redirectToSummary={goToOrderSummary}
        orderPieAction={postPie}
      />
    </CheckForOutstandingCharges>
  );
}

export default App;
