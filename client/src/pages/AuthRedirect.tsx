import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";
import Loader from "../components/Loader";

export default function AuthRedirect() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log(code);

    async function getAuth() {
      if (user) navigate("/dashboard");
      if (!code) return;
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          { code },
          { withCredentials: true }
        );
        console.log(res);
        setUser(res.data.user_id);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        // navigate("/");
      }
    }
    getAuth();
  }, [navigate, setUser, user]);

  return <Loader label="Redirecting..." />;
}
