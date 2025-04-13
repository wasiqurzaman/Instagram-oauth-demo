import { PropsWithChildren } from "react";
import { useAuthStore } from "../stores/authStore";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }: PropsWithChildren) {
  const { user } = useAuthStore();

  return user ? children : <Navigate to="/" />;
}
