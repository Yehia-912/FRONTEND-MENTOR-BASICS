import { v4 as uuid } from "uuid";
import { IFeature, IInput } from "../interfaces";

export const FEATURES: IFeature[] = [
  {
    id: uuid(),
    title: "Product discovery and building what matters",
  },
  {
    id: uuid(),
    title: "Measuring to ensure updates are a success ",
  },
  {
    id: uuid(),
    title: "And much more!",
  },
];
export const INPUTS: IInput[] = [
  {
    id: uuid(),
    name: "email",
    label: "email adderss",
    type: "email",
  },
];
