import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskList from './TaskList';
export default function AddTask() {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title: title, id: Math.floor(Math.random() * 100000) })
        setTitle('')

    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <form className=' p-3' onSubmit={handleSubmit}>
                <h1 className="text-center display-5">Add New Task</h1>
                <div className="my-5">
                    <label htmlFor="input" className="form-label">Type Title of Task</label>
                    <input type="text" className="form-control p-3" onChange={handleChange} value={title} id="input" />
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                </div>
            </form>
            <TaskList />
        </div>
    )
}
