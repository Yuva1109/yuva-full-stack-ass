import { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="catalog">
      <h1 className="heading"> Product Catalog </h1>
      <p className="subtext">Discover amazing products hand-picked for you</p>

      <div className="grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt={item.title} className="image" />

            <h2 className="title">{item.title}</h2>
            <p className="brand">Brand: <span>{item.brand || "Unknown"}</span></p>
            <p className="desc">{item.description.length > 80 ? item.description.slice(0, 80) + "..." : item.description}</p>

            <div className="price-row">
              <span className="price">${item.price}</span>
              <span className="discount">-{item.discountPercentage}% OFF</span>
            </div>

            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
