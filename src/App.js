// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/Homepage/homepage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import LogIn from './pages/login/login';
import Members from './pages/members/members';
import Register from './pages/register/register';
function App() {
  const Home = (
    <div>
        <Navbar />
        <Homepage/>
    </div>
  )
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/home" element={Home} />
      <Route path="/about" element={<About />} />
      <Route path="/members" element={<Members />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
