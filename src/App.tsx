import { FormEvent, useState } from "react";
import "./App.css";

import Image from "./components/UI/Image";
import Description from "./components/description";
import { IInput, IInputsValues } from "./interfaces";
import Form from "./components/Form";
import Button from "./components/UI/Button";
import Input from "./components/Input";
import { INPUTS } from "./data";
import { validate } from "./validation";
import Success from "./components/Success";

export const DEFAULT = { email: "" };
const App = () => {
  // states
  const [inputs, setInputs] = useState<IInputsValues>(DEFAULT);
  const [errors, setErrors] = useState<IInputsValues>(DEFAULT);

  const [success, setSucces] = useState(false);

  //renders
  const RENDERINPUTLIST = INPUTS.map((input: IInput) => (
    <Input
      input={input}
      inputs={inputs}
      setInputs={setInputs}
      errors={errors}
      setErrors={setErrors}
      valid={!errors[input.name]}
      key={input.id}
    />
  ));
  // handlers
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: IInputsValues = validate(inputs);
    const hasError = Object.values(errors).some((val) => val.trim());
    if (hasError) {
      setErrors(errors);
      return;
    } else {
      setErrors(DEFAULT);
      setSucces(true);
    }
  };

  return (
    <div className="min-h-dvh bg-darker-grey grid place-content-center">
      <div className="container">
        {success ? (
          <div className="bg-white rounded-3xl  p-10 max-w-[420px] min-h-80 flex flex-col justify-center gap-[20px]">
            <Success email={inputs.email}>
              <Button
                onClick={() => {
                  setSucces(false);
                  setInputs(DEFAULT);
                }}
              >
                Dismiss message
              </Button>
            </Success>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-5 ps-12 flex  items-center gap-[45px] w-fit">
            <>
              <Description>
                <Form onSubmit={onSubmitHandler}>
                  {RENDERINPUTLIST}
                  <Button>Subscribe to monthly newsletter</Button>
                </Form>
              </Description>
              <Image src={"/illustration-sign-up-desktop.svg"} />
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
