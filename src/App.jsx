import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {

  const initialTodoItems = [{
    name: 'Buy milk',
    dueDate: '28/09/2024',
  },
  {
    name: 'Go to college',
    dueDate: '28/09/2024',
  },
  {
    name: 'Go to tuition',
    dueDate: '28/09/2024',
  }
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = todoItems.filter(item => item.name !== itemToDelete);
    setTodoItems(updatedItems);
  };
  const handleEditItem = (itemName, newName, newDueDate) => {
    const updatedItems = todoItems.map(item => 
      item.name === itemName 
      ? { ...item, name: newName, dueDate: newDueDate }
      : item
    );
    setTodoItems(updatedItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems 
        todoItems={todoItems} 
        onDeleteItem={handleDeleteItem} 
        onEditItem={handleEditItem} 
      />
    </center>
  );
}
export default App;