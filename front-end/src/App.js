import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import BootstrapCarousel from './components/BootstrapCarousel';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <BootstrapCarousel/>
    </div>
  );
}

export default App;