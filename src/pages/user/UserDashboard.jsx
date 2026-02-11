import { useEffect, useState } from "react";
import api from "../../services/api";

export default function UserDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  const addToCart = async (id) => {
    await api.post("/cart/add", { productId: id, quantity: 1 });
    alert("Added to cart");
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      {products.map(p => (
        <div key={p._id}>
          <h4>{p.name}</h4>
          <p>{p.price}</p>
          <button onClick={() => addToCart(p._id)}>Add</button>
        </div>
      ))}
    </div>
  );
}
