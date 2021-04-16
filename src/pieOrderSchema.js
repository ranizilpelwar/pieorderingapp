import { object, string } from "yup";

export const pieOrderSchema = object({
  pieTypes: string().required(),
  quantity: string().required(),
  customizations: string()
});