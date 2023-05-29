import { useErrorHandler } from "react-error-boundary";

const CrashEvent = () => {
  const handleError = useErrorHandler();
  const handleClick = () => {
    try {
      throw new Error('Handle error generated!');
    } catch (error) {
      handleError(error);
    }
  };
  return <button className="button-app" onClick={() => handleClick()}>Throw Event Error</button>;
};

export default CrashEvent;