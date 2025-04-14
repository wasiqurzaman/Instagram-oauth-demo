import { useAuthStore } from "../stores/authStore";
import { FaUser } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router";

export default function Dashboard() {
  const { logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-800 dark:text-white">
            Manage your Instagram profile, media, and comments here.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/profile">
            <div className="bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl transition p-6 rounded-2xl text-center cursor-pointer">
              <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <FaUser />
                Profile
              </h2>
              <p className="text-gray-800 dark:text-white">
                View your Instagram username, bio, and profile photo.
              </p>
            </div>
          </Link>

          <Link to="/feed">
            <div className="bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl transition p-6 rounded-2xl text-center cursor-pointer">
              <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <FaPhotoVideo />
                Media Feed
              </h2>
              <p className="text-gray-700 dark:text-white">
                Browse your posts, reels, and media with captions.
              </p>
            </div>
          </Link>

          <button
            onClick={logout}
            className="bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl transition p-6 rounded-2xl text-center cursor-pointer w-full"
          >
            <h2 className="text-xl font-semibold mb-2 text-red-700 dark:text-red-500 flex items-center justify-center gap-2">
              <MdLogout />
              Logout
            </h2>
            <p className="text-gray-700 dark:text-white">
              Securely sign out of your Instagram session.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
