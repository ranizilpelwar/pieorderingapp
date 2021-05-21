import { useState } from "react";
import { postPie } from "./postPie";

export const OrderPie = ({
  OrderDetailsForm,
  OrderSummaryPage,
  orderPieAction = postPie
}) => {
  const [orderDetails, setOrderDetails] = useState(undefined);

  const onSubmit = (formData) => {
    orderPieAction(formData);
    setOrderDetails(formData);
  };

  return orderDetails ? (
    <OrderSummaryPage orderDetails={orderDetails} />
  ) : (
    <OrderDetailsForm onSubmit={onSubmit} />
  );
};
