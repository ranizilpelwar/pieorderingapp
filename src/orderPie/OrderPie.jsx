export const OrderPie = ({
  OrderDetailsForm,
  redirectToSummary = () => {},
  orderPieAction = () => {}
}) => {
  const userData = { firstName: "John" };
  const onSubmit = (formData) => {
    orderPieAction(formData);
    redirectToSummary();
  };

  return (
    <OrderDetailsForm usersFirstName={userData.firstName} onSubmit={onSubmit} />
  );
};
