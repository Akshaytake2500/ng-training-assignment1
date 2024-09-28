import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [{
    name: 'Buy milk',
    dueDate: '06/08/2024',
  },
  {
    name: 'Go to college',
    dueDate: '06/08/2024'
  },
  {
    name: 'Go to tuition',
    dueDate: '07/08/2024'
  }
  ];

  return (
    <div>
      <AppName />
      <div className="todo-container">
        <AddTodo />
        <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </div>
  );
}

export default App
