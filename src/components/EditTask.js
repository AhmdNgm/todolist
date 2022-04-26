import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'
export default function EditTask() {
    const { editTask, item } = useContext(TaskContext);
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (item !== null) {
            setTitle(item.title)
        }
    }, [item])


    const handleSubmit = (e) => {
        e.preventDefault();
        editTask({ title: title, id: item.id })
        setTitle('')

    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <form className=' p-3' onSubmit={handleSubmit}>
                <h1 className="text-center display-5">Edit Your Task</h1>
                <div className="my-5">
                    <label htmlFor="input" className="form-label">Type Title of Task</label>
                    <input type="text" className="form-control p-3" onChange={handleChange} value={title} id="input" />
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                </div>
            </form>
        </div>
    )
}
