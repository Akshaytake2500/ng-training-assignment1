import React from 'react';
import TodoItem from './TodoItem'; 
const TodoItems = ({ todoItems, onDeleteItem, onEditItem }) => {
    return (
        <div className="container">
            {
                todoItems.map((item) => {
                    return (
                        <TodoItem
                            todoDate={item.dueDate}
                            todoName={item.name}
                            key={item.name + item.dueDate}
                            onDelete={() => onDeleteItem(item.name)}
                            onEdit={onEditItem}
                        />
                    );
                })
            }
        </div>
    );
}
export default TodoItems;
