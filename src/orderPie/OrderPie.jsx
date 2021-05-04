import { useState } from "react";

export const OrderPie = ({
  OrderDetailsForm,
  OrderSummaryPage,
  orderPieAction,
  userDetails
}) => {
  const [orderDetails, setOrderDetails] = useState(undefined);

  const onSubmit = (formData) => {
    orderPieAction(formData);
    setOrderDetails(formData);
  };

  return orderDetails ? (
    <OrderSummaryPage orderDetails={orderDetails} />
  ) : (
    <OrderDetailsForm
      usersFirstName={userDetails.firstName}
      onSubmit={onSubmit}
    />
  );
};
