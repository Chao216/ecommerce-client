# the client side rendered by React.js

## list products on the home page.

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
