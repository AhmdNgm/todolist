import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-md-5 py-md-3">
            <div className="container-fluid d-flex align-items-center">
                <NavLink className="nav-link" to="/">NEGM</NavLink>
                <div className=" d-flex ms-auto pe-md-5 gap-2">
                    <NavLink className="nav-link" to="/add-task">Add Task</NavLink>
                    <NavLink className="nav-link" to="/">All Tasks</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar