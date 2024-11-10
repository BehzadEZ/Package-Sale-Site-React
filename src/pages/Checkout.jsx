import './Checkout.css';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      {/* Section: Order Summary */}
      <section className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="checkout-item">
              <div className="item-details">
                <img src={item.image} alt={item.name} className="item-image" />
                <span className="item-name">{item.name}</span>
              </div>
              <span className="item-price">${item.price} x {item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="total-amount">
          <span>Total Amount:</span>
          <span>${totalAmount}</span>
        </div>
      </section>

      {/* Section: Customer Information */}
      <section className="customer-info">
        <h2>Customer Information</h2>
        <form className="customer-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Address" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="City" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Postal Code" required />
          </div>
          <div className="input-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
        </form>
      </section>

      {/* Section: Payment */}
      <section className="payment-info">
        <h2>Payment Information</h2>
        <form className="payment-form">
          <div className="input-group">
            <input type="text" placeholder="Card Number" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="MM/YY" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="CVV" required />
          </div>
        </form>
      </section>

      {/* Section: Confirm Order Button */}
      <button className="confirm-order-btn">Confirm Order</button>
    </div>
  );
};

export default Checkout;
