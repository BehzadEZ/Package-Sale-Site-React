// Footer.jsx
import { useRefContext } from '../context/refContext';
import './Footer.css';

const Footer = () => {
  const {scrollToContact} = useRefContext()
    return (
        <footer className="footer">
            <hr />
            <div className="footer-container">
                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a onClick={scrollToContact} >Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 <a href="https://github.com/BehzadEZ">BehzadEz</a>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
