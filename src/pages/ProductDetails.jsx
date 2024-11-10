import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import {
  FaCalendar,
  FaChalkboardTeacher,
  FaHourglassStart,
  FaUsers,
} from "react-icons/fa";
import FAQ from "../components/faq";
import Comments from "../components/comments";
import products from "../data/Products";

const ProductDetails = ({ loginStatus , productImages }) => {
  const { id } = useParams();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const localProduct = products.find((item) => item.id === parseInt(id));
    if (localProduct) {
      setProduct(localProduct);
    } else {
      console.log("Local product not found");
    }
  }, [id]);

  const handleNavigate = () => {
    navigate("/signup");
  };

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddOrRemove = () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };


  return (
    <>
      <div className="product-details">
        <div className="product-image">
        <img src={product.imageUrl} alt={product.title || "Product Image"} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-price">{product.price} Toman</p>
          <p className="product-teacher">
            <FaChalkboardTeacher /> Teacher: {product.teacher}
          </p>
          <p className="product-sessions">
            <FaCalendar /> Sessions: {product.sessions}
          </p>
          <p className="product-duration">
            <FaHourglassStart /> Duration: {product.duration}
          </p>
          <p className="product-participants">
            <FaUsers /> Participants: {product.participants?.toLocaleString()}
          </p>
          <p className="product-description">
            {product.description || "No description available."}
          </p>
          {loginStatus ? (
            <button className="add-to-cart-btn" onClick={handleAddOrRemove}>
              {isInCart(product.id) ? "Remove From Cart" : "Add to Cart"}
            </button>
          ) : (
            <button className="add-to-cart-btn" onClick={handleNavigate}>
              Sign Up / Login
            </button>
          )}
        </div>
      </div>
      <FAQ questions={product.faq || []} />
      <Comments initialComments={product.initialComments || []} />
    </>
  );
};

export default ProductDetails;
