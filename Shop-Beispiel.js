import React, { useState } from 'react';
import "./App.css";

function Shop() {
  const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 14.99 }
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const cartItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (cartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }
  };

  const renderCart = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
      <div>
        <h2>Cart:</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - {item.quantity}</li>
          ))}
        </ul>
        <h2>Total: <span>{total.toFixed(2)}</span></h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h1>Vanilla JS Shop</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {renderCart()}
    </div>
  );
}

export default Shop;
