import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
function Todo() {
  const [todoList, setTodoList] = useState([]);

  const handle = (text) => {
    const payload = {
      title: text,
      status: false,
      id: nanoid(5),
    };
    console.log("here coming", text);
    console.log("here coming", payload);

    setTodoList([...todoList, payload]);
  };

  const handleStatus = (valId) => {
    console.log(valId);
    const newArr = todoList.map((e) => {
      if (e.id === valId) {
        return {
          ...e,
          status: !e.status,
        };
      } else {
        return e;
      }
    });
    setTodoList(newArr);
  };

  return (
    <div className="border">
      <TodoInput passProp={handle} />
      {todoList.map((e) => {
        return <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>;
      })}
    </div>
  );
}
export { Todo };
