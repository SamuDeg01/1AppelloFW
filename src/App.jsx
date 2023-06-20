import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  const [loggedUser, setLoggedUser] = useState({_id: '645e4657beea2b800a040bff', username: 'fittizio'})

  const changeLoggedUser = username => {
    fetch('http://localhost:3000/api/users/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'username': username})
    })
        .then(res => res.json())
        .then(user => !user.error && setLoggedUser(user))
  }
  
  return (
    <div id="container">
    <Sidebar loggedUser={loggedUser.username} changeLoggedUser={changeLoggedUser} />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home loggedUser={loggedUser} />} />
        <Route path=":username" element={<Profile loggedUser={loggedUser} />} />
      </Routes>
    </main>
    </div>
  )
}
