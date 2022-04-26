import React, { useState, createContext, useEffect } from 'react';
export const TaskContext = createContext()


export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks_list')) || [])
    const [item, setItem] = useState(null)
    useEffect(() => {
        localStorage.setItem('tasks_list', JSON.stringify(tasks))
    }, [tasks])

    const removeItem = (id) => {
        const newTask = tasks.filter((item) => item.id !== id)
        setTasks(newTask);
    }
    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const FindTask = (id) => {
        const task = tasks.find((item) => item.id === id)
        setItem(task)
    }

    // eslint-disable-next-line no-unused-vars
    const editTask = (task) => {

        const editTasks = tasks.map((item) => {
            return item.id === task.id ? task : item

        })
        setTasks(editTasks)
        setItem(null)
    }

    return (
        <TaskContext.Provider value={{ tasks, removeItem, addTask, FindTask, item, editTask }}>
            {props.children}
        </TaskContext.Provider>
    )

}
