import { ChangeEvent } from "react";
import { IInput, IInputsValues } from "../interfaces";

interface IProps {
  input: IInput;
  inputs: IInputsValues;
  setInputs: ({ email }: IInputsValues) => void;
}

const Input = ({ input, inputs, setInputs }: IProps) => {
  const { label, name, type, id } = input;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div>
      <label htmlFor={id} className="text-xs capitalize font-bold">
        {label}
      </label>

      <input
        className="border block w-full mt-2 border-grey rounded-lg text-grey caret-grey 
                   text-sm px-[1.20rem] py-[1rem] focus:outline-none focus:caret-darker-grey
                   focus:text-darker-grey  focus:border-darker-grey hover:shadow-sm
                   duration-150 hover:text-darker-grey hover:border-darker-grey "
        placeholder="email@company.com"
        type={type}
        id={id}
        value={inputs[name]}
        name={name}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
