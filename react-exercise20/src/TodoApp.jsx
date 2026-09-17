import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.css";

function TodoApp() {
  return (
    <div className={styles.page}>
      <nav>
        <button>Todo App</button>
        <span>Study Timer</span>
      </nav>

      <div className={styles.container}>
        <h1>My Todo List</h1>

        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoApp;