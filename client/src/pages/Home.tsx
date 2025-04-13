import { Navigate } from "react-router";
import LoginButton from "../components/LoginButton";
import { useAuthStore } from "../stores/authStore";

export default function Home() {
  const { user, isAuthenticated } = useAuthStore();

  if (user && isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center px-6 max-w-xl sm:max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md text-gray-700">
          Instagram Viewer
        </h1>
        <p className="text-md sm:text-xl font-medium mb-16 drop-shadow-sm text-gray-700">
          Log in with Instagram to view your profile, media, and reply to
          comments — all from a nice dashboard.
        </p>
        <LoginButton />
      </div>
    </div>
  );
}
