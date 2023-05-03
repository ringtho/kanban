import React from 'react';
import Navbar from './components/Navbar';
import Todo from "./components/Todo"

function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="tasks-container">
        <Todo />
      </section>

    </div>
  );
}

export default App;
