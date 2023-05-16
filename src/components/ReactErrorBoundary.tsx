import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './ErrorPage'

const ReactErrorBoundary = (props: any) => {
  return (
    <ErrorBoundary 
    FallbackComponent={ErrorPage}
    onError={(error,errorInfo)=>{
        console.log("Error caught!");  
		console.error(error);  
		console.error(errorInfo);   
        //Call logging service to register error
    }}
    onReset={()=>{
        // reloading the page to restore the initial state
                // of the current page
                console.log("reloading the page...");
                window.location.reload();

                // other reset logic...
    }}
    >  
    {props.children}    
    </ErrorBoundary>
  )
}

export default ReactErrorBoundary;
