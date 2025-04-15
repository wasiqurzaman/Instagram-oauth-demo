import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../configs/configs";

interface UserProfile {
  id: string;
  username: string;
  name: string;
  profile_picture_url: string;
  followers_count: number;
  follows_count: number;
  media_count: number;
  biography: string;
}

const useProfile = () => {
  const fetchProfile = async () => {
    // try {
    const { data } = await axios.get<UserProfile>(`${baseUrl}/user/profile`, {
      withCredentials: true,
    });
    return data;
    // } catch (error) {
    //   return new Error(error.message);
    // }
  };

  return useQuery<UserProfile, Error>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });
};

export default useProfile;
