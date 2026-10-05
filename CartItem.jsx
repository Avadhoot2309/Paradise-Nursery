import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const changeQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/plants">Continue Shopping</Link>
        </>
      ) : (
        <>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>

              <div className="quantity">
                <button
                  onClick={() =>
                    changeQuantity(item.id, item.quantity - 1)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    changeQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))}

          <h2>Total Amount: ₹{total}</h2>

          <div className="cart-actions">
            <button
              className="checkout"
              onClick={() => alert("Coming Soon")}
            >
              Checkout
            </button>

            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
