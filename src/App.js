import "./App.css";
import { AlertButton } from "./components/event-handling/AlertButton";

function App() {
  return (
    <div className="App">
      <AlertButton children="Play Video" message="Playing Video!" />
    </div>
  );
}

export default App;
