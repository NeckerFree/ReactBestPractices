import { withErrorBoundary } from "react-error-boundary";
 
const CrashableComponent = (props:any) => {
  return <span>{props.iDontExist.prop}</span>;
};
 
export default withErrorBoundary(CrashableComponent, {
  FallbackComponent: () => <span>Oh no :(</span>,
});