import { data } from "./data";
function App() {
  return (
    <div>
      <header>
        <a href="/">shoppin</a>
      </header>
      <main>
        <h1>Featured products</h1>
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
