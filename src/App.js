import { data } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">shoppin</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Featured products</h1>
          <div className="products">
            {data.map((item, idx) => {
              return (
                <div key={idx} className="product">
                  <a href={`/product/${item.slug}`}>
                    <img src={item.image} alt={item.name} />
                  </a>
                  <div className="product-info">
                    <a href={`/product/${item.slug}`}>
                      <p>{item.name}</p>
                    </a>
                    <p>
                      <b>{item.price}</b>
                    </p>
                    <button>Add to cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
