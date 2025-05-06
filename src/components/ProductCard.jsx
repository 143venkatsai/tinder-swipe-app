// components/ProductCard.js
import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const ProductCard = ({ productDetails }) => {
  const {
    id,
    name,
    brand,
    price,
    originalPrice,
    discountPercentage,
    imageUrl,
  } = productDetails;

  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleSwipe = (direction) => {
    if (direction === "right") {
      setLiked(true);
    } else if (direction === "left") {
      setLiked(false);
    } else if (direction === "up") {
      setInCart(true);
    }
  };

  return (
    <li className="w-full">
      <TinderCard key={id} onSwipe={handleSwipe} preventSwipe={["down"]}>
        <div className="bg-white rounded shadow-2xl p-5">
          <img src={imageUrl} alt={name} className="h-100 w-full rounded-lg" />
          <div className="flex flex-col">
            <h1 className="text-md font-semibold pt-2">{name}</h1>
            <h5 className="text-slate-500 pt-1">{brand}</h5>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <span>₹{price}</span>
                <span className="pl-4 text-slate-400 line-through">
                  ₹{originalPrice}
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold">
                {discountPercentage}% off
              </p>
            </div>

            {/* Feedback */}
            {liked && (
              <p className="text-pink-600 pt-2 font-medium">Liked ❤️</p>
            )}
            {!liked && <p className="text-gray-500 pt-2">Not Liked</p>}
            {inCart && (
              <p className="text-blue-600 font-medium">Added to Cart 🛒</p>
            )}
          </div>
        </div>
      </TinderCard>
    </li>
  );
};

export default ProductCard;
