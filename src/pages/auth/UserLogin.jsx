import { useState, useContext } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async () => {
    const res = await api.post("/auth/user/login", { email, password });
    login(res.data.token, "user");
    navigate("/user/dashboard");
  };

  return (
    <div>
      <h2>User Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
      <p>
        New user? <a href="/signup">Signup here</a>
      </p>
    </div>
  );
}
