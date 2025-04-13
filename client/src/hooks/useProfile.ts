import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UserProfile {
  id: string;
  username: string;
  name: string;
  profile_pic_url: string;
  followers_count: number;
  follows_count: number;
  media_count: number;
}

const useProfile = () => {
  const fetchProfile = async () => {
    // try {
    const { data } = await axios.get<UserProfile>(
      `http://localhost:3000/api/user/profile`,
      {
        withCredentials: true,
      }
    );
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
