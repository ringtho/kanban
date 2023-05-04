import React from 'react';
import Navbar from './components/Navbar';
import Todo from "./components/Todo"
import Doing from './components/Doing';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="tasks-container">
        <Todo />
        <Doing />
      </section>

    </div>
  );
}

export default App;
