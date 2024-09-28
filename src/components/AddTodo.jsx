import { useState } from "react";

function AddTodo({onNewItem}) {
    const[todoName,setTodoName]=useState();
    const[dueDate,setDueDate]=useState();

    const handleNameChange=(event)=>{
        setTodoName(event.target.value)
    }
    const handleDateChange=(event)=>{
        setDueDate(event.target.value)
    }
    const handleButtonClicked=()=>{
        onNewItem(todoName,dueDate);
        setDueDate("");
        setTodoName("");
    }
    return (
        <div className='container text-center'>
            <div className="row">
                <div className='col-6'>
                    <input type="text" placeholder="Enter todo here" onChange={handleNameChange} value={todoName}/>
                </div>
                <div className='col-4'>
                    <input type="date" onChange={handleDateChange} value={dueDate} />
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-success ak-btn"
                    onClick={handleButtonClicked}
                    >Add</button>
                </div>
            </div>
        </div>
    )

}
export default AddTodo;