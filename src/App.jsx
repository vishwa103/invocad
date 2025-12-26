
import {HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';
import Portfolio from './pages/Portfolio/Portfolio';
import ProductPage from './pages/Portfolio/ProductPage/ProductPage';
function App() {

  return (
    <HashRouter>
      <Header/>
      <div className='mainContainer'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:id' element={<ProductPage />} />
      </Routes>
      </div>
      <Footer/>
      </HashRouter>
  )
}

export default App
