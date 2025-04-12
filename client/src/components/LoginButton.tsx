import { FaInstagram } from "react-icons/fa6";
export default function LoginButton() {
  const clientId = "1236148904897293";
  const redirectUri = "https://localhost:5173/auth/redirect";
  const scope = `instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights`;

  const authUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

  return (
    <a
      href={authUrl}
      className="text-xl font-semibold rounded-xl flex gap-8 items-center w-96 px-8 py-4 m-4 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors duration-300 "
    >
      <FaInstagram size={32} color="white" />
      Sign in with Instagram
    </a>
  );
}
