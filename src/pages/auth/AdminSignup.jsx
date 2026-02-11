import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function AdminSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("/auth/admin/signup", { email, password });
      alert("Admin created. Please login.");
      navigate("/admin");
    } catch {
      alert("Admin signup failed");
    }
  };

  return (
    <div>
      <h2>Admin Signup</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit}>Signup</button>
    </div>
  );
}
