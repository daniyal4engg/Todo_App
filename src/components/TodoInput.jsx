import "../components/todo.css";
import { useState } from "react";

function TodoInput({ passProp }) {
  const [text, setText] = useState("");
  return (
    <div className="doc" style={{ borderRadius: "10px" }}>
      <input
        onChange={(e) => {
          //   console.log(e.target.value);
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Items"
        className="inpColor pad"
      />
      <button onClick={() => passProp(text)} className="bgColor pad">
        Add
      </button>
      <h2>ADD ITEM</h2>
    </div>
  );
}

export { TodoInput };
