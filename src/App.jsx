// import TodoForm from "./Components/Todo/TodoForm";
import TodoForm from "./Components/Todo/TodoForm";
import TodoItem from "./Components/Todo/TodoItem";
import { TodoProvider, useTodoContext } from "./TodoContext/TodoContext";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="flex flex-wrap gap-y-3">
      {todos.map((todo) => (
        <div className="w-screen" key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <div className="bg-[#08040a] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{<TodoForm />}</div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
