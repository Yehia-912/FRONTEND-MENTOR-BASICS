import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest }: IProps) => {
  return (
    <button
      className=" tracking-wide text-white
                 bg-darker-grey px-4 py-[1.2rem] w-full rounded-lg text-sm
                  hover:bg-gradient-to-r from-primary via-primary to-[#ff6a3b]
                  transition  hover:shadow-md duration-1000"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
