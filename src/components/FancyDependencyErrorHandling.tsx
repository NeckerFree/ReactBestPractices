import { ErrorBoundary } from "react-error-boundary";
//import CrashableButton from "./CrashableButton";
//import SetTimeoutButton from "./SetTimeoutButton";
import CrashableComponent from "./CrashableComponent";

 
const FancyDependencyErrorHandling = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        // You can also log the error to an error reporting service like AppSignal
        // logErrorToMyService(error, errorInfo);
        console.error(error);
      }}
    >
      {/* <CrashableButton />
      <SetTimeoutButton/> */}
      <CrashableComponent/> 
          </ErrorBoundary>
  );
};
 
const ErrorFallback = ({ error}: any) => (
  <div>
    <p>Something went wrong 😭</p>
 
    {error.message && <span>Here's the error: {error.message}</span>}
  </div>
);
 
export default FancyDependencyErrorHandling;