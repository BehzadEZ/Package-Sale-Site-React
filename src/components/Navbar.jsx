import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function Navbar({ loginStatus }) {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="bi bi-bag-heart-fill me-2"></i>Package Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">Checkout</Link>
            </li>
            <li className="nav-item">
              {loginStatus ? (
                <Link className="user-profile" to="/profile">
                  <FaUserCircle className="user-icon" />
                  <span className="username">Behzad</span>
                </Link>
              ) : (
                <Link className="btn SignUpRegister ms-2" to="/signup">
                  Sign Up / Register
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link cart-icon ms-3" to="/cart">
                <FaShoppingCart className="cart-icon-size" />
                <span className="cart-count">{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
