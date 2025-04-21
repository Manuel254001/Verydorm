import './App.css'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
     <Footer  /> 
    </>
  )
}

export default App
