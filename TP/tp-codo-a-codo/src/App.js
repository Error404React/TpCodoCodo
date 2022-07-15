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
            <Route path="/" element={<NewsList category='general'/>} />
            <Route path="/entertainment" element={<NewsList category='entertainment'/>} />
            <Route path="/business" element={<NewsList category='business'/>} />
            <Route path="/health" element={<NewsList category='health'/>} />
            <Route path="/science" element={<NewsList category='science'/>} />
            <Route path="/sports" element={<NewsList category='sports'/>} />
            <Route path="/technology" element={<NewsList category='technology'/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
