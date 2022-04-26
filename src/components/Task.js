import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function Task({ item }) {

    const { removeItem, FindTask } = useContext(TaskContext);
    return (
        <li className='p-3 d-flex justify-content-between align-items-center'>
            {item.title}
            <div className="btns">
                <button className='btn float-end' onClick={() => removeItem(item.id)}>Delete</button>
                <button className='btn float-end me-2' onClick={() => FindTask(item.id)} >Edit</button>
            </div>
        </li>
    )
}
