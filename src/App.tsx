import React from 'react'
import { Navigate, Routes, Route, HashRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import { Provider, useSelector } from "react-redux";
import store, { RootStore } from "./redux/store";

import './App.css'

// components
import Home from './pages/Home/Home'
import Todo from './pages/Todo/Todo'
import Register from './pages/Register/Register'
import SignIn from './pages/SignIn/SignIn'

type RequireAuthProps = {
  children: React.ReactElement,
  redirectTo: string
};

function RequireAuth({ children, redirectTo }: RequireAuthProps): JSX.Element {
  const userStatus = useSelector((store: RootStore) => store.userStatus);
  return userStatus.user !== "" ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Todo' element={
            <RequireAuth redirectTo='/'>
              <Todo />
            </RequireAuth>
          }></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
        </Routes>
        <Toaster />
      </Router>
    </Provider>
  );
}

export default App;
