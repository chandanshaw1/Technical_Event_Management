import { useState, useContext } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async () => {
    const res = await api.post("/auth/admin/login", { email, password });
    login(res.data.token, "admin");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
      <p>
        First time admin? <a href="/admin/signup">Signup</a>
      </p>
    </div>
  );
}
