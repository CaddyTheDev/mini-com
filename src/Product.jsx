import products from "./data/Product";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <p>Discover our latest gadgets & accessories</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="" />

            <div className="product-info">
              <h3>{product.name}</h3>

              <p className="product-category">{product.category}</p>

              <h4 className="product-price">
                ₦{product.price.toLocaleString("en-NG")}
              </h4>

              <Link className="view-details" to={`/products/${product.id}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
