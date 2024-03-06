import { ReactNode } from "react";
import { FEATURES } from "../data";

import Feature from "./feature";

interface IProps {
  children: ReactNode;
}

const Description = ({ children }: IProps) => {
  //  ** Renders
  const renderFeatureList = FEATURES.map(({ title, id }) => (
    <Feature title={title} key={id} />
  ));
  return (
    <div className="text-darker-grey grid gap-4">
      <h1 className=" text-4xl font-bold ">Stay updated!</h1>
      <p className="text-sm">
        Join 60,000+ product managers receiving <br /> monthly updates on:
      </p>
      <ul className="grid gap-2">{renderFeatureList}</ul>
      {children}
    </div>
  );
};

export default Description;
