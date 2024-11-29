import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import config from "./routes/config";
import Body from "./pages/Body";

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
