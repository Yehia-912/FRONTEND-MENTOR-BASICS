import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  title: string;
}

const Feature = ({ title }: IProps) => {
  return (
    <li className="list-none flex items-center gap-[0.6rem]">
      <FontAwesomeIcon
        icon={faCheck}
        className="text-white bg-primary text-[0.2rem] rounded-full size-3.5 p-[0.18rem] box-border"
      />
      <span className="text-[0.8rem]">{title}</span>
    </li>
  );
};

export default Feature;
