import { useState } from "react";
const TodoItem = ({ todoName, todoDate, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(todoName);
    const [newDueDate, setNewDueDate] = useState(todoDate);

    const handleEdit = () => {
        onEdit(todoName, newName, newDueDate); 
        setIsEditing(false); 
    };

    return (
        <div className='container text-center'>
            <div className="row">
                <div className='col-6'>
                    {isEditing ? (
                        <input 
                            type="text" 
                            value={newName} 
                            onChange={(e) => setNewName(e.target.value)} 
                        />
                    ) : (
                        todoName
                    )}
                </div>
                <div className='col-4'>
                    {isEditing ? (
                        <input 
                            type="date" 
                            value={newDueDate} 
                            onChange={(e) => setNewDueDate(e.target.value)} 
                        />
                    ) : (
                        todoDate
                    )}
                </div>
                <div className='col-2'>
                    {isEditing ? (
                        <button 
                            type="button" 
                            className="btn btn-success ak-btn edit" 
                            onClick={handleEdit}
                        >
                            Save
                        </button>
                    ) : (
                        <>
                            <button 
                                type="button" 
                                className="btn btn-primary ak-btn" 
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger ak-btn" 
                                onClick={onDelete}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
export default TodoItem;
