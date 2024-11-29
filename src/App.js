import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import config from "./routes/config";

function App() {
  return (
    <div className="App">
      <Router>
        <Body config={config} />
      </Router>
    </div>
  );
}

export default App;
