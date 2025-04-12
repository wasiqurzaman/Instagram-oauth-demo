import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    console.log(code);
    if (code) {
      axios
        .post(
          "http://localhost:3000/api/auth/login",
          { code },
          { withCredentials: true }
        )
        .then(() => navigate("/dashboard"))
        .catch(() => alert("login failed"));
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
}
