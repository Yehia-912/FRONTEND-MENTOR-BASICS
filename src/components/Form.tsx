import { FormHTMLAttributes, ReactNode } from "react";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
const Form = ({ children, ...rest }: IProps) => {
  return (
    <form method="post" className="flex flex-col gap-4" {...rest}>
      {children}
    </form>
  );
};

export default Form;
