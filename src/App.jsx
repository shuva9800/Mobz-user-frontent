
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './components/Header';
import Signup from './components/Signup';
import Alldata from './components/Alldata';
import Liveroom from './components/Liveroom';
import { useEffect, useState } from 'react';
// import user from '../../backend/model/user';
const socket = io('http://localhost:4000');


// import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      socket.on('updateUsers', (users) => {
          setUsers(users);
      });

      return () => {
          socket.off('updateUsers');
      };
  }, []);

  const addUser = (user) => {
      socket.emit('newUser', user);
  };
 

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/getdata' element={<Alldata/>} />
        <Route path='/liveroom' element={<Liveroom users ={users}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
