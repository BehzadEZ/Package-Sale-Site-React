// src/components/ProductCard.jsx
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, title, description = "No description available.", imageUrl, price, teacher, loginStatus }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleNavigate = () => {
    navigate('/signup');
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    if (isInCart(id)) {
      removeFromCart(id);
    } else {
      addToCart({ id, title, description, imageUrl, price, teacher });
    }
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="img">
        <img src={imageUrl} alt={title} className="product-image" />
      </div>
      <div className="text">
        <p className="h3">{title}</p>
        <b>{price} Toman</b>
        <p>Instructor: {teacher}</p>
        <p className="p">{description}</p>

        <div className={`icon-box ${isInCart(id) ? "remove-bg" : ""}`}>
          {loginStatus ? (
            <button
              className={isInCart(id) ? "remove-cart-button" : "cart-button"}
              onClick={handleAddToCart}
            >
              {isInCart(id) ? "Remove From Cart" : "Add To Cart"}
            </button>
          ) : (
            <button
              className="cart-button"
              onClick={handleNavigate}
            >
              Sign Up Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
