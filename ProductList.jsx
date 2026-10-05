import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, category: "Indoor Plants", name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
  { id: 2, category: "Indoor Plants", name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
  { id: 3, category: "Indoor Plants", name: "Aloe Vera", price: 249, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 4, category: "Indoor Plants", name: "Spider Plant", price: 199, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" },
  { id: 5, category: "Indoor Plants", name: "Monstera", price: 599, image: "https://images.unsplash.com/photo-1614594575972-7d5c3f0f1f1f" },
  { id: 6, category: "Indoor Plants", name: "ZZ Plant", price: 399, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },

  { id: 7, category: "Outdoor Plants", name: "Rose Plant", price: 249, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322" },
  { id: 8, category: "Outdoor Plants", name: "Jasmine Plant", price: 299, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
  { id: 9, category: "Outdoor Plants", name: "Hibiscus", price: 279, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
  { id: 10, category: "Outdoor Plants", name: "Lavender", price: 349, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1" },
  { id: 11, category: "Outdoor Plants", name: "Marigold", price: 149, image: "https://images.unsplash.com/photo-1509223197845-458d87318791" },
  { id: 12, category: "Outdoor Plants", name: "Bougainvillea", price: 399, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },

  { id: 13, category: "Succulents", name: "Echeveria", price: 199, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc" },
  { id: 14, category: "Succulents", name: "Jade Plant", price: 249, image: "https://images.unsplash.com/photo-1525498128493-380d1990a112" },
  { id: 15, category: "Succulents", name: "Haworthia", price: 179, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 16, category: "Succulents", name: "String of Pearls", price: 299, image: "https://images.unsplash.com/photo-1534234762488-8a0d6b7d9d1d" },
  { id: 17, category: "Succulents", name: "Zebra Haworthia", price: 229, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },
  { id: 18, category: "Succulents", name: "Panda Plant", price: 259, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="products">
      <h1>Our Plants</h1>

      {categories.map(category => (
        <section className="category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const added = cartItems.some(item => item.id === plant.id);

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>₹{plant.price}</p>

                    <button
                      className="add-btn"
                      disabled={added}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
