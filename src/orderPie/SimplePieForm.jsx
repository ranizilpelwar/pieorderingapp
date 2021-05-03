import { Field, Form, Formik, ErrorMessage } from "formik";
import { pieOrderSchema } from "./pieOrderSchema";

const initialValues = {
  pieType: "apple",
  quantity: "",
  customizations: ""
};

export const SimplePieForm = ({ usersFirstName, onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={pieOrderSchema}
      initialValues={initialValues}
    >
      <Form>
        <p>{`${usersFirstName}, what would you like to order?`}</p>
        <label htmlFor="pieType">What kind of pie?</label>
        <Field as="select" name="pieType">
          <option value="apple">Apple</option>
          <option value="pumpkin">Pumpkin</option>
        </Field>
        <br />
        <label htmlFor="quantity">How many pies?</label>
        <Field type="input" name="quantity" />
        <ErrorMessage name="quantity"></ErrorMessage>
        <br />
        <label htmlFor="customizations">Any customizations?</label>
        <Field type="input" name="customizations" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
