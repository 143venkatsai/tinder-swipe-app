import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <BsCart4 className="mr-3" /> Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-50">Your cart is empty.</p>
      ) : (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <li key={item.id} className="bg-white shadow-lg rounded p-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.brand}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-md font-bold">₹{item.price}</span>
                <span className="text-slate-400 line-through text-sm">
                  ₹{item.originalPrice}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
