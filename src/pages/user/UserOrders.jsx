import { useEffect, useState } from "react";
import api from "../../services/api";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders/user").then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.map(o => (
        <div key={o._id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <p>Total: ₹{o.totalAmount}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
