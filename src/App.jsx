
//new

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './components/Header';
import Signup from './components/Signup';
import Alldata from './components/Alldata';
import Liveroom from './components/Liveroom';
import { useEffect, useState } from 'react';

const socket = io('https://mobz-mern-backend.onrender.com');

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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/signup' element={<Signup socket={socket}  />} />
        <Route path='/getdata' element={<Alldata />} />
        <Route path='/liveroom' element={<Liveroom users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

