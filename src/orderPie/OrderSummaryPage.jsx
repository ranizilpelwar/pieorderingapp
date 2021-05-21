export const OrderSummaryPage = ({ orderDetails }) => {
  const { pieType, quantity } = orderDetails;
  return (
    <div>
      <h1>Thanks for your order!</h1>
      <p>{`Your ${quantity} ${pieType} pies are being prepared.`}</p>
      <p>You will be notified when they are ready to ship.</p>
    </div>
  );
};
