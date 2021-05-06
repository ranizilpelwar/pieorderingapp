import { Field, Form, Formik, ErrorMessage } from "formik";
import { pieOrderSchema } from "./pieOrderSchema";

export const SimplePieForm = ({ onSubmit }) => {
  const initialValues = {
    pieType: "apple",
    quantity: "",
    customizations: ""
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={pieOrderSchema}
    >
      <Form>
        <p>What would you like to order?</p>
        <label id="type">What kind of pie?</label>
        <Field as="select" name="pieType" aria-labelledby="type">
          <option value="apple">Apple</option>
          <option value="pumpkin">Pumpkin</option>
        </Field>
        <br />
        <label id="count">How many pies?</label>
        <Field type="input" name="quantity" aria-labelledby="count" />
        <ErrorMessage name="quantity"></ErrorMessage>
        <br />
        <label id="custom">Any customizations?</label>
        <Field type="input" name="customizations" aria-labelledby="custom" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
