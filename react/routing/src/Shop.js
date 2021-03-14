import r from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = r.useState([]);

  r.useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => (
        <h3 key={item.itemId}>
          {' '}
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h3>
      ))}
    </div>
  );

  async function fetchItems() {
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const items = await data.json();
    setItems(items.data);
  }
}

export default Shop;
