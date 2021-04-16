import { Field, Form, Formik } from "formik";
import { pieOrderSchema } from "./pieOrderSchema";

export const SimplePieForm = ({ usersFirstName, onSubmit }) => {
  return (
    <Formik onSubmit={onSubmit} validationSchema={pieOrderSchema}>
      <Form>
        <p>`{usersFirstName}, what would you like to order?`</p>
        <Field type="select" name="pieTypes" />
        <Field type="input" name="quantity" />
        <Field type="input" name="customizations" />
        <button type="submit">Submit Order</button>
      </Form>
    </Formik>
  );
};
