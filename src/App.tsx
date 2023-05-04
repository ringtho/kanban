import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Todo from "./components/Todo"
import Doing from './components/Doing';
import Done from './components/Done';
import NewColumn from './components/NewColumn';
import AddNewTask from './components/AddNewTask';
import EditTask from './components/EditTask';
import AddNewBoard from './components/AddNewBoard';
import EditBoard from './components/EditBoard';
import DeleteBoard from './components/DeleteBoard';
import DeleteTask from './components/DeleteTask';

function App() {
  const [clicked, setClicked] = useState(false)
  return (
    <div className={`app ${clicked ? "app-clicked" : ""}`}>
      <Navbar setClicked={setClicked} />
      <section className="tasks-container">
        <Todo />
        <Doing />
        <Done />
        <NewColumn />
      </section>
      <AddNewTask />
      <EditTask />
      <AddNewBoard />
      <EditBoard />
      <DeleteBoard />
      <DeleteTask />
    </div>
  )
}

export default App;
