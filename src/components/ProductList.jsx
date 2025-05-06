import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => {
  return (
    <div>
      <header className="bg-white flex justify-between items-center w-full px-5 py-3 shadow-lg">
        <img
          src="	https://shoppin.app/_next/image?url=%2Fassets%2Ficons%2Fstrawberry_icon.webp&w=64&q=75"
          alt="Shoppin"
          className="h-10"
        />
        <Link to="/cart" className="bg-blue-600 px-4 py-2 rounded shadow-lg">
          <BsCart4 className="text-white text-xl" />
        </Link>
      </header>
      <h1 className="text-xl text-center font-bold py-5">Tinder Swipe</h1>
      <div className="mx-5 mb-10">
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((eachProduct) => (
            <ProductCard productDetails={eachProduct} key={eachProduct.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
