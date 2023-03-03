import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Header/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel'
import Home from './pages/Home'
import Success from './pages/Success'
import CartProvider from './CartContext'
import Footer from './components/Footer/Footer'
import { Slider } from './components/Body/Slider';
import Banner from './components/Body/Banner'
import About from './components/Body/About'



function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavbarComponent />
        <Banner />
        <About />
        <Slider />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
      <Footer />
    </div>
  );
}
export default App;
