import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectCartItems, selectCartCount } from '../redux/CartSlice.jsx';

// Paradise Nursery catalog: three categories, six plants in each.
const plantsArray = [
  {
    "category": "Air Purifying Plants",
    "plants": [
      {
        "id": "snake-plant",
        "name": "Snake Plant",
        "price": 22,
        "image": "/plants/snake-plant.svg",
        "category": "Air Purifying Plants"
      },
      {
        "id": "peace-lily",
        "name": "Peace Lily",
        "price": 28,
        "image": "/plants/peace-lily.svg",
        "category": "Air Purifying Plants"
      },
      {
        "id": "spider-plant",
        "name": "Spider Plant",
        "price": 18,
        "image": "/plants/spider-plant.svg",
        "category": "Air Purifying Plants"
      },
      {
        "id": "boston-fern",
        "name": "Boston Fern",
        "price": 24,
        "image": "/plants/boston-fern.svg",
        "category": "Air Purifying Plants"
      },
      {
        "id": "rubber-plant",
        "name": "Rubber Plant",
        "price": 34,
        "image": "/plants/rubber-plant.svg",
        "category": "Air Purifying Plants"
      },
      {
        "id": "areca-palm",
        "name": "Areca Palm",
        "price": 38,
        "image": "/plants/areca-palm.svg",
        "category": "Air Purifying Plants"
      }
    ]
  },
  {
    "category": "Aromatic Plants",
    "plants": [
      {
        "id": "lavender",
        "name": "Lavender",
        "price": 19,
        "image": "/plants/lavender.svg",
        "category": "Aromatic Plants"
      },
      {
        "id": "rosemary",
        "name": "Rosemary",
        "price": 15,
        "image": "/plants/rosemary.svg",
        "category": "Aromatic Plants"
      },
      {
        "id": "mint",
        "name": "Mint",
        "price": 12,
        "image": "/plants/mint.svg",
        "category": "Aromatic Plants"
      },
      {
        "id": "jasmine",
        "name": "Jasmine",
        "price": 26,
        "image": "/plants/jasmine.svg",
        "category": "Aromatic Plants"
      },
      {
        "id": "sweet-basil",
        "name": "Sweet Basil",
        "price": 14,
        "image": "/plants/sweet-basil.svg",
        "category": "Aromatic Plants"
      },
      {
        "id": "lemon-balm",
        "name": "Lemon Balm",
        "price": 16,
        "image": "/plants/lemon-balm.svg",
        "category": "Aromatic Plants"
      }
    ]
  },
  {
    "category": "Low Maintenance Plants",
    "plants": [
      {
        "id": "aloe-vera",
        "name": "Aloe Vera",
        "price": 20,
        "image": "/plants/aloe-vera.svg",
        "category": "Low Maintenance Plants"
      },
      {
        "id": "zz-plant",
        "name": "ZZ Plant",
        "price": 30,
        "image": "/plants/zz-plant.svg",
        "category": "Low Maintenance Plants"
      },
      {
        "id": "jade-plant",
        "name": "Jade Plant",
        "price": 18,
        "image": "/plants/jade-plant.svg",
        "category": "Low Maintenance Plants"
      },
      {
        "id": "golden-pothos",
        "name": "Golden Pothos",
        "price": 21,
        "image": "/plants/golden-pothos.svg",
        "category": "Low Maintenance Plants"
      },
      {
        "id": "mini-cactus",
        "name": "Mini Cactus",
        "price": 13,
        "image": "/plants/mini-cactus.svg",
        "category": "Low Maintenance Plants"
      },
      {
        "id": "echeveria",
        "name": "Echeveria",
        "price": 17,
        "image": "/plants/echeveria.svg",
        "category": "Low Maintenance Plants"
      }
    ]
  }
];

export function Navbar({ page, navigate }) {
  const cartCount = useSelector(selectCartCount);
  return <nav className="navbar">
    <strong>🌿 Paradise Nursery</strong>
    <div className="navlinks">
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('products')}>Plants</button>
      <button onClick={() => navigate('cart')}>Cart <span className="cart-count">{cartCount}</span></button>
    </div>
  </nav>;
}

export function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedToCart = Object.fromEntries(cartItems.map(item => [item.id, true]));
  const handleAddToCart = plant => dispatch(addItem(plant));
  return <main className="container">
    <div className="intro"><h1>Shop Our Beautiful Plants</h1><p>18 unique houseplants across three categories.</p></div>
    {plantsArray.map(({category,plants}) => <section className="category" key={category}>
      <h2>{category}</h2>
      <div className="grid">{plants.map(plant => <article className="product" key={plant.id}>
        <img src={plant.image} alt={plant.name} />
        <div className="product-body">
          <h3>{plant.name}</h3>
          <p>A lovely indoor plant to brighten up your home.</p>
          <div className="product-bottom">
            <span className="price">${plant.price.toFixed(2)}</span>
            <button className="add-button" onClick={() => handleAddToCart(plant)}
              disabled={!!addedToCart[plant.id]}>
              {addedToCart[plant.id] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </article>)}</div>
    </section>)}
  </main>;
}
export default Navbar;
