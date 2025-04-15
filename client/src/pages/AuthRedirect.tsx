import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";
import Loader from "../components/Loader";
import { baseUrl } from "../configs/configs";

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
          `${baseUrl}/auth/login`,
          { code },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
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
