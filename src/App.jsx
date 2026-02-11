import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import UserLogin from "./pages/auth/UserLogin";
import VendorLogin from "./pages/auth/VendorLogin";
import AdminLogin from "./pages/auth/AdminLogin";

import UserSignup from "./pages/auth/UserSignup";
import VendorSignup from "./pages/auth/VendorSignup";
import AdminSignup from "./pages/auth/AdminSignup";

import UserDashboard from "./pages/user/UserDashboard";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserOrders from "./pages/user/UserOrders";

import { AuthContext } from "./context/authContext";

function App() {
  const { role } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />

      <Route path="/vendor" element={<VendorLogin />} />
      <Route path="/vendor/signup" element={<VendorSignup />} />

      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />

      <Route
        path="/user/dashboard"
        element={role === "user" ? <UserDashboard /> : <Navigate to="/" />}
      />

      <Route
        path="/user/orders"
        element={role === "user" ? <UserOrders /> : <Navigate to="/" />}
      />

      <Route
        path="/vendor/dashboard"
        element={role === "vendor" ? <VendorDashboard /> : <Navigate to="/vendor" />}
      />

      <Route
        path="/admin/dashboard"
        element={role === "admin" ? <AdminDashboard /> : <Navigate to="/admin" />}
      />
    </Routes>
  );
}

export default App;
