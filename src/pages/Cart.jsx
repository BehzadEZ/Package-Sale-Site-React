import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // محاسبه مجموع قیمت آیتم‌ها
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <div className="cart-details">
        <h2 className="cart-title">Payment Information</h2>
        <div className="cart-payment-info">
          <label>Discount Code</label>
          <div className="cart-discount-code">
            <input type="text" placeholder="Enter discount code" />
            <button className="apply-discount-btn">Apply Code</button>
          </div>
          <div className="cart-summary">
            <div className="cart-summary-item">
              <span>Total</span>
              <span>{totalAmount.toLocaleString()} Toman</span>
            </div>
            <div className="cart-summary-item">
              <span>Discount</span>
              <span>0 Toman</span>
            </div>
            <div className="cart-summary-total">
              <span>Payable Amount</span>
              <span>{totalAmount.toLocaleString()} Toman</span>
            </div>
          </div>
          <button className="complete-purchase-btn">Complete Purchase</button>
        </div>
      </div>

      <div className="cart-items">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={`${item.id}-${item.title}`} className="cart-item">
              <div className="cart-item-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-price">
                  {item.price ? `${item.price.toLocaleString()} Toman` : "Price unavailable"}
                </p>
                <p className="cart-item-teacher">
                  Instructor: {item.teacher}
                </p>

                <button className="remove-cart-item" onClick={() => removeFromCart(item.id)}>🗑</button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
