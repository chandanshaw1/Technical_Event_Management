import { useEffect, useState } from "react";
import api from "../../services/api";

export default function AdminDashboard() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    api.get("/admin/vendors").then(res => setVendors(res.data));
  }, []);

  const approve = async (id) => {
    await api.put(`/admin/vendor/${id}`, { status: "approved" });
    alert("Vendor Approved");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {vendors.map(v => (
        <div key={v._id}>
          <p>{v.email} - {v.status}</p>
          <button onClick={() => approve(v._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}
