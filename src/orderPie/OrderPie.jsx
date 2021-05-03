export const OrderPie = ({
  OrderDetailsForm,
  redirectToSummary = () => {},
  orderPieAction = () => {},
  userDetails
}) => {
  const onSubmit = (formData) => {
    orderPieAction(formData);
    redirectToSummary();
  };

  return (
    <OrderDetailsForm
      usersFirstName={userDetails.firstName}
      onSubmit={onSubmit}
    />
  );
};
