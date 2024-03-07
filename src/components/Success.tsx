import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactNode } from "react";

interface IProps {
  email: string;
  children: ReactNode;
}

const Success = ({ email, children }: IProps) => {
  return (
    <>
      <div>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-white bg-primary text-md rounded-full size-6 p-3 box-border"
        />
      </div>
      <h2 className="text-4xl font-bold ">Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to
        <span className="text-darker-grey font-semibold"> {email}. </span>{" "}
        Please open it and click the button inside to confirm your subscription.
      </p>
      {children}
    </>
  );
};

export default Success;
