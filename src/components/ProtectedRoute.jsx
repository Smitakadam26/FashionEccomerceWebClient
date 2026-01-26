import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useAuth();

  // If user is not logged in
  if (!user) {
    return <Navigate to="/Signup" replace />;
  }

  // If route is admin only, but user is not admin
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access
  return children;
}
