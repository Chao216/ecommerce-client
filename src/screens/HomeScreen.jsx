import { Link } from "react-router-dom";
import { data } from "../data";
export default function HomeScreen() {
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="product">
              <Link to={`/product/${item.slug}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${item.slug}`}>
                  <p>{item.name}</p>
                </Link>
                <p>
                  <b>{item.price}</b>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
