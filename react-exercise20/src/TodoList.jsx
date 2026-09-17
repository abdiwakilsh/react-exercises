import styles from "./TodoList.module.css";

function TodoList() {
  const todos = [
    { id: 1, text: "hey whtsapp" },
    { id: 2, text: "how are yu doing", done: true },
    { id: 3, text: "This is cool right ?" }
  ];

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div
          className={styles.todo}
          key={todo.id}
        >
          <input
            type="checkbox"
            checked={todo.done || false}
            readOnly
          />

          <span className={todo.done ? styles.done : ""}>
            {todo.text}
          </span>

          {todo.done && (
            <button>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;