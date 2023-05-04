import React from 'react';
import Navbar from './components/Navbar';
import Todo from "./components/Todo"
import Doing from './components/Doing';
import Done from './components/Done';
import NewColumn from './components/NewColumn';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="tasks-container">
        <Todo />
        <Doing />
        <Done />
        <NewColumn />
      </section>

    </div>
  );
}

export default App;
