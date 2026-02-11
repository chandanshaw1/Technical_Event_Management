import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function VendorSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("/auth/vendor/signup", {
        name,
        email,
        password,
      });
      alert("Vendor signup successful. Wait for admin approval.");
      navigate("/vendor");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h2>Vendor Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

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
