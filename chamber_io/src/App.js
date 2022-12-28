import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Header/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel'
import Home from './pages/Home'
import Success from './pages/Success'
import CartProvider from './CartContext'
import Footer from './components/Footer/Footer'
import Banner from './components/Body/Banner'
import About from './components/Body/About'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavbarComponent />
        <Banner />
        <About />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
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
