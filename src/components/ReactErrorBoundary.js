import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
export default function ReactErrorBoundary(props) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={(error, errorInfo) => {
                // log the error
                console.log("Error caught!");
                console.log(error.code);
                console.log(error.name);
                console.log(error.message);
                console.log(error.stack);
                // record the error in an APM tool...
            }}
            onReset={() => {
                // reloading the page to restore the initial state
                // of the current page
                console.log("reloading the page...");
                window.location.reload();

                // other reset logic...
            }}
        >
            {props.children}
        </ErrorBoundary>
    );
}
