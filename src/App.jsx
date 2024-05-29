
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Alldata from './components/Alldata';

// import './App.css'

function App() {
  
 

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/getdata' element={<Alldata/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
