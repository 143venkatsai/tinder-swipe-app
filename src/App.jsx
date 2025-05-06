import React from "react";
import { FaCartShopping } from "react-icons/fa6";

import ProductCard from "./components/ProductCard";
import products from "./data/products";

const App = () => {
  return (
    <>
      <header className="fixed bg-white flex justify-between items-center w-full px-5 py-2 shadow-lg">
        <img
          src="	https://shoppin.app/_next/image?url=%2Fassets%2Ficons%2Fstrawberry_icon.webp&w=64&q=75"
          alt="Shoppin"
          className="h-10"
        />
        <FaCartShopping className="text-2xl" />
      </header>
      <div className="pt-20 mx-5 mb-10">
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((eachProduct) => (
            <ProductCard productDetails={eachProduct} key={eachProduct.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
