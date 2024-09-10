import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';

function App() {


  return (
    <div className='app-main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
