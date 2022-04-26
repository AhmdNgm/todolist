import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import EditTask from './EditTask'
import Task from './Task'
export default function TaskList() {
    const { tasks, item } = useContext(TaskContext)
    return (
        <>
            {item ? <EditTask /> : ''}
            <h1 className='text-center display-5'>All Tasks</h1>
            <ul className='list-unstyled'>
                {tasks.length ? tasks.map((item, index) => {
                    return (
                        <Task item={item} key={index} />
                    )
                }) : <h3 className='text-center pt-5'>No Tasks Yet</h3>}
            </ul>
        </>
    )

}


