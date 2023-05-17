import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/MainComponent";
import ReactErrorBoundary from "./components/ReactErrorBoundary";

function App() {
    return (
        <ReactErrorBoundary>
            <MainComponent />
        </ReactErrorBoundary>
    );
}
export default App;
