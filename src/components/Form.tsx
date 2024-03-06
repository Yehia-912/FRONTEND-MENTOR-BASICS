import { FormHTMLAttributes, ReactNode } from "react";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
const Form = ({ children, ...rest }: IProps) => {
  return (
    <form method="post" {...rest}>
      {children}
    </form>
  );
};

export default Form;
