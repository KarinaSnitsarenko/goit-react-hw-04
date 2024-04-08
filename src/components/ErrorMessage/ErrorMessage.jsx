const ErrorMessage = ({
  message = "An error occurred while loading the file. Please try again later.",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
