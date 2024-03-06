import { IInputsValues } from "../interfaces";

export const validate = ({ email }: IInputsValues) => {
  const errors: IInputsValues = { email: "" };

  const VALIDEMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  if (!email.trim() || !VALIDEMAIL) errors.email = email;
  return errors;
};
