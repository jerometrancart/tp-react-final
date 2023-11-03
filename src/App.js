import { CartProvider } from './CartContext';
import './styles/App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from './components/Product/Products';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <CartProvider>
       <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Boutique</Navbar.Brand>
          <Nav className="ms-auto"> {/* Utilisation de ms-auto pour aligner à droite */}
            <Nav.Link as={Link} className="cart-link" to="/cart">Panier</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={<h1>404: Page not found</h1>}
        />
      </Routes>
    </Router>
    <ToastContainer />
    </CartProvider>
    
  );
}

export default App;
