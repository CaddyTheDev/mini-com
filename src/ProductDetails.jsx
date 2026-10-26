import { useParams } from "react-router-dom";
import products from "./data/Product";

function ProductDetails() {
  const { id } = useParams();

  console.log(id);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    alert("Product not found. Go back to homepage");
  }

  // ...
  return (
    <div className="details-card">
      <span className="details-image">
        <img src={product.image} />
      </span>
      <h2>{product.name}</h2>
      <p className="details-price">₦{product.price.toLocaleString("en-NG")}</p>
      <div className="details-divider"></div>
      <p className="details-category">Category: {product.category}</p>
      <div className="details-divider"></div>
      <label>Description: </label>
      <p className="details-description">{product.description}</p>
    </div>
  );
}
export default ProductDetails;
