import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  useState } from 'react';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductsListInfo from './pages/ProductsListInfo';
import SignUpForm from './pages/SignUpForm';
import RegisterForm from './pages/RegisterForm';
import './App.css';
import Cart from './pages/Cart';
import { CartProvider } from "./context/CartContext";
import AboutUs from './pages/AboutUs';
import { RefProvider } from './context/refContext';
// import fetchProducts from './firebase/fetchProducts'; // این خط مربوط به فایر استور را کامنت کردیم
import products from './data/Products'; // استفاده از داده‌های JSON
import Profile from './pages/Profile';

function App() {
  const [loginStatus] = useState(true);
  // const [fetchedProducts, setFetchedProducts] = useState([]); // مربوط به داده‌های فایر استور
  // const [isLoading, setIsLoading] = useState(false); // وضعیت لودینگ را به false تغییر دادیم
  // const [error, setError] = useState(null);

  /* 
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsFromFirestore = await fetchProducts();
        const combinedProducts = productsFromFirestore.map((product, index) => ({
          ...product,
          imageUrl: productImages[index]?.imageUrl || "" // اضافه کردن تصویر مربوط به محصول
        }));
        setFetchedProducts(combinedProducts); // ذخیره در fetchedProducts
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load products:", error);
        setError("Failed to load products.");
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);
  */

  return (
    <div className='App'>
      <Router>
        <CartProvider>
          <Navbar loginStatus={loginStatus} />
          <RefProvider>
            <Routes>
              <Route path="/" element={<Home loginStatus={loginStatus} />} />
              <Route  path="/products" element={<ProductsListInfo products={products} loginStatus={loginStatus} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails products={products} loginStatus={loginStatus} />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </RefProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
