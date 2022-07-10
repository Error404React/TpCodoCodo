import React from 'react'
import './App.css';
import {NewsList} from './components/NewsList'


function App() {
  return (
    <div>
      <header className='title'>Titulares de Argentina</header>
      <main> <NewsList/></main>
    </div>
  );
}

export default App;
