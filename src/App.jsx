import "./App.css";
import { Todo } from "./components/todo";

function App() {
  return (
    <div
      className="App "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
      }}
    >
      <Todo className="black" />
    </div>
  );
}

export default App;
