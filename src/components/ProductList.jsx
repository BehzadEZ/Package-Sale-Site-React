// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import TitleHrTitle from './TitleHrTitle';
import './ProductList.css';
import productsData from '../data/Products'; 

const ProductList = ({ loginStatus }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // محدود کردن محصولات به 4 عدد
    setProducts(productsData.slice(0, 4));
  }, []);

  const goToProductsPage = () => {
    navigate('/products');
  };

  return (
    <React.Fragment>
      <TitleHrTitle text="Most Popular Products" />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description="Description here" // افزودن مقدار پیش‌فرض برای description
            imageUrl={product.imageUrl}
            price={product.price}
            teacher={product.teacher}
            loginStatus={loginStatus} // ارسال loginStatus
          />
        ))}
      </div>
      <button className="btn-more-products" onClick={goToProductsPage}>
        <span>More Products...</span>
      </button>
    </React.Fragment>
  );
};

export default ProductList;
