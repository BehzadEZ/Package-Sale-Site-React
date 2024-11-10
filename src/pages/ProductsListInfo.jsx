// src/components/ProductsListInfo.jsx
import ProductCard from '../components/ProductCard';
import './ProductsListInfo.css';
import products from '../data/Products'; 

const ProductsListInfo = ({ loginStatus }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          teacher={product.teacher}
          imageUrl={product.imageUrl}
          loginStatus={loginStatus} 
        />
      ))}
    </div>
  );
};

export default ProductsListInfo;
