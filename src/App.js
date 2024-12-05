import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import config from "./routes/config";
import Body from "./pages/Body";


// provider will come form react-reducx to configure store

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
