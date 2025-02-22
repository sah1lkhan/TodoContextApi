import { useState } from "react";
import { useTodoContext } from "../../TodoContext/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();

  const clickHandler = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo({ id: Date.now(), todo, completed: false });
      setTodo("");
    }
  };

  return (
    <form onSubmit={clickHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-5 py-1 bg-red-500 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
