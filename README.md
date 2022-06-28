# the client side rendered by React.js

## 1. list products on the home page.

if you see such a warning from browser console `Warning: Each child in a list should have a unique "key" prop.`
simply add a second param to your map() method, as use index as key

```javascript
{
  data.map((item, idx) => {
    return (
      <div key={idx}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  });
}
```

###### review of centering use `justify-content:center`

## 2. react-router-dom

use `react-router-dom` to enable route

we will create home route and product routes

2.1 import BrowserRouter and wrap the whole div in App()

```javascript
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
```
