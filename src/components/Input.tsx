import { ChangeEvent } from "react";
import { IInput, IInputsValues } from "../interfaces";
import { DEFAULT } from "../App";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  input: IInput;
  valid: boolean;
  inputs: IInputsValues;
  errors: IInputsValues;
  setInputs: ({ email }: IInputsValues) => void;

  setErrors: ({ email }: IInputsValues) => void;
}

const Input = ({
  input,
  inputs,
  setInputs,
  valid,
  errors,
  setErrors,
}: IProps) => {
  const { label, name, type, id } = input;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs({ ...inputs, [name]: value });
    setErrors(DEFAULT);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs capitalize font-bold">
          {label}
        </label>
        {errors[name] ? <ErrorMessage message={errors[name]} /> : null}
      </div>

      <input
        className={`border block w-full mt-2 border-grey rounded-lg text-grey caret-grey 
                   text-sm px-[1.20rem] py-[1rem] focus:outline-none focus:caret-darker-grey
                   focus:text-darker-grey  focus:border-darker-grey hover:shadow-sm
                   duration-150 hover:text-darker-grey hover:border-darker-grey ${
                     valid
                       ? ""
                       : `bg-[#ffe8e6] border-[#f5908e] text-[#f5908e]
                        hover:border-primary
                        hover:text-primary focus:caret-primary
                       focus:text-primary  focus:border-primary `
                   }`}
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
