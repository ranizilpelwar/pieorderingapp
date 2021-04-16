import { CheckForOutstandingCharges } from "./CheckForOutstandingCharges";
import { OrderPie } from "./OrderPie";
import { SimplePieForm } from "./SimplePieForm";
import './App.css';

async function postPie(orderDetails) {
  await fetch("https://www.thebestpies.com/orderpie", {
    method: "POST",
    body: JSON.stringify(orderDetails)
  });
}
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
