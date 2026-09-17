import styles from "./TodoForm.module.css";

function TodoForm() {
  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Add a new todo..."
      />

      <button>Add</button>
    </div>
  );
}

export default TodoForm;