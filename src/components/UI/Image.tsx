import { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Image = ({ ...rest }: IProps) => {
  return <img style={{ maxHeight: "450px" }} {...rest} />;
};

export default Image;
