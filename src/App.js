import { data } from "./data";
function App() {
  return (
    <div>
      <header>
        <a href="/">shoppin</a>
      </header>
      <main>
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
  );
}

export default App;
