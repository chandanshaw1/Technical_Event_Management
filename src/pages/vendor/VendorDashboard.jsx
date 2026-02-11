import { useState } from "react";
import api from "../../services/api";

export default function VendorDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await api.post("/products", { name, price });
    alert("Product added");
  };

  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <input placeholder="Product name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
