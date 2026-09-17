import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(e) {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="min-h-screen bg-purple-100 py-10">

      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Todo List
        </h1>

        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700"
          >
            Add
          </button>
        </form>

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 bg-gray-50 p-4 mb-3 rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5"
            />

            <span
              className={`flex-1 ${
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-gray-700"
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </div>
        ))}

        {todos.length === 0 && (
          <p className="text-center text-gray-500">
            No todos yet. Add some tasks above!
          </p>
        )}

      </div>
    </div>
  );
}

export default App;