import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../configs/configs";

export interface UserMedia {
  id: string;
  caption: string;
  comments_count: number;
  like_count: number;
  media_url: string;
  media_type: string;
  thumbnail_url: string;
  owner: { id: string };
  username: string;
  timestamp: "string";
}

const useMedia = () => {
  const fetchMedia = async () => {
    // try {
    const { data } = await axios.get<UserMedia[]>(`${baseUrl}/media`, {
      withCredentials: true,
    });
    return data;
    // } catch (error) {
    //   return new Error(error.message);
    // }
  };

  return useQuery<UserMedia[], Error>({
    queryKey: ["media"],
    queryFn: fetchMedia,
  });
};

export default useMedia;
