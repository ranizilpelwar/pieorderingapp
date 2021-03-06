import { number, object, string } from "yup";

export const pieOrderSchema = object({
  pieType: string().required(),
  quantity: number().positive().required().typeError("A number is required"),
  customizations: string()
});