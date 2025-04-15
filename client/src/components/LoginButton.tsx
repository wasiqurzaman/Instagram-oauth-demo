import { FaInstagram } from "react-icons/fa6";
import { clientId, redirectUri, scope } from "../configs/configs";

export default function LoginButton() {
  const authUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

  const handleClick = () => {
    window.location.href = authUrl;
  };

  return (
    <button
      onClick={handleClick}
      className="text-base sm:text-xl font-semibold rounded-xl shadow-lg flex gap-8 items-center w-72 sm:w-96 px-4 sm:px-8 py-3 sm:py-4 m-4 cursor-pointer bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 hover:scale-105 transition-all"
    >
      <FaInstagram size={32} color="white" />
      Login with Instagram
    </button>
  );
}
