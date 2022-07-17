export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        width: "400px",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "3px",
      }}
    >
      <p>ID-{todo.id}</p>
      {todo.title}-{todo.status ? "DONE" : "NOT DONE"}{" "}
      <button
        onClick={() => {
          handleStatus(todo.id);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
