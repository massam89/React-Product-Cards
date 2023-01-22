import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const products = [
    { id: 1, title: "Socks", price: 39.99, src: "./socks.jpg" },
    { id: 2, title: "Shoes", price: 88.45, src: "./public/shoe.jpg" },
    { id: 3, title: "Shorts", price: 25.99, src: "./shorts.jpg" },
    { id: 4, title: "Hat", price: 19, src: "./hat.jpg" },
  ];

  return (
    <>
      <div className="cards">
        <ProductCard {...products[0]}></ProductCard>
        <ProductCard {...products[1]}></ProductCard>
        <ProductCard {...products[2]}></ProductCard>
        <ProductCard {...products[3]}></ProductCard>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
