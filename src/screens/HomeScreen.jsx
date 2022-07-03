import { useEffect } from "react";
// import { useState } from "react";

// import { data } from "../data";
import axios from "axios";
import { useReducer } from "react";
import logger from "use-reducer-logger";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

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
          <Row>
            {products.map((item, idx) => {
              return (
                <Col key={item.slug} sm={6} md={4} lg={3}>
                  <Product item={item}></Product>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
}
