import { number, object, string } from "yup";

export const pieOrderSchema = object({
  pieType: string().required(),
  quantity: number().required(),
  customizations: string()
});