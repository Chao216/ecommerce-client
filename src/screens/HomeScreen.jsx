import { useEffect } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { data } from "../data";
import axios from "axios";
import { useReducer } from "react";
import logger from "use-reducer-logger";

const reducer = function (state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    laoding: true,
    error: "",
    products: [],
  });
  useEffect(() => {
    const fetchData = async function () {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {loading ? (
          <div>loading ...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((item, idx) => {
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
          })
        )}
      </div>
    </div>
  );
}
