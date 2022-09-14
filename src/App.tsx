import React from 'react'
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import { Provider } from "react-redux";
import store from "./redux/store";

import './App.css'

// components
import Home from './pages/Home/Home'
import Todo from './pages/Todo/Todo'
import Register from './pages/Register/Register'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Todo' element={<Todo />}></Route>
          <Route path='/Register' element={<Register />}></Route>
        </Routes>
        <Toaster />
      </Router>
    </Provider>
  );
}

export default App;
