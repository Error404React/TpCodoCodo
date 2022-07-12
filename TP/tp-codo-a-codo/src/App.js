import React from 'react'
import './App.css';
import {NewsList} from './components/NewsList'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from './components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='titleNews'>NEWS ERROR 404</header>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<NewsList/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;