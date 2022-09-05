import React from 'react'
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css'

// components
import Home from './pages/Home/Home'
import Todo from './pages/Todo/Todo'
import Register from './pages/Register/Register'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Todo' element={<Todo />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
