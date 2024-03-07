interface IProps {
  message: string;
}

const ErrorMessage = ({ message }: IProps) => {
  return <span className="text-[0.65rem] text-primary">{message}</span>;
};

export default ErrorMessage;
