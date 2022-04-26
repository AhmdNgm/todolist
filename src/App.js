import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

// components
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

// context
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-10 mx-auto">

              <TaskContextProvider>
                <Routes>
                  <Route exact path="/" element={<TaskList />} />
                  <Route path="/add-task" element={<AddTask />} />
                </Routes>
              </TaskContextProvider>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
