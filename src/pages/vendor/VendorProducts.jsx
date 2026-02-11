import { useEffect, useState } from "react";
import api from "../../services/api";

export default function VendorProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products/vendor").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>My Products</h2>
      {products.map(p => (
        <div key={p._id}>
          <p>{p.name} - {p.status}</p>
        </div>
      ))}
    </div>
  );
}
