import React from 'react';
import Navbar from './components/Navbar';
import Todo from "./components/Todo"
import Doing from './components/Doing';
import Done from './components/Done';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="tasks-container">
        <Todo />
        <Doing />
        <Done />
      </section>

    </div>
  );
}

export default App;
