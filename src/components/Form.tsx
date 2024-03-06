import { ReactNode } from "react";


interface IProps {
  children: ReactNode;
}
const Form = ({ children }: IProps) => {
  return <form method="post">{children}</form>;
};

export default Form;
